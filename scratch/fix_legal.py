import os

def fix_legal_page(filepath, title):
    with open('public/about.html', 'r', encoding='utf-8') as f:
        about = f.read()

    header = about.split('<main>')[0]
    footer = about.split('</main>')[1]
    
    # replace the title tag in the header
    header = header.replace('<title>About Pineforge Digital | Local Web Developers in Wisconsin</title>', f'<title>{title} | Pineforge Digital</title>')

    content = f"""{header}<main>
        <section class="page-header-dark" style="padding: 12rem 0 4rem;">
            <div class="container animate-fade-up">
                <h1>{title}</h1>
                <p>Last Updated: October 2026</p>
            </div>
        </section>
        <section style="padding: 4rem 0; background: var(--bg-base); min-height: 50vh;">
            <div class="container" style="max-width: 800px; color: var(--text-secondary); line-height: 1.8;">
                <p>[Insert your legal {title.lower()} text here. You can use standard HTML tags like &lt;h2&gt; and &lt;p&gt; to format it.]</p>
            </div>
        </section>
    </main>{footer}"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_legal_page('public/privacy.html', 'Privacy Policy')
fix_legal_page('public/terms.html', 'Terms of Service')
print("Fixed legal pages.")
