import os

def read_template():
    return """<!DOCTYPE html>
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
        {main_content}
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

def generate_index():
    main_content = """
        <section class="hero">
            <div class="container">
                <span class="badge animate-fade-up">Enterprise Software Engineering</span>
                <h1 class="hero-title animate-fade-up delay-1">Engineering<br>Reliable Software</h1>
                <p class="hero-subtitle animate-fade-up delay-2">We build secure, scalable, and resilient digital solutions. An expert engineering agency dedicated to enterprise reliability and architectural excellence.</p>
                <div class="hero-actions animate-fade-up delay-3">
                    <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
                    <a href="/services" class="btn btn-secondary">Discover Services</a>
                </div>
            </div>
        </section>

        <!-- Trust Banner -->
        <section style="padding: 3rem 0; border-bottom: 1px solid var(--border-subtle); background: var(--bg-surface);">
            <div class="container text-center animate-fade-up">
                <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-tertiary); margin-bottom: 1.5rem;">Trusted by innovative teams</p>
                <div style="display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap; opacity: 0.6; font-weight: 700; font-size: 1.25rem; color: var(--text-secondary);">
                    <span>Acme Corp</span>
                    <span>Nexus Systems</span>
                    <span>TechFlow</span>
                    <span>Vanguard Partners</span>
                    <span>Omni Data</span>
                </div>
            </div>
        </section>

        <section class="bento-section">
            <div class="container">
                <div class="section-header animate-fade-up">
                    <span class="badge" style="margin-bottom: 1rem;">Core Competencies</span>
                    <h2>What We Build</h2>
                    <p>Enterprise-grade architectures tailored precisely to your operational workflows.</p>
                </div>
                
                <div class="bento-grid">
                    <div class="bento-card bento-large animate-fade-up">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3>Custom Software Development</h3>
                        <p>We build tailored full-stack applications from the ground up to solve unique operational challenges. Our engineering ensures high availability, scalability, and airtight security across every layer of the stack.</p>
                    </div>
                    
                    <div class="bento-card animate-fade-up delay-1">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h3>Data Systems</h3>
                        <p>Robust database architectures and data pipelines designed for high availability and consistency.</p>
                    </div>

                    <div class="bento-card animate-fade-up">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>
                        </div>
                        <h3>Cloud Infrastructure</h3>
                        <p>Scalable, secure, and automated cloud deployments utilizing modern DevOps practices.</p>
                    </div>

                    <div class="bento-card bento-large animate-fade-up delay-1">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                        <h3>Internal Tooling & Automation</h3>
                        <p>Stop running your business on messy spreadsheets. We build bespoke internal systems that automate your workflows, integrate your data, and provide clear visibility into your operations.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section style="padding: 8rem 0; background: #020617; color: white;">
            <div class="container text-center animate-fade-up">
                <span class="badge" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.2);">The Stack</span>
                <h2 style="color: white; margin-bottom: 3rem;">Modern Technologies.<br>Battle-Tested Reliability.</h2>
                <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; max-width: 800px; margin: 0 auto;">
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Frontend</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">React, Next.js, TypeScript</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Backend</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">Node.js, Python, Go</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Database</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">PostgreSQL, Redis, MongoDB</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Infrastructure</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">AWS, Docker, Vercel</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section style="padding: 10rem 0; background: #ffffff;">
            <div class="container">
                <div class="section-header animate-fade-up">
                    <span class="badge" style="margin-bottom: 1rem;">Why Pineforge</span>
                    <h2>Trusted Execution</h2>
                    <p style="margin-top:1rem">We focus on the hard problems so you can focus on your business.</p>
                </div>
                <div class="grid grid-3">
                    <div class="bento-card animate-fade-up">
                        <h3 class="mb-2">Wisconsin Based</h3>
                        <p>We are a local agency serving Wisconsin and Northern Illinois businesses with face-to-face dedication. We never offshore our code.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-1">
                        <h3 class="mb-2">Transparent Process</h3>
                        <p>No black boxes. We provide clear documentation, iterative delivery, and constant communication throughout the entire software lifecycle.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-2">
                        <h3 class="mb-2">Zero-Downtime</h3>
                        <p>We architect our systems for high availability, utilizing modern CI/CD pipelines to deploy updates without disrupting your operations.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section style="padding: 8rem 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to upgrade your infrastructure?</h2>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Schedule a free consultation to discuss your technical requirements and discover how Pineforge Digital can accelerate your business.</p>
                <a href="/contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Start the Conversation</a>
            </div>
        </section>
    """
    return read_template().format(title="Home", main_content=main_content)

def generate_services():
    main_content = """
        <section class="page-header">
            <div class="container animate-fade-up">
                <span class="badge" style="margin-bottom: 1rem;">Capabilities</span>
                <h1>Our Engineering Services</h1>
                <p>Comprehensive, enterprise-grade development for businesses that demand reliability.</p>
            </div>
        </section>

        <section style="padding: 8rem 0;">
            <div class="container">
                <div class="grid grid-2" style="gap: 4rem; align-items: center; margin-bottom: 8rem;">
                    <div class="animate-fade-up">
                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Custom Software Development</h2>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Off-the-shelf software rarely fits a unique business perfectly. We build tailored, full-stack applications from the ground up to solve your specific operational challenges. From complex internal dashboards to public-facing SaaS platforms, our engineering ensures high availability, scalability, and security.</p>
                        <h4 style="margin-bottom: 1rem;">Key Deliverables:</h4>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
                            <li>End-to-end full-stack development</li>
                            <li>REST & GraphQL API design</li>
                            <li>Legacy system modernization and migration</li>
                            <li>Third-party API integration (Stripe, Twilio, Salesforce)</li>
                        </ul>
                    </div>
                    <div class="bento-card animate-fade-up delay-1" style="background: var(--bg-surface); padding: 3rem;">
                        <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We utilize strongly-typed languages and robust frameworks to ensure minimal runtime errors and maximum maintainability.</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge">React</span>
                            <span class="badge">TypeScript</span>
                            <span class="badge">Node.js</span>
                            <span class="badge">Python</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-2" style="gap: 4rem; align-items: center; margin-bottom: 8rem;">
                    <div class="bento-card animate-fade-up delay-1" style="background: var(--bg-surface); padding: 3rem; order: 2;">
                        <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We leverage modern database architectures and automation scripts to eliminate manual data entry.</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge">PostgreSQL</span>
                            <span class="badge">Redis</span>
                            <span class="badge">Retool</span>
                            <span class="badge">GraphQL</span>
                        </div>
                    </div>
                    <div class="animate-fade-up" style="order: 1;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Internal Tools & Automation</h2>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Stop running your business on fragile spreadsheets and disconnected apps. We build bespoke internal systems that automate your workflows, centralize your data, and provide clear visibility into your operations.</p>
                        <h4 style="margin-bottom: 1rem;">Key Deliverables:</h4>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
                            <li>Custom CRMs and ERP systems</li>
                            <li>Automated data pipelines and reporting</li>
                            <li>Inventory and logistical tracking tools</li>
                            <li>Employee portals and role-based dashboards</li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-2" style="gap: 4rem; align-items: center; margin-bottom: 8rem;">
                    <div class="animate-fade-up">
                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">High-Performance Web Apps</h2>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Your public-facing applications are the face of your business. They need to be blazingly fast, accessible, and perfectly responsive across all devices. We utilize modern frameworks to build secure web apps that convert visitors into customers and rank high on search engines.</p>
                        <h4 style="margin-bottom: 1rem;">Key Deliverables:</h4>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
                            <li>Progressive Web Apps (PWAs)</li>
                            <li>E-Commerce platform integrations</li>
                            <li>Server-Side Rendering (SSR) for SEO optimization</li>
                            <li>Interactive 3D or WebGL experiences</li>
                        </ul>
                    </div>
                    <div class="bento-card animate-fade-up delay-1" style="background: var(--bg-surface); padding: 3rem;">
                        <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We build at the edge, utilizing the latest in web technologies to ensure sub-second load times worldwide.</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge">Next.js</span>
                            <span class="badge">Vercel</span>
                            <span class="badge">TailwindCSS</span>
                            <span class="badge">WebSockets</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section style="padding: 8rem 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle);">
            <div class="container">
                <div class="section-header animate-fade-up">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
                    <div class="bento-card animate-fade-up" style="padding: 2rem;">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Do you use templates like WordPress?</h4>
                        <p style="color: var(--text-secondary);">No. We are a software engineering firm, not a web design agency. We write custom code tailored specifically to your business logic to ensure security, speed, and scalability that templates cannot provide.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-1" style="padding: 2rem;">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Who owns the code after the project is finished?</h4>
                        <p style="color: var(--text-secondary);">You do. Once the project is complete and fully paid for, all intellectual property, source code, and assets are transferred entirely to your company. No vendor lock-in.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-2" style="padding: 2rem;">
                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">How do you handle security and data protection?</h4>
                        <p style="color: var(--text-secondary);">Security is baked into our architecture from day one. We utilize industry-standard encryption, parameterized queries to prevent injections, strict CORS policies, and role-based access control (RBAC) to protect your sensitive data.</p>
                    </div>
                </div>
            </div>
        </section>
    """
    return read_template().format(title="Services", main_content=main_content)

def generate_process():
    main_content = """
        <section class="page-header">
            <div class="container animate-fade-up">
                <span class="badge" style="margin-bottom: 1rem;">Methodology</span>
                <h1>Engineering Process</h1>
                <p>Transparent, iterative, and secure development from concept to deployment.</p>
            </div>
        </section>

        <section style="padding: 8rem 0;">
            <div class="container">
                <div style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 3rem;">
                    
                    <div class="bento-card animate-fade-up">
                        <span class="badge">Phase 1</span>
                        <h3 style="margin-top:1rem; font-size: 2rem;">Discovery & Architecture</h3>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">We don't write code until we understand your business logic perfectly. We start with a deep dive into your operations, identify bottlenecks, and draft a robust technical architecture.</p>
                        <h5 style="margin-bottom: 0.5rem;">Deliverables:</h5>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
                            <li>Comprehensive technical requirements document</li>
                            <li>Database schema diagrams</li>
                            <li>UI/UX wireframes and user flow mapping</li>
                            <li>Technology stack selection</li>
                        </ul>
                    </div>
                    
                    <div class="bento-card animate-fade-up delay-1">
                        <span class="badge">Phase 2</span>
                        <h3 style="margin-top:1rem; font-size: 2rem;">Iterative Engineering</h3>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">We build in transparent, rapid 2-week sprints. You get continuous updates, staging links, and full visibility into the codebase. We prioritize security and automated testing at every step to ensure the foundation is rock solid.</p>
                        <h5 style="margin-bottom: 0.5rem;">Deliverables:</h5>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
                            <li>Bi-weekly staging environment updates</li>
                            <li>Unit and integration test suites</li>
                            <li>Continuous Integration (CI) pipeline setup</li>
                            <li>Regular code reviews and sprint planning meetings</li>
                        </ul>
                    </div>

                    <div class="bento-card animate-fade-up delay-2">
                        <span class="badge">Phase 3</span>
                        <h3 style="margin-top:1rem; font-size: 2rem;">Deployment & Integration</h3>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Launching is just the beginning. We handle zero-downtime deployments, secure data migrations, and seamless integration with your existing business tools to ensure a smooth transition for your team.</p>
                        <h5 style="margin-bottom: 0.5rem;">Deliverables:</h5>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
                            <li>Production environment configuration (AWS/Vercel)</li>
                            <li>Zero-downtime DNS cutover</li>
                            <li>Legacy data migration and validation</li>
                            <li>Admin training and hand-off documentation</li>
                        </ul>
                    </div>

                    <div class="bento-card animate-fade-up delay-3">
                        <span class="badge">Phase 4</span>
                        <h3 style="margin-top:1rem; font-size: 2rem;">Long-Term Reliability</h3>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Enterprise software requires proactive maintenance. We provide ongoing support, real-time monitoring, and scaling infrastructure so your applications grow seamlessly with your business.</p>
                        <h5 style="margin-bottom: 0.5rem;">Deliverables:</h5>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
                            <li>24/7 uptime monitoring and alerting</li>
                            <li>Monthly dependency updates and security patches</li>
                            <li>Database backups and disaster recovery planning</li>
                            <li>Dedicated support SLAs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    """
    return read_template().format(title="Process", main_content=main_content)

def generate_about():
    main_content = """
        <section class="page-header">
            <div class="container animate-fade-up">
                <span class="badge" style="margin-bottom: 1rem;">Who We Are</span>
                <h1>About Pineforge</h1>
                <p>Local dedication. Global engineering standards.</p>
            </div>
        </section>

        <section style="padding: 8rem 0;">
            <div class="container">
                <div style="max-width: 900px; margin: 0 auto; text-align: center; margin-bottom: 8rem;">
                    <h2 class="mb-4 animate-fade-up" style="font-size: 3rem;">Rooted in Wisconsin, Engineering for the Future.</h2>
                    <p class="mb-4 animate-fade-up delay-1" style="font-size: 1.25rem; color: var(--text-secondary); line-height: 1.8;">Pineforge Digital was founded on a simple principle: growing businesses deserve reliable, enterprise-grade software without the bloat, jargon, and endless billing hours of traditional digital agencies.</p>
                    <p class="animate-fade-up delay-2" style="font-size: 1.25rem; color: var(--text-secondary); line-height: 1.8;">We are a lean team of dedicated software engineers based in Southeastern Wisconsin. We don't offshore our code to the lowest bidder. We don't use drag-and-drop website builders. We write clean, secure, and highly scalable code that solves real, complex operational problems for our clients.</p>
                </div>

                <div class="section-header animate-fade-up">
                    <h2>Our Core Values</h2>
                </div>
                
                <div class="bento-grid">
                    <div class="bento-card animate-fade-up">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Security First</h3>
                        <p>We treat every application as if it handles highly sensitive data. Security is not an afterthought; it is baked into our architecture, deployment pipelines, and access controls from day one.</p>
                    </div>
                    
                    <div class="bento-card animate-fade-up delay-1">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3>Reliability Over Trends</h3>
                        <p>We leverage proven, battle-tested technologies. While we stay on the cutting edge of performance, we never compromise your business's stability to chase a trendy new framework.</p>
                    </div>

                    <div class="bento-card animate-fade-up delay-2">
                        <div class="bento-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <h3>Radical Transparency</h3>
                        <p>You have full access to the source code, staging environments, and documentation throughout the entire build. When the project is done, you own 100% of the intellectual property.</p>
                    </div>
                </div>
            </div>
        </section>
    """
    return read_template().format(title="About", main_content=main_content)

with open('public/index.html', 'w', encoding='utf-8') as f: f.write(generate_index())
with open('public/services.html', 'w', encoding='utf-8') as f: f.write(generate_services())
with open('public/process.html', 'w', encoding='utf-8') as f: f.write(generate_process())
with open('public/about.html', 'w', encoding='utf-8') as f: f.write(generate_about())

print("Comprehensive content successfully generated for all pages.")
