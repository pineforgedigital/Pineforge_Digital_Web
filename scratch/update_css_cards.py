import os

file_path = 'public/css/styles.css'
with open(file_path, 'a', encoding='utf-8') as f:
    f.write('''

/* Graphic Bento Vertical (For tall, single-column cards) */
.bento-graphic-vertical {
    display: flex !important; flex-direction: column; justify-content: space-between;
}
.bento-visual-vertical {
    flex: 1; display: flex; align-items: center; justify-content: center;
    margin-top: 2rem; position: relative; min-height: 140px;
}

/* Database Stack Animation */
.db-stack {
    position: relative; width: 120px; height: 120px;
    perspective: 1000px; transform-style: preserve-3d;
}
.db-layer {
    position: absolute; width: 100%; height: 40px;
    background: linear-gradient(135deg, var(--bg-surface) 0%, #ffffff 100%);
    border: 1px solid var(--border-strong); border-radius: 50% 50% 50% 50% / 30% 30% 30% 30%;
    box-shadow: 0 10px 20px rgba(15,23,42,0.05), inset 0 -4px 8px rgba(15,23,42,0.02);
    transform: rotateX(60deg) rotateZ(-45deg);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.layer-1 { bottom: 0; z-index: 1; }
.layer-2 { bottom: 20px; z-index: 2; }
.layer-3 { bottom: 40px; z-index: 3; }
.db-glow {
    position: absolute; width: 80px; height: 80px;
    background: radial-gradient(circle, rgba(5, 150, 105, 0.4) 0%, transparent 70%);
    bottom: 0; left: 50%; transform: translateX(-50%) rotateX(60deg);
    filter: blur(20px); opacity: 0; transition: opacity 0.5s ease;
}
.bento-card:hover .db-layer { transform: rotateX(60deg) rotateZ(-45deg) translateZ(20px); }
.bento-card:hover .layer-1 { transform: rotateX(60deg) rotateZ(-45deg) translateZ(10px); }
.bento-card:hover .layer-2 { transform: rotateX(60deg) rotateZ(-45deg) translateZ(30px); }
.bento-card:hover .layer-3 { transform: rotateX(60deg) rotateZ(-45deg) translateZ(50px); border-color: var(--accent-emerald); }
.bento-card:hover .db-glow { opacity: 1; }

/* Automation Pipeline Animation */
.automation-pipeline {
    display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;
}
.task-box {
    width: 48px; height: 48px; border-radius: 12px;
    background: var(--bg-surface); border: 2px dashed var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease; position: relative;
}
.arrow { width: 24px; height: 24px; opacity: 0.5; }
.task-box.processed { border-style: solid; border-color: rgba(217, 119, 6, 0.4); background: var(--accent-amber-light); }
.task-box.complete { border-style: solid; border-color: var(--accent-amber); background: var(--accent-amber); }
.task-box.complete svg { width: 24px; height: 24px; opacity: 0; transform: scale(0.5); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }

/* The actual animation sequence triggered on hover */
.bento-card:hover .task-box.processed { animation: processTask 1s forwards 0.2s; }
.bento-card:hover .task-box.complete svg { opacity: 1; transform: scale(1); transition-delay: 1.2s; }
.bento-card:hover .arrow { animation: flashArrow 1.5s infinite; }
.bento-card:hover .arrow:nth-of-type(2) { animation-delay: 0.5s; }

@keyframes processTask {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); box-shadow: 0 0 15px rgba(217, 119, 6, 0.4); }
    100% { transform: scale(1); }
}
@keyframes flashArrow {
    0%, 100% { opacity: 0.3; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(5px); stroke: var(--accent-amber); }
}

''')

print("Appended CSS for cards 2 and 4")
