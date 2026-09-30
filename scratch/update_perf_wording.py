import os

# 1. Update HTML
html_path = 'public/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the text content
old_text = '''<h2 style="font-size: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.03em; line-height: 1.1;">Speed is an SEO ranking factor.</h2>
                        <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem;">Slow, bloated WordPress templates bleed customers and get penalized by Google. Because we custom-code every website from scratch without templates, our architecture guarantees perfect Google Lighthouse performance scores.</p>'''
new_text = '''<h2 style="font-size: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.03em; line-height: 1.1;">Fast websites rank higher. Period.</h2>
                        <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem;">Most local web designers use bloated WordPress templates that load slowly and get penalized by search engines. We write clean, custom code from the ground up. The result? Near-instant load times, dominant search rankings, and zero frustrating lag for your customers.</p>'''
content = content.replace(old_text, new_text)

# Replace the card labels
content = content.replace('<h4>Typical Template</h4>\n                            <p>Bloated code & slow</p>', '<h4>Typical Web Agency</h4>\n                            <p>Relies on heavy templates</p>')
content = content.replace('<h4>Pineforge Code</h4>\n                            <p>Custom & instantaneous</p>', '<h4>Pineforge Digital</h4>\n                            <p>Hand-coded for speed</p>')

# Replace 100 with 99
content = content.replace('data-target="100"', 'data-target="99"')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update CSS
css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Update the stroke-dasharray for 99
css_content = css_content.replace('100% { stroke-dasharray: 100, 100; }', '100% { stroke-dasharray: 99, 100; }')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Updated performance section wording and changed 100 to 99.")
