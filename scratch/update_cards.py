import os

file_path = 'public/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Card 2 (Centralized Databases)
old_card_2 = """<div class="bento-card animate-fade-up delay-1">
                        <div class="bento-icon icon-emerald">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h3>Centralized Databases</h3>
                        <p>Fragmented data kills productivity. We build secure, centralized databases that connect all your business tools and provide a single source of truth for your team.</p>
                    </div>"""

new_card_2 = """<div class="bento-card bento-graphic-vertical animate-fade-up delay-1">
                        <div class="bento-content">
                            <div class="bento-icon icon-emerald">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                            </div>
                            <h3>Centralized Databases</h3>
                            <p>Fragmented data kills productivity. We build secure, centralized databases that connect all your business tools and provide a single source of truth.</p>
                        </div>
                        <div class="bento-visual-vertical">
                            <div class="db-stack">
                                <div class="db-layer layer-1"></div>
                                <div class="db-layer layer-2"></div>
                                <div class="db-layer layer-3"></div>
                                <div class="db-glow"></div>
                            </div>
                        </div>
                    </div>"""

content = content.replace(old_card_2, new_card_2)

# Card 4 (Workflow Automation)
old_card_4 = """<div class="bento-card bento-large animate-fade-up delay-1">
                        <div class="bento-icon icon-amber">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                        <h3>Workflow Automation</h3>
                        <p>If your team does the same manual data entry every single day, we can automate it. We build internal tools that save hundreds of hours, reduce payroll bloat, and eliminate costly human error.</p>
                    </div>"""

new_card_4 = """<div class="bento-card bento-large bento-graphic animate-fade-up delay-1">
                        <div class="bento-content">
                            <div class="bento-icon icon-amber">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                            <h3>Workflow Automation</h3>
                            <p>If your team does the same manual data entry every single day, we can automate it. We build internal tools that save hundreds of hours, reduce payroll bloat, and eliminate costly human error.</p>
                        </div>
                        <div class="bento-visual">
                            <div class="automation-pipeline">
                                <div class="task-box"></div>
                                <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                <div class="task-box processed"></div>
                                <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                <div class="task-box complete">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>"""

content = content.replace(old_card_4, new_card_4)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html for cards 2 and 4")
