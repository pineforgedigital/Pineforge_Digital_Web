import os
import re

files = ['public/index.html', 'public/services.html', 'public/about.html']

old_cta_title = r'Ready for a website that actually brings in customers\?'
new_cta_title = 'Ready to build something exceptional?'

old_cta_sub = r'Schedule a free call to discuss your business goals and see how a custom-built website can help you grow\.'
new_cta_sub = 'Schedule a consultation to discuss your technical requirements and explore what custom software can do for your business.'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the text inside the h2 tag while preserving attributes
    content = re.sub(old_cta_title, new_cta_title, content)
    content = re.sub(old_cta_sub, new_cta_sub, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated CTAs successfully!")
