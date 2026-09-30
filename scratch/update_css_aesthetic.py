import os

file_path = 'public/css/styles.css'

with open(file_path, 'a', encoding='utf-8') as f:
    f.write('''

/* ==========================================================================
   HIGH-END AESTHETIC UPGRADES
   ========================================================================== */

/* Dark Mode Hero */
.hero-dark {
    background-color: #020617;
    position: relative;
    padding: 14rem 0 10rem;
    overflow: hidden;
    color: white;
}
.hero-dark::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at 50% 0%, black 20%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 20%, transparent 80%);
    pointer-events: none; z-index: 0;
}
.hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}
@media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .hero-content { text-align: center !important; }
    .hero-actions { justify-content: center !important; }
}

.hero-title-dark {
    font-size: clamp(3.5rem, 6vw, 5.5rem);
    font-weight: 800; letter-spacing: -0.04em; line-height: 1.05;
    margin-bottom: 1.5rem; color: #ffffff;
}
.hero-subtitle-dark {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    color: var(--text-tertiary);
    margin-bottom: 3rem; line-height: 1.7; max-width: 600px;
}

/* Dark Mode Buttons & Badges */
.badge-dark {
    background: rgba(255,255,255,0.05); color: #e2e8f0; border-color: rgba(255,255,255,0.1); margin-bottom: 1.5rem;
}
.btn-primary-dark {
    background: #ffffff; color: #020617; box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}
.btn-primary-dark:hover {
    background: #f8fafc; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}
.btn-secondary-dark {
    background: rgba(255,255,255,0.05); color: #ffffff; border: 1px solid rgba(255,255,255,0.1);
}
.btn-secondary-dark:hover {
    background: rgba(255,255,255,0.1); transform: translateY(-2px);
}

/* Hero Visual (Abstract 3D Shape) */
.hero-image-container {
    position: relative; width: 100%; aspect-ratio: 1; 
    display: flex; justify-content: center; align-items: center;
}
.floating-image {
    width: 120%; max-width: 700px; height: auto; object-fit: contain;
    animation: float 6s ease-in-out infinite; z-index: 2; position: relative;
    mix-blend-mode: screen; /* Optional: blends beautifully with dark backgrounds */
}
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}
.glow-orb {
    position: absolute; width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(2, 132, 199, 0.4) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
    filter: blur(40px); z-index: 1; animation: pulse 4s ease-in-out infinite alternate;
}
@keyframes pulse {
    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* Texture Background */
.texture-bg {
    background-color: var(--bg-surface);
    background-image: radial-gradient(var(--border-strong) 1px, transparent 1px);
    background-size: 24px 24px;
}

/* Graphic Bento Cards */
.bento-graphic {
    display: flex !important; flex-direction: row; justify-content: space-between; overflow: hidden;
}
.bento-content { flex: 1; z-index: 2; padding-right: 2rem; }
.bento-visual { 
    flex: 1; position: relative; display: flex; align-items: center; justify-content: flex-end; 
}
@media (max-width: 768px) {
    .bento-graphic { flex-direction: column; }
    .bento-content { padding-right: 0; margin-bottom: 2rem; }
    .bento-visual { justify-content: center; min-height: 200px; }
}

/* CSS Mockup Window */
.mockup-window {
    width: 100%; max-width: 320px; height: 220px; background: white;
    border-radius: 12px; box-shadow: 0 10px 30px rgba(15,23,42,0.1);
    border: 1px solid var(--border-subtle); display: flex; flex-direction: column;
    overflow: hidden; transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
    transition: transform 0.4s ease;
}
.bento-card:hover .mockup-window { transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(-10px); }
.mockup-header { height: 24px; background: var(--bg-surface); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; padding: 0 10px; gap: 6px; }
.mockup-header span { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; }
.mockup-header span:nth-child(1) { background: #fca5a5; }
.mockup-header span:nth-child(2) { background: #fde047; }
.mockup-header span:nth-child(3) { background: #86efac; }
.mockup-body { display: flex; flex: 1; }
.mockup-sidebar { width: 60px; background: var(--bg-surface); border-right: 1px solid var(--border-subtle); }
.mockup-main { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 10px; }
.mockup-bar { height: 8px; border-radius: 4px; background: #e2e8f0; }
.mockup-chart { flex: 1; background: linear-gradient(180deg, rgba(2,132,199,0.1) 0%, transparent 100%); border-top: 2px solid var(--brand-blue); border-radius: 4px 4px 0 0; margin-top: 10px; }

/* API Node Animation */
.api-nodes { display: flex; align-items: center; justify-content: center; width: 100%; }
.node { padding: 0.5rem 1rem; background: white; border: 1px solid var(--border-strong); border-radius: 8px; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary); box-shadow: 0 4px 12px rgba(15,23,42,0.05); z-index: 2; }
.node-center { background: var(--accent-violet-light); color: var(--accent-violet); border-color: rgba(124, 58, 237, 0.2); }
.node-line { height: 2px; width: 40px; background: var(--border-strong); position: relative; z-index: 1; }
.node-line::after {
    content: ""; position: absolute; top: -3px; left: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--accent-violet);
    animation: flow 2s infinite linear;
}
@keyframes flow {
    0% { left: 0; opacity: 1; }
    100% { left: 100%; opacity: 0; }
}

/* Adjust Navbar colors when scrolling (requires a JS tweak ideally, but we can make it adapt via backdrop filter) */
/* Update navbar to look good over dark */
.navbar {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
.nav-links a { color: #ffffff; }
.nav-links a:hover { color: var(--brand-blue-light); }
.hamburger span { background: #ffffff; }

/* To make navbar switch to light mode when scrolled past hero, we need a small script in app.js. For now, this styling makes it stunningly dark mode native. */
.navbar.scrolled {
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--border-subtle);
}
.navbar.scrolled .nav-links a { color: var(--text-secondary); }
.navbar.scrolled .nav-links a:hover { color: var(--text-primary); }
.navbar.scrolled .hamburger span { background: var(--text-primary); }
.navbar.scrolled .logo img { filter: invert(0); }
''')

print("Appended styling to styles.css")
