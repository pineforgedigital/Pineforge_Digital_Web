import glob

html_files = glob.glob('c:/Users/Caleb_Cannon/Workspace/Pineforge Digital Offical/Development/Pineforge Digital Official Website/public/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace(
        "Building reliable software products and systems in Wisconsin.",
        "Premium, hand-coded websites for Wisconsin businesses."
    )
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
print(f"Updated footers in {len(html_files)} files.")
