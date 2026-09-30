import os
import glob

# ---------------------------------------------------------
# 1. DELETE LINGERING FILES
# ---------------------------------------------------------
files_to_delete = ['public/portfolio.html', 'public/portfolio-detail.html']
for f in files_to_delete:
    if os.path.exists(f):
        os.remove(f)

# ---------------------------------------------------------
# 2. UPDATE SITEMAP.XML
# ---------------------------------------------------------
sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pineforge.digital/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pineforge.digital/services</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pineforge.digital/work</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pineforge.digital/process</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pineforge.digital/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pineforge.digital/contact</loc>
    <priority>0.8</priority>
  </url>
</urlset>"""

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_content)


# ---------------------------------------------------------
# 3. GLOBAL HEADER/FOOTER FOR 404, LOGIN, PRIVACY, TERMS
# ---------------------------------------------------------
def get_template(title, main_content):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Pineforge Digital</title>
    <link rel="stylesheet" href="css/styles.css?v=ultra">
    <link rel="icon" type="image/png" href="images/favicon_optimized.png">
    <script defer src="/_vercel/insights/script.js"></script>
</head>
<body>
    <header class="navbar">
        <div class="container nav-container">
            <a href="/" class="logo animate-fade-up">
                <img src="images/Brand_Logo_clear.png" alt="Pineforge Digital">
            </a>
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <nav>
                <ul class="nav-links">
                    <li class="animate-fade-up delay-1"><a href="/">Home</a></li>
                    <li class="animate-fade-up delay-2"><a href="/services">Services</a></li>
                    <li class="animate-fade-up delay-2"><a href="/work">Work</a></li>
                    <li class="animate-fade-up delay-3"><a href="/process">Process</a></li>
                    <li class="animate-fade-up delay-3"><a href="/about">About</a></li>
                    <li class="animate-fade-up delay-3"><a href="/contact" class="btn btn-primary nav-btn">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main style="padding-top: 100px;">
        {main_content}
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h4>Pineforge Digital</h4>
                    <p>Building reliable software products and systems in Wisconsin.</p>
                    <p style="margin-top:1rem; color: #0ea5e9;">(262) 234-1027</p>
                </div>
                <div class="footer-col">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/process">Process</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Pineforge Digital LLC. Designed & Built in Wisconsin, USA.</p>
                <div style="display:flex; gap:1rem;">
                    <a href="#" style="color:var(--text-tertiary);">LinkedIn</a>
                    <a href="#" style="color:var(--text-tertiary);">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="js/app.js"></script>
</body>
</html>"""

content_404 = """
<section class="page-header" style="padding: 16rem 0; text-align: center;">
    <div class="container animate-fade-up">
        <h1 style="font-size: 6rem; margin-bottom: 1rem; color: var(--brand-blue);">404</h1>
        <h2>Page Not Found</h2>
        <p style="margin-bottom: 2rem;">The page you are looking for does not exist or has been moved.</p>
        <a href="/" class="btn btn-primary">Return Home</a>
    </div>
</section>
"""

content_login = """
<section class="page-header" style="padding: 12rem 0; min-height: 80vh; display: flex; align-items: center;">
    <div class="container animate-fade-up">
        <div class="bento-card" style="max-width: 450px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 1rem;">Client Access</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Please enter your access PIN to continue.</p>
            <form id="loginForm">
                <div class="form-group" style="text-align: left;">
                    <input type="password" id="pinCode" placeholder="Enter PIN" required style="text-align: center; letter-spacing: 0.2em; font-size: 1.5rem; padding: 1rem;">
                </div>
                <button type="submit" id="loginBtn" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Authenticate</button>
                <p id="loginError" style="color: #ef4444; margin-top: 1rem; font-size: 0.9rem; display: none;">Invalid PIN. Please try again.</p>
            </form>
        </div>
    </div>
</section>
<script>
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const pin = document.getElementById('pinCode').value;
        const btn = document.getElementById('loginBtn');
        const err = document.getElementById('loginError');
        
        btn.disabled = true;
        btn.innerText = 'Verifying...';
        err.style.display = 'none';

        try {
            const res = await fetch('/api/verify-pin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin })
            });

            const data = await res.json();
            if (res.ok && data.success) {
                window.location.href = '/';
            } else {
                err.style.display = 'block';
                btn.disabled = false;
                btn.innerText = 'Authenticate';
            }
        } catch (error) {
            err.innerText = 'An error occurred. Try again.';
            err.style.display = 'block';
            btn.disabled = false;
            btn.innerText = 'Authenticate';
        }
    });
</script>
"""

with open('public/404.html', 'w', encoding='utf-8') as f: f.write(get_template("Page Not Found", content_404))
with open('public/login.html', 'w', encoding='utf-8') as f: f.write(get_template("Client Access", content_login))

# Let's preserve the text of privacy and terms but inject them into the new template
try:
    with open('public/privacy.html', 'r', encoding='utf-8') as f: p_text = f.read()
    # Basic extraction (assuming content is in a container)
    if "container" in p_text:
        content_privacy = '<section style="padding: 6rem 0;"><div class="container">' + p_text.split('<div class="container">')[1].split('</section>')[0] + '</section>'
        with open('public/privacy.html', 'w', encoding='utf-8') as f: f.write(get_template("Privacy Policy", content_privacy))
except: pass

try:
    with open('public/terms.html', 'r', encoding='utf-8') as f: t_text = f.read()
    if "container" in t_text:
        content_terms = '<section style="padding: 6rem 0;"><div class="container">' + t_text.split('<div class="container">')[1].split('</section>')[0] + '</section>'
        with open('public/terms.html', 'w', encoding='utf-8') as f: f.write(get_template("Terms of Service", content_terms))
except: pass


# ---------------------------------------------------------
# 4. ADD SEO, OPEN GRAPH, AND VERCEL ANALYTICS TO ALL HTML
# ---------------------------------------------------------
seo_meta = """
    <meta name="description" content="Pineforge Digital is a premier software engineering agency based in Wisconsin. We build secure, reliable, and scalable enterprise applications, internal tools, and high-performance web systems.">
    <meta property="og:title" content="Pineforge Digital | Engineering Reliable Software">
    <meta property="og:description" content="We build tailored full-stack applications from the ground up to solve unique operational challenges.">
    <meta property="og:image" content="https://pineforge.digital/images/og_image.jpg">
    <meta property="og:url" content="https://pineforge.digital">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <script defer src="/_vercel/insights/script.js"></script>
"""

html_files = glob.glob('public/*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add SEO if not present
    if '<meta name="description"' not in content:
        content = content.replace('</title>', '</title>\n' + seo_meta)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("All structural, SEO, and legal page updates complete.")
