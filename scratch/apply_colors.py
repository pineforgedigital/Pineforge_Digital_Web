import os

def replace_icons(file_path):
    if not os.path.exists(file_path):
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We will sequentially replace the first 4 bento-icon instances with the 4 colors.
    
    # Let's count them
    count = content.count('class="bento-icon"')
    
    # We'll use a hacky sequential replace
    content = content.replace('class="bento-icon"', 'class="bento-icon icon-blue"', 1)
    content = content.replace('class="bento-icon"', 'class="bento-icon icon-emerald"', 1)
    content = content.replace('class="bento-icon"', 'class="bento-icon icon-violet"', 1)
    content = content.replace('class="bento-icon"', 'class="bento-icon icon-amber"', 1)
    
    # And maybe colorize some badges
    # Let's look for Phase 1, Phase 2 in process
    content = content.replace('<span class="badge">Phase 1</span>', '<span class="badge badge-blue">Phase 1</span>')
    content = content.replace('<span class="badge">Phase 2</span>', '<span class="badge badge-emerald">Phase 2</span>')
    content = content.replace('<span class="badge">Phase 3</span>', '<span class="badge badge-violet">Phase 3</span>')
    content = content.replace('<span class="badge">Phase 4</span>', '<span class="badge badge-amber">Phase 4</span>')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

replace_icons('public/index.html')
replace_icons('public/services.html')
replace_icons('public/about.html')
replace_icons('public/process.html')

print("Applied colors to HTML pages")
