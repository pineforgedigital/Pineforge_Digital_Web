import os

# 1. Update index.html
html_path = 'public/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_html = '<img src="images/hero_visual_web.jpg" alt="Abstract Software Architecture" class="floating-image">'

new_html = '''<div class="css-hero-visual floating-image">
                            <!-- Main Window -->
                            <div class="code-window">
                                <div class="window-header">
                                    <span></span><span></span><span></span>
                                </div>
                                <div class="window-body">
                                    <div class="sidebar">
                                        <div class="skeleton-line short"></div>
                                        <div class="skeleton-line"></div>
                                        <div class="skeleton-line"></div>
                                        <div class="skeleton-line"></div>
                                    </div>
                                    <div class="main-content">
                                        <div class="skeleton-title"></div>
                                        <div class="skeleton-grid">
                                            <div class="skeleton-card">
                                                <div class="sk-circle"></div>
                                                <div class="sk-line"></div>
                                            </div>
                                            <div class="skeleton-card highlight">
                                                <div class="sk-bar bg-green" style="height: 60%"></div>
                                                <div class="sk-bar bg-blue" style="height: 80%"></div>
                                                <div class="sk-bar bg-purple" style="height: 40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Overlapping floating widget -->
                            <div class="floating-widget top-right">
                                <div class="widget-header">Lighthouse</div>
                                <div class="widget-score">99</div>
                            </div>
                            
                            <!-- Overlapping floating code block -->
                            <div class="floating-widget bottom-left code-block">
                                <span class="code-keyword">const</span> <span class="code-def">buildSite</span> = () <span class="code-keyword">=&gt;</span> {<br>
                                &nbsp;&nbsp;<span class="code-func">optimize</span>(speed);<br>
                                };
                            </div>
                        </div>'''

content = content.replace(old_html, new_html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Append CSS
css_path = 'public/css/styles.css'
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('''

/* ==========================================================================
   PURE CSS HERO VISUAL
   ========================================================================== */
.css-hero-visual {
    position: relative; width: 100%; max-width: 500px; height: 350px;
    z-index: 2; perspective: 1000px; margin: 0 auto;
}
.code-window {
    width: 100%; height: 100%; background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
    display: flex; flex-direction: column; overflow: hidden;
    transform: rotateX(5deg) rotateY(-10deg);
}
.window-header {
    height: 30px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; padding: 0 15px; gap: 8px;
}
.window-header span { width: 10px; height: 10px; border-radius: 50%; }
.window-header span:nth-child(1) { background: #ef4444; }
.window-header span:nth-child(2) { background: #eab308; }
.window-header span:nth-child(3) { background: #22c55e; }

.window-body { display: flex; flex: 1; }
.sidebar { width: 80px; background: rgba(0,0,0,0.2); border-right: 1px solid rgba(255,255,255,0.05); padding: 15px 10px; display: flex; flex-direction: column; gap: 10px; }
.main-content { flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 20px; }

.skeleton-line { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; }
.skeleton-line.short { width: 50%; margin-bottom: 10px; }
.skeleton-title { height: 12px; width: 40%; background: rgba(255,255,255,0.2); border-radius: 6px; }
.skeleton-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; flex: 1; }
.skeleton-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; gap: 10px; justify-content: flex-end; }
.skeleton-card.highlight { flex-direction: row; align-items: flex-end; gap: 8px; justify-content: center; background: linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(2,132,199,0.1) 100%); }
.sk-circle { width: 30px; height: 30px; border-radius: 50%; background: rgba(255,255,255,0.1); }
.sk-line { height: 6px; width: 80%; background: rgba(255,255,255,0.1); border-radius: 3px; }
.sk-bar { width: 12px; border-radius: 2px 2px 0 0; }
.bg-green { background: #10b981; }
.bg-blue { background: #3b82f6; }
.bg-purple { background: #8b5cf6; }

/* Floating Widgets */
.floating-widget {
    position: absolute; background: rgba(2, 6, 23, 0.85);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4); z-index: 3;
    animation: float-offset 6s ease-in-out infinite; color: white;
}
.top-right {
    top: -20px; right: -30px; padding: 15px 20px; text-align: center;
    border-top: 2px solid rgba(16, 185, 129, 0.6);
}
.widget-header { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
.widget-score { font-size: 2.5rem; font-weight: 800; color: #10b981; line-height: 1; text-shadow: 0 0 10px rgba(16, 185, 129, 0.4); }

.bottom-left {
    bottom: 20px; left: -40px; padding: 15px; font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem; line-height: 1.5; font-weight: bold;
    border-left: 3px solid #3b82f6;
    animation-delay: -3s;
}
.code-keyword { color: #c678dd; }
.code-def { color: #61afef; }
.code-func { color: #98c379; }

@keyframes float-offset {
    0% { transform: translateY(0px) rotate(-2deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(-2deg); }
}

@media (max-width: 768px) {
    .css-hero-visual { transform: scale(0.8); }
    .bottom-left { left: 0; }
    .top-right { right: 0; }
}
''')

print("Replaced image with pure CSS mock UI")
