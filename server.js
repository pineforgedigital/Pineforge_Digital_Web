const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

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

app.use(express.static(path.join(__dirname, 'public')));

// Email Setup (Mock for now, easy to swap for real SMTP)
// For production, use real credentials or a service like SendGrid
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// ... (Middleware remains)

// API: Handle Contact Form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
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
        try {
            const data = await resend.emails.send({
                from: 'Pineforge Website <onboarding@resend.dev>', // Default testing domain. 
                // CRITICAL: User needs to verify domain on Resend to use 'admin@pineforge.digital'.
                // For now, 'onboarding@resend.dev' only sends to the account owner's email.
                // I will use that for safety until they verify domain.
                to: ['admin@pineforge.digital'], // This MUST be the email they signed up with on Resend (if using testing domain)
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
            // We still return success to the user because we saved it to DB at least.
            return res.status(200).json({ message: 'Message saved (Email delivery pending config).' });
        }
    });
});

// Fallback for SPA (if we were using one, but for static files this is fine)
// Just serving index.html for root is handled by express.static

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
