import os
import re

html_path = 'public/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the floating widgets
content = re.sub(r'<!-- Overlapping floating widget -->\s*<div class="floating-widget top-right">[\s\S]*?</div>', '', content)
content = re.sub(r'<!-- Overlapping floating code block -->\s*<div class="floating-widget bottom-left code-block">[\s\S]*?</div>', '', content)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed floating widgets from hero visual.")
