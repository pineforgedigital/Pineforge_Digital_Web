import re

css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f: content = f.read()

light_theme_css = '''
/* Light Theme Overrides */
.light-theme {
    --bg-base: #ffffff;
    --bg-surface: #f8fafc;
    --bg-surface-hover: #f1f5f9;
    --text-primary: #020617;
    --text-secondary: #475569;
    --text-tertiary: #94a3b8;
    --border-subtle: rgba(0, 0, 0, 0.1);
    --border-strong: rgba(0, 0, 0, 0.2);
    color: var(--text-secondary);
}
'''
if '/* Light Theme Overrides */' not in content:
    content = content.replace(':root {', light_theme_css + '\n:root {')
    with open(css_path, 'w', encoding='utf-8') as f: f.write(content)

html_path = 'public/services.html'
with open(html_path, 'r', encoding='utf-8') as f: html_content = f.read()

# Make body dark theme
if '<body class="dark-theme">' not in html_content:
    html_content = html_content.replace('<body>', '<body class="dark-theme">')

# Make FAQ light theme
html_content = re.sub(
    r'(<!-- FAQ Section -->\s*)<section',
    r'\1<section class="light-theme"',
    html_content
)

with open(html_path, 'w', encoding='utf-8') as f: f.write(html_content)
