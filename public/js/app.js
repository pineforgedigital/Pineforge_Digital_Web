async function submitForm(event) {
    console.log('submitForm called');
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
        company: form.company.value,
        service: form.service.value,
        message: form.message.value
    };

    // Client-side validation for custom select
    if (!formData.service) {
        statusText.style.color = '#ef4444';
        statusText.innerText = 'Please select a service.';
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
        return;
    }

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
            // Show success modal
            document.getElementById('successModal').classList.add('active');

            // Clear status text just in case
            statusText.innerText = '';

            form.reset();
            // Reset custom select UI
            document.getElementById('selectTriggerText').innerText = 'Select a service...';
            document.getElementById('selectTriggerText').style.color = '';
            document.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
            document.getElementById('service').value = '';
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
    const container = document.getElementById('portfolio-container');
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
            <a href="/portfolio-detail?id=${project.id}" class="card" style="display: block; text-decoration: none;">
                <span class="status-badge">${project.status}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </a>
        `).join('');

    } catch (error) {
        console.error('Failed to load projects:', error);
        container.innerHTML = `<p>Unable to load portfolio: ${error.message}</p>`;
    }
}

// Project Detail Page Logic
async function loadProjectDetail() {
    const content = document.getElementById('portfolio-detail-content');
    if (!content) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        content.innerHTML = '<p>Portfolio item not found.</p>';
        return;
    }

    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('Failed to load portfolio data');

        const projects = await response.json();
        const project = projects.find(p => p.id === projectId);

        if (!project) {
            content.innerHTML = '<p>Portfolio item not found.</p>';
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
        content.innerHTML = '<p>Error loading portfolio details.</p>';
    }
}

// Custom Select Logic
function initCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    if (!customSelect) return;

    const trigger = customSelect.querySelector('.select-trigger');
    const options = customSelect.querySelectorAll('.custom-option');
    const triggerText = document.getElementById('selectTriggerText');
    const hiddenInput = document.getElementById('service');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing immediately
        customSelect.classList.toggle('open');
    });

    // Select option
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.innerText;

            // Update UI
            triggerText.innerText = text;
            triggerText.style.color = 'white'; // Make selected text white

            // Update hidden input
            hiddenInput.value = value;

            // Close dropdown
            customSelect.classList.remove('open');

            // Remove selected class from all and add to current
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });
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

    console.log('App initialized');

    initBackToTop();
    initMobileMenu();
    initScrollReveal();
    initCustomSelect();
    initMobileTooltips();

    // Bind Form Submit manually
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log('Contact form found, binding listener');
        contactForm.addEventListener('submit', submitForm);
    }
    // Bind Modal Close Logic
    const closeBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('successModal');

    if (closeBtn && modalOverlay) {
        // Close on button click
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        // Close on click outside (overlay click)
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
}

// Mobile Tech Stack Tooltips (JS Solution)
function initMobileTooltips() {
    if (window.innerWidth > 768) return; // Only needed on mobile

    const techItems = document.querySelectorAll('.tech-item');

    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.mobile-tooltip-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-tooltip-overlay';
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            // Clear content after animation
            setTimeout(() => {
                overlay.innerHTML = '';
            }, 300);
        });
    }

    techItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent default behavior if needed
            e.preventDefault();
            e.stopPropagation();

            const tooltip = item.querySelector('.tech-tooltip');
            if (!tooltip) return;

            // Clone content
            const title = tooltip.querySelector('.tooltip-title') ? tooltip.querySelector('.tooltip-title').innerText : '';
            // Get text content excluding title span
            let text = '';
            tooltip.childNodes.forEach(node => {
                if (node.nodeType === 3) text += node.nodeValue.trim() + ' ';
            });

            // Set overlay content
            overlay.innerHTML = `
            <div class="mobile-tooltip-content">
                <h4>${title}</h4>
                <p>${text}</p>
                <span class="close-hint">Tap outside to close</span>
            </div>
        `;

            // Timeout to allow DOM update before class add for transition
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
        });
    });
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
