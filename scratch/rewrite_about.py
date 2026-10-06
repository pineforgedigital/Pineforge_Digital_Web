import re

with open('public/about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract everything before <main> and after </main>
main_match = re.search(r'(<main>)(.*?)(</main>)', content, re.DOTALL)
if not main_match:
    print("Could not find main tags")
    exit(1)

pre_main = content[:main_match.start(2)]
post_main = content[main_match.end(2):]

new_main = """
        <section class="page-header-dark">
            <div class="container animate-fade-up">
                <span class="badge badge-dark" style="margin-bottom: 1rem;">Our Mission</span>
                <h1 style="font-size: 4rem; line-height: 1.1; letter-spacing: -0.04em;">Precision Engineering.<br>Wisconsin Roots.</h1>
                <p style="font-size: 1.25rem;">We are a dedicated team of software engineers building premium, high-performance digital infrastructure for businesses that refuse to settle for average.</p>
            </div>
        </section>

        <!-- Our Story Section -->
        <section style="padding: 8rem 0; background: var(--bg-base);">
            <div class="container">
                <div class="grid grid-2" style="gap: 4rem; align-items: center;">
                    <div class="animate-fade-up">
                        <h2 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Raising the standard.</h2>
                        <p style="font-size: 1.25rem; color: var(--text-secondary); line-height: 1.8;">
                            Pineforge Digital was founded on a simple principle: local businesses deserve the same caliber of software engineering as enterprise tech companies.
                        </p>
                    </div>
                    <div class="animate-fade-up delay-1" style="border-left: 2px solid var(--border-subtle); padding-left: 2rem;">
                        <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
                            We noticed a troubling trend in the industry—businesses were outgrowing their basic websites, but lacked a technical partner capable of building true, scalable solutions. They needed more than a digital brochure; they needed operational infrastructure.
                        </p>
                        <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8;">
                            That is where we step in. As formally trained software engineers, we bypass bloated templates and drag-and-drop tools entirely. Instead, we write clean, customized code from the ground up to ensure absolute security, unmatched speed, and perfect alignment with your business goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Philosophy (Dark Section) -->
        <section class="dark-theme" style="padding: 8rem 0; background: #020617; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
            <div class="container">
                <div class="section-header animate-fade-up">
                    <h2 style="color: white;">Our Engineering Philosophy</h2>
                </div>
                <div class="bento-grid">
                    <div class="bento-card animate-fade-up" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
                        <h3 style="color: white; margin-bottom: 1rem;">100% In-House Engineering</h3>
                        <p style="color: rgba(255,255,255,0.6); line-height: 1.7;">Every line of code is written right here in Wisconsin. We don't offshore or outsource. When you partner with us, you work directly with the engineers architecting your platform.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-1" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
                        <h3 style="color: white; margin-bottom: 1rem;">Obsessive Performance</h3>
                        <p style="color: rgba(255,255,255,0.6); line-height: 1.7;">Speed is not a luxury; it is a requirement. We leverage modern edge networks and custom-built static generation to guarantee instant load times, ensuring you never lose a customer to a slow page.</p>
                    </div>
                    <div class="bento-card animate-fade-up delay-2" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
                        <h3 style="color: white; margin-bottom: 1rem;">Unrestricted Ownership</h3>
                        <p style="color: rgba(255,255,255,0.6); line-height: 1.7;">We believe in transparent partnerships, not vendor lock-in. Once a project is completed, you own the entire codebase and all intellectual property. We build it, but it belongs to you.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Meet the Founders -->
        <section style="padding: 8rem 0; background: var(--bg-surface);">
            <div class="container">
                <div class="section-header animate-fade-up">
                    <h2>Leadership</h2>
                    <p style="margin-top: 1rem; color: var(--text-secondary); max-width: 600px; margin-left: auto; margin-right: auto;">The engineering minds behind Pineforge Digital.</p>
                </div>
                
                <div class="grid grid-2" style="gap: 2rem; max-width: 1000px; margin: 0 auto;">
                    <!-- Caleb Card -->
                    <div class="bento-card animate-fade-up" style="padding: 4rem 3rem;">
                        <h3 style="font-size: 2.25rem; margin-bottom: 0.5rem; letter-spacing: -0.02em;">Caleb Cannon</h3>
                        <p style="color: var(--accent-blue); font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.85rem;">Co-Founder & Technical Lead</p>
                        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem;">
                            Merging a rigorous background in Cyber Security with sharp business acumen, Caleb architects the infrastructure that makes Pineforge Digital platforms highly secure and reliable. He focuses on building scalable systems designed to automate workflows and drive long-term business growth.
                        </p>
                    </div>
                    
                    <!-- Richard Card -->
                    <div class="bento-card animate-fade-up delay-1" style="padding: 4rem 3rem;">
                        <h3 style="font-size: 2.25rem; margin-bottom: 0.5rem; letter-spacing: -0.02em;">Richard Firkin</h3>
                        <p style="color: var(--accent-emerald); font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.85rem;">Co-Founder & Lead Engineer</p>
                        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem;">
                            An elite computer science mind, Richard is obsessed with raw performance and clean architecture. He translates complex business logic into lightning-fast, highly optimized code—ensuring that every digital asset we deploy performs flawlessly under pressure.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Banner -->
        <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle); text-align: center;">
            <div class="container animate-fade-up">
                <p style="text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-tertiary); font-weight: 600; font-size: 0.85rem; margin-bottom: 2rem;">Powered By Enterprise Infrastructure</p>
                <div style="display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap; opacity: 0.6; filter: grayscale(100%);">
                    <span style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; color: var(--text-primary);">React</span>
                    <span style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; color: var(--text-primary);">Next.js</span>
                    <span style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; color: var(--text-primary);">Vercel</span>
                    <span style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; color: var(--text-primary);">Supabase</span>
                    <span style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; color: var(--text-primary);">Node.js</span>
                </div>
            </div>
        </section>
        
        <!-- CTA Section -->
        <section style="padding: 8rem 0; background: var(--bg-base); text-align: center;">
            <div class="container animate-fade-up">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.02em;">Ready to build something real?</h2>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Let us engineer a custom digital asset that elevates your brand and drives your business forward.</p>
                <a href="/contact" class="btn btn-primary" style="padding: 1.25rem 3rem; font-size: 1.1rem;">Discuss Your Project</a>
                <a href="/services" class="btn btn-secondary" style="padding: 1.25rem 3rem; font-size: 1.1rem; margin-left: 1rem; border: 1px solid var(--border-subtle); background: transparent; color: var(--text-primary);">View Services</a>
            </div>
        </section>
"""

with open('public/about.html', 'w', encoding='utf-8') as f:
    f.write(pre_main + new_main + post_main)

print("About page rewritten successfully.")
