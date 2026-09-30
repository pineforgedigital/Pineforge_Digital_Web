import os

css_path = 'public/css/styles.css'
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('''

/* Internal Page Dark Headers */
.page-header-dark {
    background-color: #020617;
    position: relative;
    padding: 12rem 0 8rem;
    overflow: hidden;
    text-align: center;
    color: white;
}
.page-header-dark::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at 50% 0%, black 20%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 20%, transparent 80%);
    pointer-events: none; z-index: 0;
}
.page-header-dark h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    margin-bottom: 1.5rem; letter-spacing: -0.05em; color: #ffffff; position: relative; z-index: 1;
}
.page-header-dark p {
    font-size: 1.25rem; color: var(--text-tertiary); max-width: 600px; margin: 0 auto; position: relative; z-index: 1;
}
.page-header-dark .badge { position: relative; z-index: 1; }

/* Dark CTA Block */
.cta-dark {
    padding: 8rem 0; background: #020617; text-align: center; color: white;
}
.cta-dark h2 { font-size: 3rem; margin-bottom: 1.5rem; color: white; }
.cta-dark p { font-size: 1.25rem; color: var(--text-tertiary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto; }
''')

import glob

# Replace old page headers and CTA in all files
html_files = glob.glob('public/*.html')

old_cta_1 = '''<section style="padding: 8rem 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to automate your business?</h2>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Schedule a free consultation to discuss your technical requirements and discover how Pineforge Digital can accelerate your business.</p>
                <a href="/contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Start the Conversation</a>
            </div>
        </section>'''

old_cta_2 = '''<section style="padding: 8rem 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to upgrade your infrastructure?</h2>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Schedule a free consultation to discuss your technical requirements and discover how Pineforge Digital can accelerate your business.</p>
                <a href="/contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Start the Conversation</a>
            </div>
        </section>'''

new_cta = '''<!-- Dark CTA -->
        <section class="cta-dark">
            <div class="container animate-fade-up">
                <h2>Ready to automate your business?</h2>
                <p>Schedule a free consultation to discuss your technical requirements and discover how Pineforge Digital can accelerate your business.</p>
                <a href="/contact" class="btn btn-primary-dark" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Start the Conversation</a>
            </div>
        </section>'''

for f_path in html_files:
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace CTA
    if old_cta_1 in content:
        content = content.replace(old_cta_1, new_cta)
    if old_cta_2 in content:
        content = content.replace(old_cta_2, new_cta)
        
    # Replace Header
    if '<section class="page-header">' in content:
        content = content.replace('<section class="page-header">', '<section class="page-header-dark">')
        # We need to make sure badges in header use badge-dark
        # This is a bit hacky but works for the known structure
        if '<span class="badge"' in content:
            # Only replace the first badge which is in the header
            parts = content.split('<section class="page-header-dark">', 1)
            if len(parts) == 2:
                header_part = parts[1].split('</section>', 1)
                if len(header_part) == 2:
                    new_header = header_part[0].replace('<span class="badge"', '<span class="badge badge-dark"')
                    content = parts[0] + '<section class="page-header-dark">' + new_header + '</section>' + header_part[1]

    with open(f_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Overhauled headers and CTAs across all pages.")
