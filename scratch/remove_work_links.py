import glob

html_files = glob.glob('c:/Users/Caleb_Cannon/Workspace/Pineforge Digital Offical/Development/Pineforge Digital Official Website/public/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if 'href="/work"' in line:
            continue
        new_lines.append(line)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

print(f"Removed /work links from {len(html_files)} files.")
