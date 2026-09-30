import os
import re

html_path = 'public/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix SVG vertical centering by updating the text element attributes
content = content.replace('<text x="18" y="21.5" class="percentage">42</text>', '<text x="18" y="18" dominant-baseline="middle" class="percentage count-up" data-target="42">0</text>')
content = content.replace('<text x="18" y="21.5" class="percentage">100</text>', '<text x="18" y="18" dominant-baseline="middle" class="percentage count-up" data-target="100">0</text>')

# Add the JS counting animation
js_script = """
        <!-- Performance Counter Script -->
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Trigger CSS animation
                            entry.target.classList.add('animate-play');
                            
                            // Trigger JS counting animation
                            const counters = entry.target.querySelectorAll('.count-up');
                            counters.forEach(counter => {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000; // 2 seconds
                                const increment = target / (duration / 16); // 60fps
                                let current = 0;
                                
                                const updateCounter = () => {
                                    current += increment;
                                    if (current < target) {
                                        counter.textContent = Math.ceil(current);
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.textContent = target;
                                    }
                                };
                                updateCounter();
                            });
                            // Unobserve once triggered so it doesn't run every scroll up/down
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                const perfSection = document.querySelector('.performance-metrics');
                if (perfSection) observer.observe(perfSection);
            });
        </script>
"""

if 'Performance Counter Script' not in content:
    content = content.replace('<!-- Dark CTA -->', js_script + '\n        <!-- Dark CTA -->')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

css_path = 'public/css/styles.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Update CSS to wait for the .animate-play class instead of hover
css_content = css_content.replace('.performance-metrics:hover .circle { animation-play-state: running; }', '.performance-metrics.animate-play .circle { animation-play-state: running; }')

# Make the numbers slightly larger and properly centered
css_content = css_content.replace('font-size: 0.6em;', 'font-size: 0.55em;')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Added counting JS and fixed SVG alignment.")
