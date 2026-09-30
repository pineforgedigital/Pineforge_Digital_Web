import os
import glob

html_files = glob.glob('public/*.html')

for f_path in html_files:
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Title and Meta Tags
    if 'Home | Pineforge Digital' in content:
        content = content.replace('<title>Home | Pineforge Digital</title>', '<title>Custom Website Design | Pineforge Digital</title>')
    
    content = content.replace(
        '<meta name="description" content="Pineforge Digital is a premier software engineering agency based in Wisconsin. We build secure, reliable, and scalable enterprise applications, internal tools, and high-performance web systems.">',
        '<meta name="description" content="Pineforge Digital provides premium custom website design, SEO, and web development for small and mid-sized businesses in Kenosha, Racine, and Wisconsin.">'
    )
    
    # 2. Update Footer text
    content = content.replace(
        '<p>Premium custom website development and software engineering for small and mid-sized businesses.',
        '<p>Premium custom website design and web development for small and mid-sized businesses.'
    )

    # 3. Specific File Overhauls
    if 'index.html' in f_path:
        # Hero Section
        content = content.replace('<span class="badge badge-dark animate-fade-up">Custom Software Solutions</span>', '<span class="badge badge-dark animate-fade-up">Custom Web Design & Development</span>')
        content = content.replace('<h1 class="hero-title-dark animate-fade-up delay-1">Software That<br>Runs Your Business</h1>', '<h1 class="hero-title-dark animate-fade-up delay-1">Custom Websites That<br>Grow Your Business</h1>')
        content = content.replace(
            '<p class="hero-subtitle-dark animate-fade-up delay-2">We bring enterprise-grade web development and custom software to small and mid-sized businesses. Get premium technology built specifically for your local operations—without the enterprise price tag.</p>',
            '<p class="hero-subtitle-dark animate-fade-up delay-2">We build blazing-fast, custom-coded websites designed specifically to rank high on Google and convert local traffic into paying customers. No cheap templates—just premium web development scaled for your business.</p>'
        )

        # First Bento Card
        old_bento_1 = '<h3>Custom Web Applications</h3>\n                            <p>Whether you need a bespoke client portal, a unique SaaS product, or a complex scheduling system, we build tailored software from the ground up to fit your exact business model perfectly.</p>'
        new_bento_1 = '<h3>Custom Website Design</h3>\n                            <p>Your website is your 24/7 sales engine. We write every line of code from scratch to ensure your site is incredibly fast, perfectly responsive on mobile, and structurally optimized for local SEO.</p>'
        content = content.replace(old_bento_1, new_bento_1)
        
        # Second Bento Card
        content = content.replace('<h3>Centralized Databases</h3>', '<h3>Custom CMS & Databases</h3>')

    if 'services.html' in f_path:
        # Header
        content = content.replace('<h1>Our Engineering Services</h1>', '<h1>Custom Web Development Services</h1>')
        content = content.replace('<p>We build digital systems that eliminate manual work, streamline operations, and drive revenue.</p>', '<p>We specialize in custom website design, backed by robust software engineering capabilities.</p>')

    with open(f_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pivoted primary branding to Custom Website Development.")
