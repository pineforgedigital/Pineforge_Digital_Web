import os

file_path = 'public/services.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Header
content = content.replace(
    '<p>Comprehensive, enterprise-grade development for businesses that demand reliability.</p>',
    '<p>We build digital systems that eliminate manual work, streamline operations, and drive revenue.</p>'
)

# Service 1
content = content.replace(
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Custom Software Development</h2>',
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Custom Business Applications</h2>'
)
content = content.replace(
    '<p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Off-the-shelf software rarely fits a unique business perfectly. We build tailored, full-stack applications from the ground up to solve your specific operational challenges. From complex internal dashboards to public-facing SaaS platforms, our engineering ensures high availability, scalability, and security.</p>',
    '<p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Off-the-shelf software forces you to change how you run your business. We build tailored applications from the ground up to fit your exact processes perfectly. If you have a unique operational challenge, we can build the software to solve it.</p>'
)
content = content.replace(
    '<li>End-to-end full-stack development</li>\n                            <li>REST & GraphQL API design</li>\n                            <li>Legacy system modernization and migration</li>\n                            <li>Third-party API integration (Stripe, Twilio, Salesforce)</li>',
    '<li>Centralized company databases</li>\n                            <li>Custom scheduling and booking software</li>\n                            <li>Seamless integrations with your existing tools (QuickBooks, Salesforce, etc.)</li>\n                            <li>Complete migration from legacy software</li>'
)
content = content.replace(
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We utilize strongly-typed languages and robust frameworks to ensure minimal runtime errors and maximum maintainability.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge">React</span>\n                            <span class="badge">TypeScript</span>\n                            <span class="badge">Node.js</span>\n                            <span class="badge">Python</span>\n                        </div>',
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Business Outcomes</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Stop paying monthly subscriptions for 10 different apps. Consolidate your operations into one platform you actually own.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge badge-blue">Zero Monthly Fees</span>\n                            <span class="badge badge-emerald">Full Ownership</span>\n                            <span class="badge badge-violet">Total Customization</span>\n                        </div>'
)

# Service 2
content = content.replace(
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We leverage modern database architectures and automation scripts to eliminate manual data entry.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge">PostgreSQL</span>\n                            <span class="badge">Redis</span>\n                            <span class="badge">Retool</span>\n                            <span class="badge">GraphQL</span>\n                        </div>',
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Business Outcomes</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Eliminate the hidden cost of human error and free your team to focus on high-value tasks, not data entry.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge badge-emerald">Save 100+ Hours/Mo</span>\n                            <span class="badge badge-amber">Eliminate Errors</span>\n                            <span class="badge badge-blue">Real-Time Data</span>\n                        </div>'
)
content = content.replace(
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Internal Tools & Automation</h2>',
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Workflow & Process Automation</h2>'
)
content = content.replace(
    '<li>Custom CRMs and ERP systems</li>\n                            <li>Automated data pipelines and reporting</li>\n                            <li>Inventory and logistical tracking tools</li>\n                            <li>Employee portals and role-based dashboards</li>',
    '<li>Custom employee portals and CRMs</li>\n                            <li>Automated invoicing and financial reporting</li>\n                            <li>Inventory and logistical tracking dashboards</li>\n                            <li>Automatic data syncing between platforms</li>'
)

# Service 3
content = content.replace(
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">High-Performance Web Apps</h2>',
    '<h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Client Portals & Dashboards</h2>'
)
content = content.replace(
    '<p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Your public-facing applications are the face of your business. They need to be blazingly fast, accessible, and perfectly responsive across all devices. We utilize modern frameworks to build secure web apps that convert visitors into customers and rank high on search engines.</p>',
    '<p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">Give your customers a premium, secure portal where they can log in, view their project status, pay invoices, or interact with your services directly. A professional client dashboard builds immense trust and significantly reduces customer support inquiries.</p>'
)
content = content.replace(
    '<li>Progressive Web Apps (PWAs)</li>\n                            <li>E-Commerce platform integrations</li>\n                            <li>Server-Side Rendering (SSR) for SEO optimization</li>\n                            <li>Interactive 3D or WebGL experiences</li>',
    '<li>Secure login and user authentication</li>\n                            <li>Live project tracking and status updates</li>\n                            <li>Integrated billing and invoice management</li>\n                            <li>Secure document sharing and messaging</li>'
)
content = content.replace(
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Technology Focus</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">We build at the edge, utilizing the latest in web technologies to ensure sub-second load times worldwide.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge">Next.js</span>\n                            <span class="badge">Vercel</span>\n                            <span class="badge">TailwindCSS</span>\n                            <span class="badge">WebSockets</span>\n                        </div>',
    '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Business Outcomes</h4>\n                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Provide a self-serve experience that delights your clients and drastically reduces the time you spend answering emails.</p>\n                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">\n                            <span class="badge badge-violet">Premium Branding</span>\n                            <span class="badge badge-blue">Less Support Emails</span>\n                            <span class="badge badge-emerald">Secure Access</span>\n                        </div>'
)

# FAQ
content = content.replace(
    '<p style="color: var(--text-secondary);">Security is baked into our architecture from day one. We utilize industry-standard encryption, parameterized queries to prevent injections, strict CORS policies, and role-based access control (RBAC) to protect your sensitive data.</p>',
    '<p style="color: var(--text-secondary);">Security is our top priority. We use bank-level encryption, secure user authentication, and strict access controls to ensure your sensitive business data is completely protected from unauthorized access.</p>'
)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Rewrote services.html to be business-first.")
