import os

# 1. Append CSS
css_path = 'public/css/styles.css'
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('''

/* ==========================================================================
   PERFORMANCE SPEED SECTION
   ========================================================================== */
.performance-metrics {
    display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;
}
.metric-card {
    background: var(--bg-surface); border: 1px solid var(--border-subtle);
    border-radius: 16px; padding: 2.5rem 2rem; text-align: center;
    box-shadow: 0 10px 30px rgba(15,23,42,0.05); width: 240px;
    transition: transform 0.3s ease; position: relative;
}
.metric-card.highlight {
    background: #020617; color: white; border-color: rgba(255,255,255,0.1);
    transform: scale(1.05); box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
}
.metric-card h4 { margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.2rem; }
.metric-card p { font-size: 0.9rem; color: var(--text-secondary); margin: 0; }
.metric-card.highlight h4 { color: white; }
.metric-card.highlight p { color: var(--text-tertiary); }

.circular-chart-svg { display: block; margin: 0 auto; max-width: 140px; max-height: 140px; }
.circle-bg { fill: none; stroke: #e2e8f0; stroke-width: 3.8; }
.highlight .circle-bg { stroke: rgba(255,255,255,0.1); }
.circle { fill: none; stroke-width: 2.8; stroke-linecap: round; }
.red .circle { stroke: #ef4444; animation: progressRed 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.green .circle { stroke: #10b981; filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4)); animation: progressGreen 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

.percentage { fill: var(--text-primary); font-family: 'Inter', sans-serif; font-size: 0.6em; text-anchor: middle; font-weight: 800; }
.highlight .percentage { fill: #ffffff; }

@keyframes progressRed {
    0% { stroke-dasharray: 0, 100; }
    100% { stroke-dasharray: 42, 100; }
}
@keyframes progressGreen {
    0% { stroke-dasharray: 0, 100; }
    100% { stroke-dasharray: 100, 100; }
}

/* Pause animation until hovered or in view */
.performance-metrics:hover .circle { animation-play-state: running; }
''')

# 2. Inject HTML
html_path = 'public/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

performance_html = '''
        <!-- Performance Section -->
        <section style="padding: 8rem 0; background: white; border-top: 1px solid var(--border-subtle); overflow: hidden;">
            <div class="container">
                <div class="grid grid-2" style="align-items: center; gap: 4rem;">
                    <div class="animate-fade-up">
                        <span class="badge badge-emerald" style="margin-bottom: 1.5rem;">Google Lighthouse Optimized</span>
                        <h2 style="font-size: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.03em; line-height: 1.1;">Speed is an SEO ranking factor.</h2>
                        <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem;">Slow, bloated WordPress templates bleed customers and get penalized by Google. Because we custom-code every website from scratch without templates, our architecture guarantees perfect Google Lighthouse performance scores.</p>
                        <ul style="list-style: none; padding: 0; color: var(--text-secondary); display: flex; flex-direction: column; gap: 1rem; font-size: 1.1rem; font-weight: 500;">
                            <li style="display: flex; align-items: center; gap: 12px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Instant page load speeds</li>
                            <li style="display: flex; align-items: center; gap: 12px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Higher local search rankings</li>
                            <li style="display: flex; align-items: center; gap: 12px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Better mobile user retention</li>
                        </ul>
                    </div>
                    
                    <div class="performance-metrics animate-fade-up delay-2">
                        <!-- WP Score -->
                        <div class="metric-card">
                            <div class="circular-chart red">
                                <svg viewBox="0 0 36 36" class="circular-chart-svg">
                                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path class="circle" stroke-dasharray="0, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="21.5" class="percentage">42</text>
                                </svg>
                            </div>
                            <h4>Typical Template</h4>
                            <p>Bloated code & slow</p>
                        </div>

                        <!-- Pineforge Score -->
                        <div class="metric-card highlight">
                            <div class="circular-chart green">
                                <svg viewBox="0 0 36 36" class="circular-chart-svg">
                                    <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path class="circle" stroke-dasharray="0, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="21.5" class="percentage">100</text>
                                </svg>
                            </div>
                            <h4>Pineforge Code</h4>
                            <p>Custom & instantaneous</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
'''

# Insert right before the Dark CTA
target = '<!-- Dark CTA -->'
if 'Performance Section' not in content:
    content = content.replace(target, performance_html + '\n        ' + target)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Added Performance Section to index.html and styles.css")
