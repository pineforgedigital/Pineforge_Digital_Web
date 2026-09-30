import os
import glob

# 1. Add 'Work' to navigation in existing pages
files = glob.glob('public/*.html')
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<a href="/work">Work</a>' not in content:
        content = content.replace(
            '<li class="animate-fade-up delay-2"><a href="/services">Services</a></li>\n                    <li class="animate-fade-up delay-3"><a href="/process">Process</a></li>',
            '<li class="animate-fade-up delay-2"><a href="/services">Services</a></li>\n                    <li class="animate-fade-up delay-2"><a href="/work">Work</a></li>\n                    <li class="animate-fade-up delay-3"><a href="/process">Process</a></li>'
        )
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)


# 2. Generate work.html
header_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Work | Pineforge Digital</title>
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
                    <li class="animate-fade-up delay-2"><a href="/work" style="color:var(--text-primary); font-weight: 600;">Work</a></li>
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
                <span class="badge" style="margin-bottom: 1rem;">Case Studies</span>
                <h1>Proven Execution</h1>
                <p>A selection of enterprise applications and systems engineered by our team.</p>
            </div>
        </section>
        
        <section style="padding: 6rem 0;">
            <div class="container">
                <div style="display: flex; flex-direction: column; gap: 4rem;">
                
                    <!-- Case Study 1 -->
                    <a href="/work-logistics" class="bento-card animate-fade-up" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 0; overflow: hidden; text-decoration: none; color: inherit;">
                        <div style="padding: 4rem;">
                            <span class="badge mb-4">Logistics & Supply Chain</span>
                            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Nexus Fleet Management</h2>
                            <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Engineered a real-time tracking and logistics dashboard that reduced operational bottlenecks by 34% for a regional freight carrier.</p>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">React</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">Node.js</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">PostgreSQL</span>
                            </div>
                        </div>
                        <div style="background: var(--bg-surface-hover); position: relative;">
                            <div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ Dashboard Interface Mockup ]
                            </div>
                        </div>
                    </a>

                    <!-- Case Study 2 -->
                    <a href="#" class="bento-card animate-fade-up delay-1" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 0; overflow: hidden; text-decoration: none; color: inherit;">
                        <div style="background: var(--bg-surface-hover); position: relative; order: 1;">
                            <div style="position: absolute; inset: 2rem 2rem -2rem -2rem; background: white; border-radius: 0 16px 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ E-Commerce Analytics Mockup ]
                            </div>
                        </div>
                        <div style="padding: 4rem; order: 2;">
                            <span class="badge mb-4">E-Commerce & Retail</span>
                            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">OmniRetail Analytics Engine</h2>
                            <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Developed a high-throughput data pipeline and custom reporting engine to unify sales data across 5 different digital storefronts.</p>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">Next.js</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">Python</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">AWS Redshift</span>
                            </div>
                        </div>
                    </a>
                    
                    <!-- Case Study 3 -->
                    <a href="#" class="bento-card animate-fade-up delay-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; padding: 0; overflow: hidden; text-decoration: none; color: inherit;">
                        <div style="padding: 4rem;">
                            <span class="badge mb-4">FinTech & Compliance</span>
                            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Vanguard Audit Portal</h2>
                            <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Architected a highly secure, SOC2 compliant document management and auditing portal with strict role-based access control.</p>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">TypeScript</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">Go</span>
                                <span class="badge" style="background:var(--bg-base); box-shadow:none; border-color:var(--border-strong);">Redis</span>
                            </div>
                        </div>
                        <div style="background: var(--bg-surface-hover); position: relative;">
                            <div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ Secure Portal Interface Mockup ]
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section style="padding: 8rem 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to build something robust?</h2>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Let's discuss how our engineering team can architect a solution for your unique operational challenges.</p>
                <a href="/contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Schedule Consultation</a>
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
                        <li><a href="/work">Work</a></li>
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
    <script src="js/app.js"></script>
</body>
</html>"""

with open('public/work.html', 'w', encoding='utf-8') as f:
    f.write(header_template)
print("work.html generated successfully.")

