import glob

replacements = {
    "software engineering": "custom web development",
    "software engineering firm": "custom development firm",
    "We engineer your": "We develop your",
    "engineered specifically": "developed specifically",
    "Engineering Process": "Development Process",
    "we can engineer a solution": "we can build a solution",
    "software engineering capabilities": "web development capabilities",
    "We engineer custom": "We build custom",
    "engineered by our team": "built by our team",
    "custom-engineered website": "custom-built website",
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

print("Removed remaining engineering terminology from all HTML files.")
