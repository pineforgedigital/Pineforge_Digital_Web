import glob
import os

old_footer = """            <div class="footer-bottom">
                <p>&copy; 2026 Pineforge Digital LLC. Designed & Built in Wisconsin, USA.</p>
                <div style="display:flex; gap:1rem;">
                    <a href="#" style="color:var(--text-tertiary);">LinkedIn</a>
                    <a href="#" style="color:var(--text-tertiary);">GitHub</a>
                </div>
            </div>"""

new_footer = """            <div class="footer-bottom">
                <p>&copy; 2026 Pineforge Digital LLC. Designed & Built in Wisconsin, USA.</p>
            </div>"""

for f in glob.glob('public/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if old_footer in content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content.replace(old_footer, new_footer))
        print(f"Cleaned footer in {f}")
