const sqlite3 = require('sqlite3').verbose();
const { Pool } = require('pg');
const path = require('path');

let db;
let dbType = 'sqlite';

if (process.env.DATABASE_URL) {
    // --- PostgreSQL Setup (Production/Railway) ---
    dbType = 'postgres';
    console.log('Detected DATABASE_URL. Switching to PostgreSQL...');

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    // Wrapper to match SQLite's run() and get() methods roughly, for easier migration
    // Note: SQLite's run() callback provides `this.lastID`. PG returns `RETURNING id`.
    // We will need to adjust the CALLER (server.js) or make this wrapper strictly uniform.
    // For simplicity, let's export a unified interface.

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
    // --- SQLite Setup (Local Development) ---
    console.log('No DATABASE_URL found. Using local SQLite database.');
    const dbPath = path.resolve(__dirname, 'inquiries.db');
    const sqliteDb = new sqlite3.Database(dbPath, (err) => {
        if (err) console.error('Error opening SQLite DB:', err.message);
        else {
            console.log('Connected to local SQLite database.');
            initSqliteDb(sqliteDb);
        }
    });

    // Provide the same interface
    db = {
        run: (sql, params, callback) => sqliteDb.run(sql, params, callback),
        query: (sql, params) => {
            // For simple queries if needed later
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
