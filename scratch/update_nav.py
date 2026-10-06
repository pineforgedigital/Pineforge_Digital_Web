import glob
import re

html_files = glob.glob('c:/Users/Caleb_Cannon/Workspace/Pineforge Digital Offical/Development/Pineforge Digital Official Website/public/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Change <a href="/work">Work</a>
    content = content.replace('<a href="/work">Work</a>', '<a href="/work">Case Study</a>')
    # Change active link
    content = content.replace('<a href="/work" style="font-weight: 600;">Work</a>', '<a href="/work" style="font-weight: 600;">Case Study</a>')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Updated navigation links.")
