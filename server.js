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
    const { name, email, company, service, message, isEstimate, selections } = req.body;

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

    // ---------------------------------------------------------
    // INTERNAL PRICING LOGIC (Mirrors estimate.js)
    // ---------------------------------------------------------
    let pricingBreakdown = null;
    let riskFlags = [];

    if (isEstimate && selections) {
        // Constants
        const BASE_COST = 2500;
        const TYPE_MULTIPLIERS = { 'Informational': 1.0, 'Service-Based': 1.1, 'Professional Firm': 1.25, 'Custom Web App': 2.0 };
        const SCOPE_COSTS = { 'Core Pages Only': 0, 'Small Site': 600, 'Medium Site': 1400, 'Large Site': 2800 };
        const DESIGN_COSTS = { 'Standard': 0, 'Custom Branding': 1000, 'Advanced UI': 2000 };
        const FEATURE_COSTS = {
            'Contact Form': 200, 'Custom Form Logic': 400, 'User Accounts': 1000,
            'CMS': 1200, 'Database': 1500, 'Integrations': 1000, 'SEO Fundamentals': 700
        };
        const DEPLOY_COSTS = { 'Hosting Setup': 300, 'Maintenance': 0 };
        const CONTENT_COSTS = { 'Ready': 0, 'Rough Draft': 500, 'Need Help': 1500, 'Later': 0 };
        const TIMELINE_MULTIPLIERS = { 'Flexible': 1.0, 'Standard': 1.0, 'Urgent': 1.25 };

        // Calculations
        let subtotal = BASE_COST;
        let breakdown = []; // Array of { item, cost }

        // Base
        breakdown.push({ item: 'Base Website Package', cost: BASE_COST });

        // Adders
        const scopeCost = SCOPE_COSTS[selections.scope] || 0;
        if (scopeCost > 0) breakdown.push({ item: `Scope: ${selections.scope}`, cost: scopeCost });
        subtotal += scopeCost;

        const designCost = DESIGN_COSTS[selections.design] || 0;
        if (designCost > 0) breakdown.push({ item: `Design: ${selections.design}`, cost: designCost });
        subtotal += designCost;

        const contentCost = CONTENT_COSTS[selections.content] || 0;
        if (contentCost > 0) breakdown.push({ item: `Content: ${selections.content}`, cost: contentCost });
        subtotal += contentCost;

        // Features
        if (selections.features && Array.isArray(selections.features)) {
            selections.features.forEach(feat => {
                const cost = FEATURE_COSTS[feat] || 0;
                if (cost > 0) breakdown.push({ item: `Feature: ${feat}`, cost: cost });
                subtotal += cost;
            });
        }

        // Deployment
        if (selections.deployment && Array.isArray(selections.deployment)) {
            selections.deployment.forEach(dep => {
                const cost = DEPLOY_COSTS[dep] || 0;
                if (cost > 0) breakdown.push({ item: `Deploy: ${dep}`, cost: cost });
                subtotal += cost;
            });
        }

        // Multipliers
        const typeMult = TYPE_MULTIPLIERS[selections.type] || 1.0;
        const timeMult = TIMELINE_MULTIPLIERS[selections.timeline] || 1.0;

        let total = subtotal;
        total *= typeMult;
        total *= timeMult;

        // Client Range
        const min = Math.round((total * 0.85) / 100) * 100;
        const max = Math.round((total * 1.15) / 100) * 100;

        // Risk Flags
        if (selections.timeline === 'Urgent') riskFlags.push('URGENT TIMELINE');
        if (selections.content === 'Need Help' || selections.content === 'Later') riskFlags.push('CONTENT MISSING');
        if (selections.type === 'Custom Web App') riskFlags.push('HIGH COMPLEXITY');

        pricingBreakdown = {
            subtotal,
            breakdown,
            multipliers: [
                { name: 'Website Type', factor: selections.type, val: typeMult },
                { name: 'Timeline', factor: selections.timeline, val: timeMult }
            ],
            total,
            clientRange: { min, max }
        };
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

        // Helper for Currency
        const fmt = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

        // 2. Send Real Email via Resend
        if (resend) {
            try {
                // 1. Send Admin Notification (To You)
                let adminHtml = '';

                if (isEstimate && pricingBreakdown) {
                    // ----------------------------------------
                    // NEW ADMIN TEMPLATE (Internal Brief)
                    // ----------------------------------------
                    adminHtml = `

                        < !DOCTYPE html >
                            <html>
                                <body style="font-family: 'Inter', system-ui, sans-serif; background-color: #0B1120; color: #cbd5e1; padding: 20px; margin: 0;">

                                    <div style="max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden;">

                                        <!-- 1. Header -->
                                        <div style="background: #1e293b; padding: 15px; border-bottom: 2px solid #38bdf8; text-align: center;">
                                            <h2 style="margin: 0; color: #fff; font-size: 16px; letter-spacing: 0.5px; text-transform: uppercase;">Pineforge Digital</h2>
                                            <p style="margin: 4px 0 0; font-size: 11px; color: #94a3b8; text-transform: uppercase;">New Website Estimate Submission</p>
                                            <p style="margin: 2px 0 0; font-size: 10px; color: #64748b;">${new Date().toLocaleString()}</p>
                                        </div>

                                        <div style="padding: 24px;">

                                            <!-- 2. Client Info -->
                                            <table width="100%" style="font-size: 13px; margin-bottom: 20px;">
                                                <tr>
                                                    <td width="30%" style="color: #64748b;">Name</td>
                                                    <td style="color: #fff; font-weight: 500;">${name}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: #64748b;">Email</td>
                                                    <td style="color: #38bdf8;">${email}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: #64748b;">Company</td>
                                                    <td style="color: #fff;">${company || 'Not Provided'}</td>
                                                </tr>
                                            </table>

                                            <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;">

                                                <!-- 3. Project Snapshot -->
                                                <h3 style="margin: 0 0 12px; color: #fff; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Project Snapshot</h3>
                                                <div style="background: #1e293b; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.8; border-left: 3px solid #38bdf8;">
                                                    <div><span style="color: #94a3b8;">Type:</span> <strong style="color: #fff;">${selections.type}</strong></div>
                                                    <div><span style="color: #94a3b8;">Scope:</span> <strong style="color: #fff;">${selections.scope}</strong></div>
                                                    <div><span style="color: #94a3b8;">Design:</span> <strong style="color: #fff;">${selections.design}</strong></div>
                                                    <div><span style="color: #94a3b8;">Goal:</span> <strong style="color: #fff;">${selections.goal}</strong></div>

                                                    <!-- Warning Badges in Snapshot -->
                                                    <div style="margin-top: 8px;">
                                                        ${selections.content === 'Need Help' || selections.content === 'Later' ?
                            '<div><span style="color: #fca5a5;">⚠ Content Not Ready</span></div>' :
                            '<div><span style="color: #94a3b8;">Content:</span> <strong style="color: #fff;">' + selections.content + '</strong></div>'}

                                                        ${selections.timeline === 'Urgent' ?
                            '<div><span style="color: #fca5a5;">⚠ Urgent Timeline (&lt; 4 Weeks)</span></div>' :
                            '<div><span style="color: #94a3b8;">Timeline:</span> <strong style="color: #fff;">' + selections.timeline + '</strong></div>'}
                                                    </div>
                                                </div>

                                                <!-- 4. Feature Selection -->
                                                <div style="margin-top: 24px;">
                                                    <h3 style="margin: 0 0 12px; color: #fff; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Selected Features</h3>
                                                    <div style="font-size: 12px; color: #cbd5e1; line-height: 1.6;">
                                                        ${selections.features && selections.features.length > 0 ?
                            selections.features.map(f => `<span style="display: inline-block; background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px; margin: 0 4px 4px 0; border: 1px solid rgba(255,255,255,0.1);">${f}</span>`).join('')
                            : '<span style="color: #64748b;">None selected</span>'}
                                                        ${selections.deployment && selections.deployment.length > 0 ?
                            selections.deployment.map(d => `<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 2px 8px; border-radius: 4px; margin: 0 4px 4px 0; border: 1px solid rgba(56, 189, 248, 0.2);">${d}</span>`).join('')
                            : ''}
                                                    </div>
                                                </div>

                                                <hr style="border: 0; border-top: 1px solid #334155; margin: 24px 0;">

                                                    <!-- 5. INTERNAL PRICING BREAKDOWN (Admin Only) -->
                                                    <h3 style="margin: 0 0 16px; color: #38bdf8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Internal Pricing Breakdown (Admin Only)</h3>

                                                    <table width="100%" cellpadding="8" style="font-size: 12px; border-collapse: collapse;">
                                                        <tr style="border-bottom: 1px solid #334155; color: #64748b;">
                                                            <th align="left" style="font-weight: 600;">Item</th>
                                                            <th align="right" style="font-weight: 600;">Internal Cost</th>
                                                        </tr>

                                                        ${pricingBreakdown.breakdown.map(item => `
                                        <tr style="border-bottom: 1px solid #1e293b;">
                                            <td style="color: #e2e8f0;">${item.item}</td>
                                            <td align="right" style="font-family: monospace; color: #cbd5e1;">${fmt(item.cost)}</td>
                                        </tr>
                                        `).join('')}
                                                    </table>

                                                    <!-- 6. Multipliers -->
                                                    <div style="margin-top: 20px;">
                                                        <h4 style="margin: 0 0 10px; color: #fff; font-size: 12px; text-transform: uppercase;">Complexity & Scheduling Multipliers</h4>
                                                        <div style="background: #0b1120; padding: 12px; border-radius: 6px; font-size: 12px; border: 1px solid #1e293b;">
                                                            ${pricingBreakdown.multipliers.map(m => `
                                                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; align-items: center;">
                                                    <div>
                                                        <span style="color: #cbd5e1; font-weight: 600;">${m.name}</span>
                                                        <div style="color: #64748b; font-size: 10px;">Applied factor: ${m.factor}</div>
                                                    </div>
                                                    <div style="color: #fbbf24; font-family: monospace; font-weight: bold;">&times; ${m.val}</div>
                                                </div>
                                            `).join('')}
                                                        </div>
                                                    </div>

                                                    <!-- 7. Internal Calculation Summary -->
                                                    <div style="margin-top: 20px; text-align: right;">
                                                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 12px;">
                                                            <span style="color: #94a3b8;">Subtotal (before multipliers)</span>
                                                            <span style="font-family: monospace; color: #cbd5e1;">${fmt(pricingBreakdown.subtotal)}</span>
                                                        </div>
                                                        <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #334155;">
                                                            <span style="color: #fff; font-weight: 600; font-size: 13px;">Final Internal Total</span>
                                                            <span style="font-family: monospace; font-weight: 700; color: #fff; font-size: 16px;">${fmt(pricingBreakdown.total)}</span>
                                                        </div>
                                                    </div>

                                                    <div style="height: 30px;"></div>

                                                    <!-- 8. Client-Facing Estimate -->
                                                    <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 16px; border-radius: 8px; text-align: center;">
                                                        <h4 style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; color: #10b981; letter-spacing: 1px;">Estimate Presented to Client</h4>
                                                        <div style="font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 4px;">
                                                            ${fmt(pricingBreakdown.clientRange.min)} – ${fmt(pricingBreakdown.clientRange.max)}
                                                        </div>
                                                        <p style="margin: 0; font-size: 10px; color: #64748b;">Client sees range only. Itemized pricing is internal.</p>
                                                    </div>

                                                    <hr style="border: 0; border-top: 1px solid #334155; margin: 30px 0;">

                                                        <!-- 10. Raw Submission -->
                                                        <h4 style="margin: 0 0 10px; font-size: 10px; color: #475569; text-transform: uppercase;">Raw Submission Data</h4>
                                                        <pre style="background: #0b1120; padding: 10px; border-radius: 4px; font-size: 10px; color: #475569; white-space: pre-wrap; margin: 0;">${message}</pre>

                                                    </div>
                                                </div>
                                            </body>
                                        </html>
                                        `;

                } else {
                    // ----------------------------------------
                    // STANDARD INQUIRY TEMPLATE (Legacy)
                    // ----------------------------------------
                    adminHtml = `
                        <!DOCTYPE html>
                        <html>
                        <body style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #0B1120; color: #f8fafc; padding: 40px 20px; margin: 0;">
                            
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15); border: 1px solid #1e293b;">
                                
                                <!-- Header -->
                                <tr>
                                    <td style="background-color: #1e293b; background-image: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #38bdf8;">
                                        <img src="https://pineforge.digital/images/Brand_Logo_clear.png" alt="Pineforge Digital" style="width: 140px; height: auto; display: block; margin: 0 auto 15px;">
                                        <p style="margin: 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Website Inquiry</p>
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding: 40px 30px; background-color: #0B1120;">
                                        
                                        <!-- Key Details Grid (2-Column) -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="48%" valign="top" style="padding-bottom: 20px; border-bottom: 1px solid #334155;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Name</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${name}</p>
                                                </td>
                                                <td width="4%" style="border-bottom: 1px solid #334155;">&nbsp;</td>
                                                <td width="48%" valign="top" style="padding-bottom: 20px; border-bottom: 1px solid #334155;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Email</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">
                                                        <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="48%" valign="top" style="padding-top: 20px; padding-bottom: 5px;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Company</p>
                                                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${company || 'N/A'}</p>
                                                </td>
                                                <td width="4%" style="">&nbsp;</td>
                                                <td width="48%" valign="top" style="padding-top: 20px; padding-bottom: 5px;">
                                                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Service Interest</p>
                                                    <div style="margin-top: 5px;">
                                                        <span style="display: inline-block; background-color: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; border: 1px solid rgba(56, 189, 248, 0.2);">${service}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Message Box -->
                                        <div style="margin-top: 35px;">
                                            <p style="margin: 0 0 12px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Message</p>
                                            <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 24px; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                                                ${message.replace(/\n/g, '<br>')}
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            </table>
                        </body>
                        </html>
                    `;
                }

                await resend.emails.send({
                    from: 'Pineforge Website <admin@pineforge.digital>',
                    to: ['admin@pineforge.digital'],
                    reply_to: email, // Reply to Customer
                    subject: req.body.isEstimate ? `New Estimate Request: ${name}` : `New Inquiry: ${service} - ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service}\n\nMessage:\n${message}`,
                    html: adminHtml
                });

                // 2. Send User Confirmation (To Customer) - UNCHANGED
                // ... (Keep existing User Confirmation Logic)
                await resend.emails.send({
                    from: 'Caleb Cannon <admin@pineforge.digital>',
                    to: [email],
                    reply_to: 'admin@pineforge.digital',
                    subject: `Received: Your Inquiry to Pineforge Digital`,
                    text: `Hello ${name},\n\nThanks for getting in touch with Pineforge Digital — I appreciate you reaching out.\n\nI’ve received your message and will take a look at the details you shared. If I need any clarification or next steps, I’ll follow up shortly. In the meantime, feel free to reply to this email if there’s anything additional you’d like me to know.\n\nLooking forward to learning more about your project.\n\nBest regards,\nCaleb Cannon\nPineforge Digital LLC\nadmin@pineforge.digital\nhttps://pineforge.digital`,
                    html: `
                                        <!DOCTYPE html>
                                        <html>
                                            <body style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #0B1120; color: #f8fafc; padding: 40px 20px; margin: 0;">

                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15); border: 1px solid #1e293b;">

                                                    <!-- Header -->
                                                    <tr>
                                                        <td style="background-color: #1e293b; background-image: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #38bdf8;">
                                                            <img src="https://pineforge.digital/images/Brand_Logo_clear.png" alt="Pineforge Digital" style="width: 140px; height: auto; display: block; margin: 0 auto 15px;">
                                                        </td>
                                                    </tr>

                                                    <!-- Content -->
                                                    <tr>
                                                        <td style="padding: 40px 30px; background-color: #0B1120; background-image: radial-gradient(circle at 50% -10%, rgba(56, 189, 248, 0.2) 0%, rgba(129, 140, 248, 0.1) 30%, rgba(11, 17, 32, 0) 70%), linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px); background-size: 100% 100%, 20px 20px, 20px 20px; background-repeat: no-repeat, repeat, repeat;">
                                                            <p style="margin: 0 0 20px; font-size: 16px; color: #f8fafc; line-height: 1.6;">
                                                                Hello ${name},
                                                            </p>
                                                            <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">
                                                                Thanks for getting in touch with Pineforge Digital — I appreciate you reaching out.
                                                            </p>
                                                            <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">
                                                                I’ve received your message and will take a look at the details you shared. If I need any clarification or next steps, I’ll follow up shortly. In the meantime, feel free to reply to this email if there’s anything additional you’d like me to know.
                                                            </p>
                                                            <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">
                                                                Looking forward to learning more about your project.
                                                            </p>
                                                            <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px;">
                                                                <p style="margin: 0 0 5px; font-size: 16px; color: #f8fafc; font-weight: 600;">Best regards,</p>
                                                                <p style="margin: 0 0 5px; font-size: 16px; color: #38bdf8; font-weight: 700;">Caleb Cannon</p>
                                                                <p style="margin: 0 0 5px; font-size: 14px; color: #94a3b8;">Pineforge Digital LLC</p>
                                                                <p style="margin: 0; font-size: 14px; color: #94a3b8;">
                                                                    <a href="mailto:admin@pineforge.digital" style="color: #38bdf8; text-decoration: none;">admin@pineforge.digital</a>
                                                                </p>
                                                                <p style="margin: 5px 0 0; font-size: 14px; color: #94a3b8;">
                                                                    <a href="https://pineforge.digital" style="color: #38bdf8; text-decoration: none;">https://pineforge.digital</a>
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <!-- Footer -->
                                                    <tr>
                                                        <td style="background-color: #0b1120; padding: 24px; text-align: center; border-top: 1px solid #1e293b;">
                                                            <p style="margin: 0; font-size: 12px; color: #475569;">
                                                                &copy; ${new Date().getFullYear()} Pineforge Digital LLC
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </body>
                                        </html>
                                        `
                });

                console.log('Emails sent via Resend');
                return res.status(200).json({ message: 'Message received successfully!' });

            } catch (emailErr) {
                console.error('Resend Error:', emailErr);
                // Even if email fails, we saved to DB, so tell user it's ok but maybe log check
                return res.status(200).json({ message: 'Message saved (Email delivery issue).' });
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
