import glob, re
for f in glob.glob('public/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    match = re.search(r'<ul class="nav-links">(.*?)</ul>', content, re.DOTALL)
    if match:
        nav_html = match.group(1)
        if 'style="' in nav_html:
            print(f'Found inline style in {f}')
            
            # Print the exact lines
            for line in nav_html.split('\n'):
                if 'style="' in line:
                    print(f'  {line.strip()}')
