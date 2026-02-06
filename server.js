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
app.use(helmet()); // Security Headers
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
    if (req.path === '/index') {
        return res.redirect(301, '/home');
    }
    next();
});

// Serve 'home' manually since there is no home.html
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

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
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Input Validation
    if (name.length > 100) return res.status(400).json({ error: 'Name is too long.' });
    if (email.length > 255) return res.status(400).json({ error: 'Email is too long.' });
    if (message.length > 2000) return res.status(400).json({ error: 'Message is too long.' });

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    // 1. Save to Database
    const sql = `INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)`;

    // We wrap db.run in a promise if not already (our hybrid db might behave differently, 
    // but let's stick to the callback style or check database.js again. 
    // Actually, looking at previous database.js, it supports a callback.

    db.run(sql, [name, email, message], async function (err) {
        if (err) {
            console.error('DB Error:', err.message);
            return res.status(500).json({ error: 'Failed to save inquiry' });
        }

        const inquiryId = this.lastID || 'postgres-id';
        // Note: PG implementation in database.js might not set `this.lastID` identically in the callback context 
        // unless we strictly verified it. But let's focus on email.

        console.log(`Inquiry saved. ID: ${inquiryId}`);

        // 2. Send Real Email via Resend
        if (resend) {
            try {
                const data = await resend.emails.send({
                    from: 'Pineforge Website <admin@pineforge.digital>',
                    to: ['admin@pineforge.digital'],
                    subject: `New Inquiry from ${name}`,
                    html: `
                        <h3>New Contact Form Submission</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
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
