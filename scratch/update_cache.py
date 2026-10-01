import glob

for f in glob.glob('public/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '?v=ultra' in content:
        content = content.replace('?v=ultra', '?v=1.1')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
