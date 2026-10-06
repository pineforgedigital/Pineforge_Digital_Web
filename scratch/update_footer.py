import glob
import os

old_footer = """                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>"""

new_footer = """                    <ul>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>"""

for f in glob.glob('public/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if old_footer in content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content.replace(old_footer, new_footer))
        print(f"Updated footer in {f}")
