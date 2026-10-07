import os
import glob

# 1. Update HTML and JS files
files_to_update = glob.glob('public/*.html') + ['server.js']

for file_path in files_to_update:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'Brand_Logo_clear.png' in content:
        content = content.replace('Brand_Logo_clear.png', 'Brand_Logo_white.png')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

# 2. Update CSS to remove invert filter
css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace the filter line
if '.navbar .logo img { filter: brightness(0) invert(1); }' in css_content:
    css_content = css_content.replace('.navbar .logo img { filter: brightness(0) invert(1); }', '')
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)
    print(f"Updated {css_path}")

print("Replacement complete.")
