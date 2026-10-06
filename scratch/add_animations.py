import os

# 1. Update app.js
with open('public/js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

new_js = """
// Spotlight and Magnetic Effects
function initPremiumAnimations() {
    // Spotlight Effect for Bento Cards
    document.querySelectorAll('.bento-card').forEach(card => {
        // Add glow element
        if (!card.querySelector('.glow')) {
            const glow = document.createElement('div');
            glow.className = 'glow';
            card.insertBefore(glow, card.firstChild);
        }
        
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Magnetic Buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Pull the button slightly towards cursor
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
            // Wait for transition to finish then clear so hover effects still work
            setTimeout(() => {
                if(!btn.matches(':hover')) {
                    btn.style.transform = '';
                }
            }, 300);
        });
    });
}
"""

if 'initPremiumAnimations' not in app_js:
    # Inject it before init() and call it inside init()
    app_js = app_js.replace('function init() {', new_js + '\nfunction init() {\n    initPremiumAnimations();')
    with open('public/js/app.js', 'w', encoding='utf-8') as f:
        f.write(app_js)
    print("Updated app.js")

# 2. Update styles.css
with open('public/css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_bento = """.bento-card {
    background: var(--bg-base);
    border-radius: 24px;
    padding: 3rem;
    position: relative;
    box-shadow: var(--shadow-card);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
/* Complex inner gradient on hover */
.bento-card::after {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(circle at 100% 0%, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.4s; pointer-events: none;
}
.bento-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-card-hover);
}
.bento-card:hover::after { opacity: 1; }"""

new_bento = """.bento-card {
    background: var(--bg-base);
    border-radius: 24px;
    padding: 3rem;
    position: relative;
    box-shadow: var(--shadow-card);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 1;
}

/* Spotlight Glow border */
.bento-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: radial-gradient(
        800px circle at var(--mouse-x, 0) var(--mouse-y, 0),
        rgba(14, 165, 233, 0.6),
        transparent 40%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
    z-index: 10;
}

.bento-card:hover::before { opacity: 1; }

/* Spotlight Inner Glow */
.bento-card .glow {
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle closest-side, rgba(14, 165, 233, 0.04), transparent);
    transform: translate(-50%, -50%);
    top: var(--mouse-y, 0);
    left: var(--mouse-x, 0);
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
    z-index: -1;
}

.bento-card:hover .glow { opacity: 1; }

.bento-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card-hover);
}"""

if '.bento-card::after' in css:
    css = css.replace(old_bento, new_bento)
    
    # Add transition to buttons for magnetic effect
    css = css.replace('.btn {', '.btn {\n    transition: background-color 0.2s, transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s;\n    will-change: transform;')
    # Need to remove old transition on btn
    css = css.replace('    transition: all 0.2s ease;\n', '')
    
    with open('public/css/styles.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated styles.css")

