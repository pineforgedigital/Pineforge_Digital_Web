import os

file_path = 'public/index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Transform the Hero Section
old_hero = """<section class="hero">
            <div class="container">
                <span class="badge animate-fade-up">Custom Software Solutions</span>
                <h1 class="hero-title animate-fade-up delay-1">Software That<br>Runs Your Business</h1>
                <p class="hero-subtitle animate-fade-up delay-2">Stop fighting with messy spreadsheets and clunky off-the-shelf software. We build custom applications and internal tools designed specifically for how your business actually operates.</p>
                <div class="hero-actions animate-fade-up delay-3">
                    <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
                    <a href="/services" class="btn btn-secondary">Discover Services</a>
                </div>
            </div>
        </section>"""

new_hero = """<!-- Dark Mode Hero -->
        <section class="hero hero-dark">
            <div class="container hero-grid">
                <div class="hero-content text-left">
                    <span class="badge badge-dark animate-fade-up">Custom Software Solutions</span>
                    <h1 class="hero-title-dark animate-fade-up delay-1">Software That<br>Runs Your Business</h1>
                    <p class="hero-subtitle-dark animate-fade-up delay-2">Stop fighting with messy spreadsheets and clunky off-the-shelf software. We build custom applications and internal tools designed specifically for how your business actually operates.</p>
                    <div class="hero-actions animate-fade-up delay-3" style="justify-content: flex-start;">
                        <a href="/contact" class="btn btn-primary-dark">Schedule Consultation</a>
                        <a href="/services" class="btn btn-secondary-dark">Discover Services</a>
                    </div>
                </div>
                <div class="hero-visual animate-fade-up delay-2">
                    <div class="hero-image-container">
                        <img src="images/hero_visual.jpg" alt="Abstract Software Architecture" class="floating-image">
                        <div class="glow-orb"></div>
                    </div>
                </div>
            </div>
        </section>"""

content = content.replace(old_hero, new_hero)

# 2. Add graphics to Bento Cards
# Custom Web Applications card
old_card_1 = """<div class="bento-card bento-large animate-fade-up">
                        <div class="bento-icon icon-blue">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3>Custom Web Applications</h3>
                        <p>Whether you need a bespoke client portal, a unique SaaS product, or a complex scheduling system, we build tailored software from the ground up to fit your exact business model perfectly.</p>
                    </div>"""

new_card_1 = """<div class="bento-card bento-large bento-graphic animate-fade-up">
                        <div class="bento-content">
                            <div class="bento-icon icon-blue">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                            </div>
                            <h3>Custom Web Applications</h3>
                            <p>Whether you need a bespoke client portal, a unique SaaS product, or a complex scheduling system, we build tailored software from the ground up to fit your exact business model perfectly.</p>
                        </div>
                        <div class="bento-visual">
                            <div class="mockup-window">
                                <div class="mockup-header">
                                    <span></span><span></span><span></span>
                                </div>
                                <div class="mockup-body">
                                    <div class="mockup-sidebar"></div>
                                    <div class="mockup-main">
                                        <div class="mockup-bar" style="width: 40%"></div>
                                        <div class="mockup-bar" style="width: 80%"></div>
                                        <div class="mockup-bar" style="width: 60%"></div>
                                        <div class="mockup-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>"""

content = content.replace(old_card_1, new_card_1)

# API Integrations card
old_card_3 = """<div class="bento-card animate-fade-up">
                        <div class="bento-icon icon-violet">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>
                        </div>
                        <h3>API Integrations</h3>
                        <p>If your team uses 5 different apps that refuse to talk to each other, we can fix it. We build custom integrations that automatically sync your data across all platforms.</p>
                    </div>"""

new_card_3 = """<div class="bento-card bento-graphic animate-fade-up">
                        <div class="bento-content">
                            <div class="bento-icon icon-violet">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>
                            </div>
                            <h3>API Integrations</h3>
                            <p>If your team uses 5 different apps that refuse to talk to each other, we can fix it. We build custom integrations that automatically sync your data.</p>
                        </div>
                        <div class="bento-visual">
                            <div class="api-nodes">
                                <div class="node node-left">CRM</div>
                                <div class="node-line"></div>
                                <div class="node node-center">API</div>
                                <div class="node-line"></div>
                                <div class="node node-right">ERP</div>
                            </div>
                        </div>
                    </div>"""

content = content.replace(old_card_3, new_card_3)

# Add bento-section-texture class
content = content.replace('<section class="bento-section">', '<section class="bento-section texture-bg">')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html rewritten for high-end aesthetic.")
