import glob
import re
import os

seo_data = {
    'index.html': {
        'title': 'Pineforge Digital | Custom Website Design in Kenosha & Racine, WI',
        'desc': "Premium custom website design, web development, and SEO services for small to mid-sized businesses in Southeastern Wisconsin. Let's grow your business."
    },
    'services.html': {
        'title': 'Web Design & Development Services | Pineforge Digital',
        'desc': 'Explore our specialized web services for SMBs, including custom website design, client portals, workflow automation, and custom business applications in WI.'
    },
    'work.html': {
        'title': 'Our Work & Portfolio | Pineforge Digital',
        'desc': 'View our portfolio of high-performance custom websites and business applications built for growing businesses in Kenosha, Racine, and Milwaukee.'
    },
    'process.html': {
        'title': 'Our Web Design Process | Pineforge Digital',
        'desc': 'Learn about our streamlined, transparent web design and development process. From initial discovery to launch, we partner with you every step of the way.'
    },
    'about.html': {
        'title': 'About Pineforge Digital | Local Web Developers in Wisconsin',
        'desc': 'Based in Southeastern Wisconsin, Pineforge Digital specializes in building premium, custom websites and digital tools that solve real business problems.'
    },
    'contact.html': {
        'title': 'Contact Us | Pineforge Digital Website Design',
        'desc': 'Ready to start your custom website project? Contact Pineforge Digital today. We serve Kenosha, Racine, Milwaukee, and nationwide.'
    },
    'privacy.html': {
        'title': 'Privacy Policy | Pineforge Digital',
        'desc': 'Read the Pineforge Digital Privacy Policy to understand how we protect your data and respect your privacy when you use our website.'
    },
    'terms.html': {
        'title': 'Terms of Service | Pineforge Digital',
        'desc': 'Review the Terms of Service for Pineforge Digital.'
    },
    '404.html': {
        'title': 'Page Not Found | Pineforge Digital',
        'desc': "The page you are looking for does not exist. Return to Pineforge Digital's homepage to find premium web design services in Wisconsin."
    },
    'login.html': {
        'title': 'Client Login | Pineforge Digital',
        'desc': 'Secure client portal login for Pineforge Digital partners.'
    }
}

base_dir = 'public'

for filename, data in seo_data.items():
    filepath = os.path.join(base_dir, filename)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace <title>
    content = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', content, flags=re.IGNORECASE)
    
    # Replace <meta name="description">
    content = re.sub(
        r'<meta\s+name=["\']description["\']\s+content=["\'].*?["\']\s*/?>',
        f'<meta name="description" content="{data["desc"]}">',
        content,
        flags=re.IGNORECASE
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("SEO tags updated for all pages!")
