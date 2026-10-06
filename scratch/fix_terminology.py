import re

with open('public/about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace specific terms
replacements = {
    "software engineers": "web developers",
    "software engineering": "custom web development",
    "engineers building": "developers building",
    "engineers architecting": "developers building",
    "engineering minds": "development minds",
    "Precision Engineering": "Precision Craftsmanship",
    "Our Engineering Philosophy": "Our Development Philosophy",
    "In-House Engineering": "In-House Development",
    "Lead Engineer": "Lead Developer",
    "formally trained ": "", # Remove "formally trained"
    "engineering team": "development team",
    "engineer a custom digital asset": "build a custom digital asset"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('public/about.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed engineering terminology from about.html")
