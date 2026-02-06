async function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusText = document.getElementById('formStatus');

    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    statusText.innerText = '';

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            statusText.style.color = 'var(--accent-color)';
            statusText.innerText = 'Message sent successfully! We will get back to you soon.';
            form.reset();
        } else {
            statusText.style.color = '#ef4444'; // Red-ish for error
            statusText.innerText = result.error || 'Failed to send message.';
        }
    } catch (error) {
        console.error('Error:', error);
        statusText.style.color = '#ef4444';
        statusText.innerText = 'An error occurred. Please try again later.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
    }
}

// Project Loading Logic
async function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return; // Not on a page with projects

    const isHome = container.getAttribute('data-page') === 'home';

    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();

        // If on home page, only show first 2
        const projectsToShow = isHome ? projects.slice(0, 2) : projects;

        if (projectsToShow.length === 0) {
            container.innerHTML = '<p>No projects found.</p>';
            return;
        }

        container.innerHTML = projectsToShow.map(project => `
            <a href="project-detail?id=${project.id}" class="card" style="display: block; text-decoration: none;">
                <span class="status-badge">${project.status}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </a>
        `).join('');

    } catch (error) {
        console.error('Failed to load projects:', error);
        container.innerHTML = `<p>Unable to load projects: ${error.message}</p>`;
    }
}

// Project Detail Page Logic
async function loadProjectDetail() {
    const content = document.getElementById('project-detail-content');
    if (!content) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        content.innerHTML = '<p>Project not found.</p>';
        return;
    }

    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('Failed to load project data');

        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);

        if (!project) {
            content.innerHTML = '<p>Project not found.</p>';
            return;
        }

        // Clone Template
        const template = document.getElementById('detail-template');
        const clone = template.content.cloneNode(true);

        // Populate Data
        clone.getElementById('detail-title').innerText = project.title;
        clone.getElementById('detail-desc').innerText = project.description;
        clone.getElementById('detail-status').innerText = project.status;


        // Populate Tech Stack
        const stackContainer = clone.getElementById('detail-stack');
        if (project.techStack) {
            stackContainer.innerHTML = project.techStack.map(tech =>
                `<span class="tech-item">${tech}</span>`
            ).join('');
        }

        // Populate Timeline
        const timelineContainer = clone.getElementById('detail-timeline');
        if (project.timeline) {
            timelineContainer.innerHTML = project.timeline.map(item => `
                <div class="log-entry">
                    <span class="log-date">${item.date}</span>
                    <h4>${item.event}</h4>
                </div>
            `).join('');
        }

        content.innerHTML = '';
        content.appendChild(clone);
        document.title = `${project.title} | Pineforge Digital`;

    } catch (error) {
        console.error('Error loading detail:', error);
        content.innerHTML = '<p>Error loading project details.</p>';
    }
}

// Engineering Log Logic (About Page)
async function loadEngineeringLog() {
    const container = document.getElementById('engineering-log-container');
    if (!container) return;

    try {
        const response = await fetch('/data/updates.json');
        const updates = await response.json();

        container.innerHTML = updates.map(update => `
            <div class="log-entry">
                <span class="log-date">${update.date}</span>
                <h4>${update.title}</h4>
                <p>${update.text}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading updates:', error);
        container.innerHTML = '<p>Unable to load updates.</p>';
    }
}

// Back to Top Logic
function initBackToTop() {
    const btn = document.createElement('div');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}


// Mobile Menu Logic
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        // Toggle menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from firing immediately
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickInsideHamburger = hamburger.contains(e.target);

            if (!isClickInsideMenu && !isClickInsideHamburger && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            }
        });
    }
}

// Initialize
async function init() {
    // Wait for content to load before enabling scroll observer
    await Promise.all([
        loadProjects(),
        loadProjectDetail(),
        loadEngineeringLog()
    ]);

    initBackToTop();
    initMobileMenu();
    initScrollReveal();
}

// Scroll Reveal Logic
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before bottom
    });

    reveals.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
