import os

def rewrite_services():
    with open('public/services.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Section 1
    html = html.replace('Custom Website Design', 'Front-End Web Development', 2)
    html = html.replace('Your digital presence should be an asset, not an expense. We architect high-performance web platforms that load instantly, rank organically, and are strategically designed to maximize your conversion rates.', 'We build marketing and brochure websites from scratch using raw code. By eliminating bloated site builders, we deliver lightning-fast, highly secure, and visually striking digital storefronts that represent your brand perfectly.')
    html = html.replace('Get a website that acts as a 24/7 sales engine, built with enterprise-grade technology scaled perfectly for a small business budget.', 'Eliminate lag, ensure perfect mobile responsiveness, and provide your visitors with a premium browsing experience.')

    # Section 2
    html = html.replace('Local SEO Dominance', 'Search Engine Optimization (SEO)', 2)
    html = html.replace('We engineer your website\'s architecture to please Google\'s algorithm. Speed is a massive ranking factor, and our custom-coded sites run circles around standard templates. We implement perfect structured data so Google knows exactly who you are and where you operate.', 'A beautiful website is useless if nobody finds it. We architect your site\'s codebase specifically to rank high on Google. We handle the technical metadata, schema markup, and speed optimizations required to push your business to the top of local search results.')
    html = html.replace('Stop losing customers to competitors who simply rank higher than you. Capture organic traffic in your local service area.', 'Capture organic traffic in your target market by ensuring search engines can read, index, and prioritize your content.')

    # Section 3
    html = html.replace('E-Commerce Solutions', 'E-Commerce & Payment Integration', 2)
    html = html.replace('Whether you are selling physical products or digital services, we build frictionless checkout experiences. We integrate industry-leading payment processors so you can take orders securely, manage inventory easily, and never lose a sale to a clunky checkout cart.', 'We engineer custom checkout flows and integrate robust payment gateways like Stripe. Whether you are selling digital services, subscriptions, or physical inventory, we ensure the transaction process is frictionless, secure, and fully automated.')
    html = html.replace('Make it incredibly easy for customers to give you money. Increase conversion rates and securely manage transactions.', 'Reduce cart abandonment with a streamlined checkout process tailored directly to your specific sales model.')

    # Section 4
    html = html.replace('Custom Web Applications', 'Full-Stack Web Applications', 2)
    html = html.replace('Sometimes a brochure website isn\'t enough. If you need a unique booking system, an internal dashboard to track logistics, or a portal for your clients, we build highly interactive, database-driven applications using React and PostgreSQL.', 'When off-the-shelf software doesn\'t fit your business model, we build it custom. We develop interactive internal tools, CRM dashboards, and secure client portals powered by modern databases and custom APIs.')
    html = html.replace('Stop paying monthly subscriptions for 10 different apps. Consolidate your operations into one platform you actually own.', 'Consolidate your business operations into a single, proprietary platform that you own and control completely.')

    with open('public/services.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
rewrite_services()
print("Services page rewritten successfully.")
