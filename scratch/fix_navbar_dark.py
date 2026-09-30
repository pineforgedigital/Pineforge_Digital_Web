import os

css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the white scrolled navbar CSS with a dark scrolled navbar
old_css = """.navbar.scrolled {
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--border-subtle);
}
.navbar.scrolled .nav-links a { color: var(--text-secondary); }
.navbar.scrolled .nav-links a:hover { color: var(--text-primary); }
.navbar.scrolled .hamburger span { background: var(--text-primary); }
.navbar.scrolled .logo img { filter: invert(0); }"""

new_css = """.navbar.scrolled {
    background: rgba(2, 6, 23, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}"""

content = content.replace(old_css, new_css)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated navbar scrolled style to remain dark mode.")
