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
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', // Mock SMTP
    port: 587,
    auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'ethereal.pass'
    }
});

// Routes

// API: Handle Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // 1. Save to Database
    const sql = `INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, message], function (err) {
        if (err) {
            console.error('DB Error:', err.message);
            return res.status(500).json({ error: 'Failed to save inquiry' });
        }

        const inquiryId = this.lastID;
        console.log(`Inquiry saved with ID: ${inquiryId}`);

        // 2. Send Email (Mock)
        // In a real app, this would send an actual email to the company
        console.log(`\n--- [MOCK EMAIL SENT] ---`);
        console.log(`To: admin@pineforge.digital`);
        console.log(`From: ${email}`);
        console.log(`Subject: New Inquiry from ${name}`);
        console.log(`Message: ${message}`);
        console.log(`-------------------------\n`);

        return res.status(200).json({ message: 'Message received successfully!', id: inquiryId });
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
