import glob

replacements = {
    "our team": "us",
    "Our team": "We",
    "a dedicated team of": "two dedicated",
    "by our team": "by us",
    "our development team": "we",
    "engineering team": "development team"
}

for file_path in glob.glob('public/*.html'):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated team references to reflect two founders.")
