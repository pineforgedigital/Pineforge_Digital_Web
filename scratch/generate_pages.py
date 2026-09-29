import os

header = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Pineforge Digital</title>
    <link rel="stylesheet" href="css/styles.css?v=new">
    <link rel="icon" type="image/png" href="images/favicon_optimized.png">
</head>
<body>
    <header class="navbar">
        <div class="container nav-container">
            <a href="/" class="logo">
                <img src="images/Brand_Logo_clear.png" alt="Pineforge Digital">
            </a>
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/process">Process</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact" class="btn btn-primary nav-btn">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="page-header">
            <div class="container">
                <h1>{header_title}</h1>
                <p>{header_sub}</p>
            </div>
        </section>
        <section>
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
                    <p class="text-brand" style="margin-top:1rem">(262) 234-1027</p>
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
<div class="grid grid-2">
    <div class="card">
        <h3>Custom Software Development</h3>
        <p class="mb-4">We build tailored software applications from the ground up to solve your unique operational challenges. From complex internal dashboards to customer-facing SaaS platforms, our engineering ensures high availability, scalability, and security.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-600);">
            <li>Web Applications</li>
            <li>API Development & Integration</li>
            <li>Legacy System Modernization</li>
        </ul>
    </div>
    <div class="card">
        <h3>Internal Tools & Automations</h3>
        <p class="mb-4">Stop running your business on messy spreadsheets. We build bespoke internal systems that automate your workflows, integrate your data, and provide clear visibility into your operations.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-600);">
            <li>Custom CRMs & ERPs</li>
            <li>Workflow Automation</li>
            <li>Data Dashboards & Reporting</li>
        </ul>
    </div>
    <div class="card">
        <h3>High-Performance Web Apps</h3>
        <p class="mb-4">Your public-facing applications need to be blazingly fast and perfectly responsive. We utilize modern frameworks to build secure web apps that convert visitors into customers.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-600);">
            <li>E-Commerce Integrations</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>Performance Optimization</li>
        </ul>
    </div>
    <div class="card">
        <h3>Cloud & Data Engineering</h3>
        <p class="mb-4">Robust infrastructure is the foundation of reliable software. We handle cloud deployments, database architecture, and data migration so your systems never go down.</p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-600);">
            <li>AWS / Google Cloud Deployment</li>
            <li>Database Design & Optimization</li>
            <li>CI/CD Pipeline Setup</li>
        </ul>
    </div>
</div>
"""

process_content = """
<div style="max-width: 800px; margin: 0 auto;">
    <div class="card mb-4">
        <h3>1. Discovery & Architecture</h3>
        <p>We don't write code until we understand your business logic perfectly. We start with a deep dive into your operations, identify bottlenecks, and draft a robust technical architecture.</p>
    </div>
    <div class="card mb-4">
        <h3>2. Iterative Engineering</h3>
        <p>We build in transparent, rapid sprints. You get continuous updates, staging links, and full visibility into the codebase. We prioritize security and testing at every step.</p>
    </div>
    <div class="card mb-4">
        <h3>3. Deployment & Integration</h3>
        <p>Launching is just the beginning. We handle zero-downtime deployments, data migrations, and seamless integration with your existing business tools.</p>
    </div>
    <div class="card">
        <h3>4. Long-Term Reliability</h3>
        <p>Software requires maintenance. We provide ongoing support, monitoring, and scaling infrastructure so your applications grow with your business.</p>
    </div>
</div>
"""

about_content = """
<div style="max-width: 800px; margin: 0 auto; text-align: center;">
    <h2 class="mb-4">Rooted in Wisconsin, Engineering for the Future.</h2>
    <p class="mb-4" style="font-size: 1.1rem;">Pineforge Digital was founded on a simple principle: businesses deserve reliable, enterprise-grade software without the bloat and jargon of traditional agencies.</p>
    <p class="mb-8" style="font-size: 1.1rem;">We are a team of dedicated software engineers based in Wisconsin. We don't offshore our code. We don't use black-box website builders. We write clean, secure, and scalable code that solves real operational problems for our clients.</p>
    
    <div class="card" style="text-align: left;">
        <h3>Our Engineering Philosophy</h3>
        <ul style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
            <li><strong>Reliability Over Trends:</strong> We use proven, battle-tested technologies rather than chasing the latest hype.</li>
            <li><strong>Radical Transparency:</strong> Our clients own their code and have full visibility into our engineering process.</li>
            <li><strong>Security First:</strong> Every application is built with strict access controls and data protection measures from day one.</li>
        </ul>
    </div>
</div>
"""

with open('public/services.html', 'w', encoding='utf-8') as f:
    f.write(header.format(title='Services', header_title='Our Engineering Services', header_sub='Enterprise-grade development for Wisconsin businesses.', content=services_content))

with open('public/process.html', 'w', encoding='utf-8') as f:
    f.write(header.format(title='Process', header_title='Engineering Process', header_sub='Transparent, iterative, and secure development.', content=process_content))

with open('public/about.html', 'w', encoding='utf-8') as f:
    f.write(header.format(title='About', header_title='About Pineforge', header_sub='Local dedication, global engineering standards.', content=about_content))

print('Services, Process, and About HTML files generated successfully.')
