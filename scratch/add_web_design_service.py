import os

file_path = 'public/services.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_section = """<div class="grid grid-2" style="gap: 4rem; align-items: center; margin-bottom: 8rem;">
                    <div class="animate-fade-up">
                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Custom Website Design & Development</h2>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Your website is the face of your business. We don't use cheap WordPress templates or drag-and-drop website builders. We engineer extremely fast, completely customized websites specifically designed to rank high on Google and convert local traffic into paying customers.</p>
                        <h4 style="margin-bottom: 1rem;">Key Deliverables:</h4>
                        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
                            <li>Blazing fast load times for superior SEO</li>
                            <li>Fully responsive, mobile-first design</li>
                            <li>Local search optimization (Kenosha, Racine, Milwaukee)</li>
                            <li>Custom content management systems (CMS)</li>
                        </ul>
                    </div>
                    <div class="bento-card animate-fade-up delay-1" style="background: var(--bg-surface); padding: 3rem;">
                        <h4 style="margin-bottom: 1rem; color: var(--text-primary);">Business Outcomes</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Get a website that acts as a 24/7 sales engine, built with enterprise-grade technology scaled perfectly for a small business budget.</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge badge-emerald">Rank Higher</span>
                            <span class="badge badge-blue">More Leads</span>
                            <span class="badge badge-violet">No Templates</span>
                        </div>
                    </div>
                </div>"""

target = '<div class="grid grid-2" style="gap: 4rem; align-items: center; margin-bottom: 8rem;">\n                    <div class="animate-fade-up">\n                        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Client Portals & Dashboards</h2>'

if 'Custom Website Design' not in content:
    content = content.replace(target, new_section + '\n\n                ' + target)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added Website Design section to services.html")
