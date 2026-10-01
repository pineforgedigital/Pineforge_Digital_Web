import glob

html_files = glob.glob("public/*.html")
for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We want to replace <body> with <body class="dark-theme">
    target = '<body class="dark-theme">'
    if target not in content:
        content = content.replace('<body>', target)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
