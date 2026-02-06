const { Pool } = require('pg');
const path = require('path');

let db;

// Check for EITHER Railway's default (DATABASE_URL) or Vercel's default (POSTGRES_URL)
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (connectionString) {
    // --- PostgreSQL Setup (Production/Railway/Vercel) ---
    console.log('Detected Database Connection String. Switching to PostgreSQL...');

    const pool = new Pool({
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    });

    // Wrapper to match SQLite's run() and get() methods roughly
    db = {
        query: (text, params) => pool.query(text, params),

        // Emulate SQLite 'run' for inserts/updates
        run: async function (sql, params, callback) {
            // Convert SQLite '?' placeholders to PG '$1, $2...'
            let i = 1;
            const pgSql = sql.replace(/\?/g, () => `$${i++}`);

            // If it's an INSERT, we append RETURNING id to get the ID back like SQLite
            const isInsert = /insert/i.test(sql);
            const finalSql = isInsert ? `${pgSql} RETURNING id` : pgSql;

            try {
                const res = await pool.query(finalSql, params);
                const context = {};
                if (isInsert && res.rows[0]) {
                    context.lastID = res.rows[0].id;
                }
                if (callback) callback.call(context, null);
            } catch (err) {
                if (callback) callback(err);
            }
        },

        close: () => pool.end()
    };

    // Init PG Table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS inquiries (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    pool.query(createTableQuery)
        .then(() => console.log('PostgreSQL table "inquiries" ready.'))
        .catch(err => console.error('Error creating PG table:', err));

} else {
    // --- SQLite / Fallback Setup ---

    // CRITICAL: On Vercel (Production), file system is Read-Only.
    // Determining if we are in a serverless environment where we cannot write files.
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;

    if (isProduction) {
        console.warn('WARNING: No DATABASE_URL found in Production. Database features will be disabled to prevent crash.');

        // Mock DB to allow server to start (serves static pages) but fails gracefully on form submit
        db = {
            query: async () => { throw new Error('Database not configured'); },
            run: async (sql, params, callback) => {
                console.error('Attempted DB write without configuration.');
                if (callback) callback(new Error('Database not configured (Contact Form unavailable)'));
            },
            close: () => { }
        };
    } else {
        // Local Development (SQLite)
        console.log('No DATABASE_URL found. Using local SQLite database.');
        const sqlite3 = require('sqlite3').verbose();
        const dbPath = path.resolve(__dirname, 'inquiries.db');
        const sqliteDb = new sqlite3.Database(dbPath, (err) => {
            if (err) console.error('Error opening SQLite DB:', err.message);
            else {
                console.log('Connected to local SQLite database.');
                initSqliteDb(sqliteDb);
            }
        });

        db = {
            run: (sql, params, callback) => sqliteDb.run(sql, params, callback),
            query: (sql, params) => {
                return new Promise((resolve, reject) => {
                    sqliteDb.all(sql, params, (err, rows) => {
                        if (err) reject(err);
                        else resolve({ rows });
                    });
                });
            },
            close: () => sqliteDb.close()
        };
    }
}

function initSqliteDb(sqliteDb) {
    sqliteDb.run(`CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) console.error('Error creating SQLite table:', err.message);
        else console.log('SQLite "inquiries" table ready.');
    });
}

module.exports = db;
