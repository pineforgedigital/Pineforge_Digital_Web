// Load environment variables locally
try {
    process.loadEnvFile();
} catch (err) {
    // .env file not found (normal in production/Vercel)
}

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/database');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

const compression = require('compression');

// Middleware
app.set('trust proxy', 1); // Trust first proxy (Vercel)
app.use(compression()); // Gzip Compression
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'", "vercel.live", "vercel.com", "'unsafe-inline'"],
            "style-src": ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
            "font-src": ["'self'", "fonts.gstatic.com"],
            "img-src": ["'self'", "data:", "pineforge.digital"],
            "connect-src": ["'self'", "vercel.live", "vercel.com"]
        }
    }
}));
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Rate Limiting (Max 5 inquiries per hour per IP)
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message: { error: 'Too many requests, please try again later.' }
});

// Cookie Logger Middleware
app.use((req, res, next) => {
    const visitorId = req.cookies.visitor_id;
    if (visitorId) {
        console.log(`[Visitor] Returning ID: ${visitorId}`);
    } else {
        console.log(`[Visitor] New or Anonymous Session`);
    }
    next();
});

// Clean URL Redirects
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        return res.redirect(301, req.path.slice(0, -5));
    }
    if (req.path === '/index' || req.path === '/home') {
        return res.redirect(301, '/');
    }
    next();
});

// Serve 'home' manually since there is no home.html
// Route for Home is handled by root '/' and middleware redirect above.

// Explicitly serve root to prevent static middleware ambiguity
app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public'), {
    extensions: ['html'],
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
    }
}));

// Email Setup (Mock for now, easy to swap for real SMTP)
// For production, use real credentials or a service like SendGrid
const { Resend } = require('resend');
let resend;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
} else {
    console.warn("Resend API Key is missing. Email sending will be disabled.");
}

// ... (Middleware remains)

// API: Handle Contact Form
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { name, email, company, service, message } = req.body;

    if (!name || !email || !message || !service) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // Input Validation
    if (name.length > 100) return res.status(400).json({ error: 'Name is too long.' });
    if (email.length > 255) return res.status(400).json({ error: 'Email is too long.' });
    if (company && company.length > 100) return res.status(400).json({ error: 'Company name is too long.' });
    if (message.length > 2000) return res.status(400).json({ error: 'Message is too long.' });

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    // 1. Save to Database (We need to update the table scheme first if we want to save these)
    // For now, let's append them to the message string in DB if schema update is risky,
    // OR just update the SQL query if we assume schema is flexible/we can alter it.
    // Given we can't easily alter SQLite/Postgres schema without a migration script,
    // SAFETY: We will prepend Company/Service to the message body for storage.

    const combinedMessage = `
[Company: ${company || 'N/A'}]
[Service: ${service}]

${message}`;

    const sql = `INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)`;

    db.run(sql, [name, email, combinedMessage], async function (err) {
        if (err) {
            console.error('DB Error:', err.message);
            return res.status(500).json({ error: 'Failed to save inquiry' });
        }

        const inquiryId = this.lastID || 'postgres-id';
        console.log(`Inquiry saved. ID: ${inquiryId}`);

        // 2. Send Real Email via Resend
        if (resend) {
            try {
                const data = await resend.emails.send({
                    from: 'Pineforge Website <admin@pineforge.digital>',
                    to: ['admin@pineforge.digital'],
                    reply_to: email, // Directly reply to the customer
                    subject: `New Inquiry: ${service} - ${name}`,
                    subject: `New Inquiry: ${service} - ${name}`,
                    subject: `New Inquiry: ${service} - ${name}`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <body style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #0B1120; color: #f8fafc; padding: 40px 20px; margin: 0;">
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15); border: 1px solid #1e293b;">
                                
                                <!-- Header -->
                                <tr>
                                    <td style="background-color: #1e293b; padding: 30px; text-align: center; border-bottom: 2px solid #38bdf8;">
                                        <h1 style="margin: 0; color: #f8fafc; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Pineforge Digital</h1>
                                        <p style="margin: 10px 0 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Website Inquiry</p>
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding: 40px 30px;">
                                        
                                        <!-- Key Details Grid -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding-bottom: 20px; border-bottom: 1px solid #334155;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Name</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${name}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0; border-bottom: 1px solid #334155;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Email</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">
                                                        <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0; border-bottom: 1px solid #334155;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Company</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${company || 'N/A'}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Service Interest</p>
                                                    <span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 6px 14px; border-radius: 999px; font-size: 14px; font-weight: 600; border: 1px solid rgba(56, 189, 248, 0.2);">${service}</span>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Message Box -->
                                        <div style="margin-top: 35px;">
                                            <p style="margin: 0 0 12px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Message</p>
                                            <div style="background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 24px; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                                                ${message.replace(/\n/g, '<br>')}
                                            </div>
                                        </div>

                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="background-color: #0b1120; padding: 24px; text-align: center; border-top: 1px solid #1e293b;">
                                        <p style="margin: 0; font-size: 13px; color: #64748b;">
                                            You can simply reply to this email to contact the customer directly.
                                        </p>
                                        <p style="margin: 12px 0 0; font-size: 12px; color: #475569;">
                                            &copy; ${new Date().getFullYear()} Pineforge Digital LLC
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                        </body>
                        </html>
                    `
                });

                console.log('Email sent via Resend:', data);
                return res.status(200).json({ message: 'Message received successfully!' });

            } catch (emailErr) {
                console.error('Resend Error:', emailErr);
                return res.status(200).json({ message: 'Message saved (Email delivery pending config).' });
            }
        } else {
            console.log('Email skipped (Resend not configured)');
            return res.status(200).json({ message: 'Message saved successfully!' });
        }
    });
});

// Fallback for SPA (if we were using one, but for static files this is fine)
// Just serving index.html for root is handled by express.static

// Fallback: 404 Handler (must be last route)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
