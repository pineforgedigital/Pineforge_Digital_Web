import os
import glob

# 1. JSON-LD Schema to inject into <head>
json_ld = """
    <!-- Local SEO Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Pineforge Digital LLC",
      "url": "https://pineforge.digital",
      "logo": "https://pineforge.digital/images/Brand_Logo_clear.png",
      "description": "Custom website design, web development, and software engineering for small and mid-sized businesses.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bristol",
        "addressRegion": "WI",
        "postalCode": "53104",
        "addressCountry": "US"
      },
      "areaServed": [
        {"@type": "City", "name": "Kenosha"},
        {"@type": "City", "name": "Racine"},
        {"@type": "City", "name": "Milwaukee"},
        {"@type": "State", "name": "Wisconsin"}
      ],
      "telephone": "+1-262-234-1027",
      "priceRange": "$$"
    }
    </script>
"""

html_files = glob.glob('public/*.html')

for f_path in html_files:
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject JSON-LD right before </head> if not already there
    if 'application/ld+json' not in content:
        content = content.replace('</head>', f'{json_ld}</head>')

    # Update Footer for Local SEO
    old_footer_text = "<p>Building reliable software products and systems in Wisconsin.</p>"
    new_footer_text = "<p>Premium custom website development and software engineering for small and mid-sized businesses. Serving Kenosha, Racine, and Southeastern Wisconsin.</p>"
    content = content.replace(old_footer_text, new_footer_text)

    with open(f_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 2. Update index.html Hero to target SMBs but keep it premium
index_path = 'public/index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

old_subtitle = '<p class="hero-subtitle-dark animate-fade-up delay-2">Stop fighting with messy spreadsheets and clunky off-the-shelf software. We build custom applications and internal tools designed specifically for how your business actually operates.</p>'
new_subtitle = '<p class="hero-subtitle-dark animate-fade-up delay-2">We bring enterprise-grade web development and custom software to small and mid-sized businesses. Get premium technology built specifically for your local operations—without the enterprise price tag.</p>'
index_content = index_content.replace(old_subtitle, new_subtitle)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Injected Local SEO Schema and updated SMB positioning.")
