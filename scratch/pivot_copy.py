import os

file_path = 'public/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Hero
content = content.replace(
    '<span class="badge animate-fade-up">Enterprise Software Engineering</span>',
    '<span class="badge animate-fade-up">Custom Software Solutions</span>'
)
content = content.replace(
    '<h1 class="hero-title animate-fade-up delay-1">Engineering<br>Reliable Software</h1>',
    '<h1 class="hero-title animate-fade-up delay-1">Software That<br>Runs Your Business</h1>'
)
content = content.replace(
    '<p class="hero-subtitle animate-fade-up delay-2">We build secure, scalable, and resilient digital solutions. An expert engineering agency dedicated to enterprise reliability and architectural excellence.</p>',
    '<p class="hero-subtitle animate-fade-up delay-2">Stop fighting with messy spreadsheets and clunky off-the-shelf software. We build custom applications and internal tools designed specifically for how your business actually operates.</p>'
)

# Bento Headers
content = content.replace(
    '<p>Enterprise-grade architectures tailored precisely to your operational workflows.</p>',
    '<p>We build digital tools that automate your operations, save time, and eliminate manual errors.</p>'
)

# Card 1
content = content.replace(
    '<h3>Custom Software Development</h3>\n                        <p>We build tailored full-stack applications from the ground up to solve unique operational challenges. Our engineering ensures high availability, scalability, and airtight security across every layer of the stack.</p>',
    '<h3>Custom Web Applications</h3>\n                        <p>Whether you need a bespoke client portal, a unique SaaS product, or a complex scheduling system, we build tailored software from the ground up to fit your exact business model perfectly.</p>'
)

# Card 2
content = content.replace(
    '<h3>Data Systems</h3>\n                        <p>Robust database architectures and data pipelines designed for high availability and consistency.</p>',
    '<h3>Centralized Databases</h3>\n                        <p>Fragmented data kills productivity. We build secure, centralized databases that connect all your business tools and provide a single source of truth for your team.</p>'
)

# Card 3
content = content.replace(
    '<h3>Cloud Infrastructure</h3>\n                        <p>Scalable, secure, and automated cloud deployments utilizing modern DevOps practices.</p>',
    '<h3>API Integrations</h3>\n                        <p>If your team uses 5 different apps that refuse to talk to each other, we can fix it. We build custom integrations that automatically sync your data across all platforms.</p>'
)

# Card 4
content = content.replace(
    '<h3>Internal Tooling & Automation</h3>\n                        <p>Stop running your business on messy spreadsheets. We build bespoke internal systems that automate your workflows, integrate your data, and provide clear visibility into your operations.</p>',
    '<h3>Workflow Automation</h3>\n                        <p>If your team does the same manual data entry every single day, we can automate it. We build internal tools that save hundreds of hours, reduce payroll bloat, and eliminate costly human error.</p>'
)

# Tech Stack -> Problems Solved
tech_stack_old = """        <!-- Tech Stack Section -->
        <section style="padding: 8rem 0; background: #020617; color: white;">
            <div class="container text-center animate-fade-up">
                <span class="badge" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.2);">The Stack</span>
                <h2 style="color: white; margin-bottom: 3rem;">Modern Technologies.<br>Battle-Tested Reliability.</h2>
                <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; max-width: 800px; margin: 0 auto;">
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Frontend</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">React, Next.js, TypeScript</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Backend</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">Node.js, Python, Go</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Database</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">PostgreSQL, Redis, MongoDB</p>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="color: white; font-size: 1.25rem;">Infrastructure</h4>
                        <p style="color: var(--text-tertiary); margin-top: 0.5rem;">AWS, Docker, Vercel</p>
                    </div>
                </div>
            </div>
        </section>"""

problems_solved_new = """        <!-- Problems Solved Section -->
        <section style="padding: 8rem 0; background: #020617; color: white;">
            <div class="container animate-fade-up">
                <div style="text-align: center; margin-bottom: 5rem;">
                    <span class="badge" style="background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.2);">Do these sound familiar?</span>
                    <h2 style="color: white; margin-top: 1rem;">Problems We Solve Every Day</h2>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
                    <div style="background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #fca5a5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">THE PROBLEM</p>
                        <h4 style="color: white; font-size: 1.2rem; margin-bottom: 1.5rem; line-height: 1.5;">"We run our entire 7-figure business off a single, massive Excel spreadsheet that breaks constantly."</h4>
                        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem;">
                        <p style="color: #6ee7b7; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">THE SOLUTION</p>
                        <p style="color: var(--text-tertiary); font-size: 0.95rem;">We migrate your spreadsheet into a secure, Custom Web Application with user accounts, permissions, and automated reporting.</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #fca5a5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">THE PROBLEM</p>
                        <h4 style="color: white; font-size: 1.2rem; margin-bottom: 1.5rem; line-height: 1.5;">"Our employees spend 15 hours a week copying and pasting data between our CRM and our accounting software."</h4>
                        <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem;">
                        <p style="color: #6ee7b7; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">THE SOLUTION</p>
                        <p style="color: var(--text-tertiary); font-size: 0.95rem;">We build custom API integrations that connect your systems behind the scenes, syncing your data automatically.</p>
                    </div>
                </div>
            </div>
        </section>"""

content = content.replace(tech_stack_old, problems_solved_new)

# Update Trust Banner
content = content.replace(
    '<p style="margin-top:1rem">We focus on the hard problems so you can focus on your business.</p>',
    '<p style="margin-top:1rem">You don\'t need to know how to code. You just need to know your business. We handle the rest.</p>'
)

content = content.replace(
    '<h3 class="mb-2">Zero-Downtime</h3>\n                        <p>We architect our systems for high availability, utilizing modern CI/CD pipelines to deploy updates without disrupting your operations.</p>',
    '<h3 class="mb-2">Business-First Approach</h3>\n                        <p>We don\'t speak in confusing technical jargon. We listen to your business goals first, then we build the exact technology required to achieve them.</p>'
)

content = content.replace(
    '<h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to upgrade your infrastructure?</h2>',
    '<h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to automate your business?</h2>'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Rewrote index.html to be business-first.")
