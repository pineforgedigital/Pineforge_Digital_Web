import glob
import re

for file_path in glob.glob('public/*.html'):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    target = '<body class="dark-theme">'
    if target in content:
        content = content.replace(target, '<body>')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

css_content = re.sub(r'/\* Dark Theme Overrides \*/\s*\.dark-theme \{.*?\n\}\s*', '', css_content, flags=re.DOTALL)
css_content = css_content.replace('background-color: #020617;', 'background-color: var(--bg-base);', 1) # replaces the first one which is on HTML if I didn't remove it.

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)
