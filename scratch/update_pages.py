import os

header_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Pineforge Digital</title>
    <link rel="stylesheet" href="css/styles.css?v=ultra">
    <link rel="icon" type="image/png" href="images/favicon_optimized.png">
</head>
<body>
    <header class="navbar">
        <div class="container nav-container">
            <a href="/" class="logo animate-fade-up">
                <img src="images/Brand_Logo_clear.png" alt="Pineforge Digital">
            </a>
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <nav>
                <ul class="nav-links">
                    <li class="animate-fade-up delay-1"><a href="/">Home</a></li>
                    <li class="animate-fade-up delay-2"><a href="/services">Services</a></li>
                    <li class="animate-fade-up delay-3"><a href="/process">Process</a></li>
                    <li class="animate-fade-up delay-3"><a href="/about">About</a></li>
                    <li class="animate-fade-up delay-3"><a href="/contact" class="btn btn-primary nav-btn">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="page-header">
            <div class="container animate-fade-up">
                <h1>{header_title}</h1>
                <p>{header_sub}</p>
            </div>
        </section>
        <section style="padding: 6rem 0;">
            <div class="container">
                {content}
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h4>Pineforge Digital</h4>
                    <p>Building reliable software products and systems in Wisconsin.</p>
                    <p style="margin-top:1rem; color: #0ea5e9;">(262) 234-1027</p>
                </div>
                <div class="footer-col">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Pineforge Digital LLC. Designed & Built in Wisconsin, USA.</p>
                <div style="display:flex; gap:1rem;">
                    <a href="#" style="color:var(--text-tertiary);">LinkedIn</a>
                    <a href="#" style="color:var(--text-tertiary);">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
    <div id="cookie-banner">
        <p>We use essential cookies to provide our services. We do not track you.</p>
        <div class="cookie-buttons">
            <button id="accept-cookies" class="btn btn-primary">Accept</button>
            <button id="decline-cookies" class="btn btn-secondary">Decline</button>
        </div>
    </div>
    <script src="js/cookies.js"></script>
    <script src="js/app.js"></script>
</body>
</html>"""

services_content = """
<div class="bento-grid" style="grid-auto-rows: auto;">
    <div class="bento-card bento-large animate-fade-up">
        <div class="bento-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        </div>
        <h3>Custom Software Development</h3>
        <p class="mb-4">We build tailored software applications from the ground up to solve your unique operational challenges. From complex internal dashboards to customer-facing SaaS platforms, our engineering ensures high availability, scalability, and security.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
            <li>Web Applications</li>
            <li>API Development & Integration</li>
            <li>Legacy System Modernization</li>
        </ul>
    </div>
    <div class="bento-card animate-fade-up delay-1">
        <div class="bento-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </div>
        <h3>Internal Tools</h3>
        <p class="mb-4">Bespoke internal systems that automate workflows, integrate data, and provide clear visibility.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
            <li>Custom CRMs & ERPs</li>
            <li>Workflow Automation</li>
        </ul>
    </div>
    <div class="bento-card animate-fade-up">
        <div class="bento-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3>Web Applications</h3>
        <p class="mb-4">Blazingly fast, perfectly responsive web apps that convert visitors into customers.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
            <li>E-Commerce Integrations</li>
            <li>Performance Optimization</li>
        </ul>
    </div>
    <div class="bento-card bento-large animate-fade-up delay-1">
        <div class="bento-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        </div>
        <h3>Cloud & Data Engineering</h3>
        <p class="mb-4">Robust infrastructure is the foundation of reliable software. We handle cloud deployments, database architecture, and data migration so your systems never go down.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
            <li>AWS / Google Cloud Deployment</li>
            <li>Database Design & Optimization</li>
            <li>CI/CD Pipeline Setup</li>
        </ul>
    </div>
</div>
"""

process_content = """
<div style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
    <div class="bento-card animate-fade-up">
        <h3 style="margin-top:0;">1. Discovery & Architecture</h3>
        <p>We don't write code until we understand your business logic perfectly. We start with a deep dive into your operations, identify bottlenecks, and draft a robust technical architecture.</p>
    </div>
    <div class="bento-card animate-fade-up delay-1">
        <h3 style="margin-top:0;">2. Iterative Engineering</h3>
        <p>We build in transparent, rapid sprints. You get continuous updates, staging links, and full visibility into the codebase. We prioritize security and testing at every step.</p>
    </div>
    <div class="bento-card animate-fade-up delay-2">
        <h3 style="margin-top:0;">3. Deployment & Integration</h3>
        <p>Launching is just the beginning. We handle zero-downtime deployments, data migrations, and seamless integration with your existing business tools.</p>
    </div>
    <div class="bento-card animate-fade-up delay-3">
        <h3 style="margin-top:0;">4. Long-Term Reliability</h3>
        <p>Software requires maintenance. We provide ongoing support, monitoring, and scaling infrastructure so your applications grow with your business.</p>
    </div>
</div>
"""

about_content = """
<div style="max-width: 900px; margin: 0 auto; text-align: center;">
    <h2 class="mb-4 animate-fade-up" style="font-size: 2.5rem;">Rooted in Wisconsin, Engineering for the Future.</h2>
    <p class="mb-4 animate-fade-up delay-1" style="font-size: 1.1rem; max-width: 700px; margin-left: auto; margin-right: auto;">Pineforge Digital was founded on a simple principle: businesses deserve reliable, enterprise-grade software without the bloat and jargon of traditional agencies.</p>
    <p class="mb-8 animate-fade-up delay-2" style="font-size: 1.1rem; max-width: 700px; margin-left: auto; margin-right: auto;">We are a team of dedicated software engineers based in Wisconsin. We don't offshore our code. We don't use black-box website builders. We write clean, secure, and scalable code that solves real operational problems for our clients.</p>
    
    <div class="bento-card animate-fade-up delay-3" style="text-align: left;">
        <h3 style="margin-top:0;">Our Engineering Philosophy</h3>
        <ul style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
            <li><strong style="color:var(--text-primary);">Reliability Over Trends:</strong> We use proven, battle-tested technologies rather than chasing the latest hype.</li>
            <li><strong style="color:var(--text-primary);">Radical Transparency:</strong> Our clients own their code and have full visibility into our engineering process.</li>
            <li><strong style="color:var(--text-primary);">Security First:</strong> Every application is built with strict access controls and data protection measures from day one.</li>
        </ul>
    </div>
</div>
"""

with open('public/services.html', 'w', encoding='utf-8') as f:
    f.write(header_template.format(title='Services', header_title='Our Engineering Services', header_sub='Enterprise-grade development for Wisconsin businesses.', content=services_content))

with open('public/process.html', 'w', encoding='utf-8') as f:
    f.write(header_template.format(title='Process', header_title='Engineering Process', header_sub='Transparent, iterative, and secure development.', content=process_content))

with open('public/about.html', 'w', encoding='utf-8') as f:
    f.write(header_template.format(title='About', header_title='About Pineforge', header_sub='Local dedication, global engineering standards.', content=about_content))

print('Services, Process, and About HTML files generated successfully.')
