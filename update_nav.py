import os
import re

target_dir = r"c:\Users\canno\Desktop\Pineforge Digital LLC\Website\public"
nav_replacement = """<ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="process">Process</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>"""

footer_replacement = """<h4>Company</h4>
                    <ul>
                        <li><a href="services">Services</a></li>
                        <li><a href="process">Process</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>"""

def update_files():
    for filename in os.listdir(target_dir):
        if filename.endswith(".html"):
            filepath = os.path.join(target_dir, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Regex to find nav-links ul
            # Needs to match <ul class="nav-links">...</ul> inclusive of newlines
            new_content = re.sub(r'<ul class="nav-links">[\s\S]*?</ul>', nav_replacement, content)
            
            # Regex to find Footer Company section
            # Look for <h4>Company</h4> followed by ul
            new_content = re.sub(r'<h4>Company</h4>\s*<ul>[\s\S]*?</ul>', footer_replacement, new_content)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filename}")
            else:
                print(f"No changes for {filename}")

if __name__ == "__main__":
    update_files()
