import os

with open('public/services.html', 'r', encoding='utf-8') as f:
    html = f.read()

cta_block = """                <!-- Final CTA -->
                <div class="animate-fade-up" style="margin-top: 8rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="/contact" class="btn btn-primary" style="padding: 1rem 2.5rem;">Discuss Your Project</a>
                    <a href="/work" class="btn btn-secondary" style="padding: 1rem 2.5rem; border: 1px solid var(--border-subtle); background: transparent; color: var(--text-primary);">View Our Work</a>
                </div>"""

# Remove the CTA block from its current position
html = html.replace(cta_block + "\n", "")

# Create a more banner-like CTA
new_cta_block = """
        <!-- CTA Banner -->
        <section style="padding: 6rem 0; background: var(--bg-base); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to upgrade your digital infrastructure?</h2>
                <p style="font-size: 1.1rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto 2.5rem auto;">
                    Let's discuss your technical requirements and build a platform that actually drives your business forward.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="/contact" class="btn btn-primary" style="padding: 1rem 2.5rem;">Discuss Your Project</a>
                    <a href="/work" class="btn btn-secondary" style="padding: 1rem 2.5rem; border: 1px solid var(--border-subtle); background: transparent; color: var(--text-primary);">View Our Work</a>
                </div>
            </div>
        </section>"""

# Find the end of the FAQ section and insert the new CTA banner right after it (before </main>)
faq_end = "            </div>\n        </section>\n"
html = html.replace(faq_end, faq_end + new_cta_block + "\n")

with open('public/services.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Moved CTA successfully.")
