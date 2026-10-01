import re

css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f: content = f.read()

dark_theme_css = '''
/* Dark Theme Overrides */
.dark-theme {
    --bg-base: #020617;
    --bg-surface: #0f172a;
    --bg-surface-hover: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-tertiary: #64748b;
    --border-subtle: rgba(255, 255, 255, 0.1);
    --border-strong: rgba(255, 255, 255, 0.2);
}
.dark-theme .btn-primary {
    background: var(--text-primary);
    color: #020617;
}
.dark-theme .btn-primary:hover {
    background: #ffffff;
    color: #000000;
}
'''

if '/* Dark Theme Overrides */' not in content:
    content = content.replace(':root {', dark_theme_css + '\n:root {')
    with open(css_path, 'w', encoding='utf-8') as f: f.write(content)

html_path = 'public/services.html'
with open(html_path, 'r', encoding='utf-8') as f: html_content = f.read()

target = '<body class="dark-theme">'
if target not in html_content:
    html_content = html_content.replace('<body>', target)
    with open(html_path, 'w', encoding='utf-8') as f: f.write(html_content)
