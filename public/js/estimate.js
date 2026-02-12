document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('estimateForm');
    const resultArea = document.getElementById('resultArea');
    const priceDisplay = document.getElementById('priceDisplay');
    const inputs = form.querySelectorAll('input:not([type="text"]):not([type="email"])');

    // Tooltip Logic (Click to Toggle)
    const infoIcons = document.querySelectorAll('.info-icon');

    // Toggle tooltip on click
    infoIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent closing immediately
            e.preventDefault();  // Prevent focus weirdness

            // Close others
            infoIcons.forEach(other => {
                if (other !== icon) other.classList.remove('active');
            });

            // Toggle current
            icon.classList.toggle('active');
        });
    });

    // Close when clicking anywhere else
    document.addEventListener('click', () => {
        infoIcons.forEach(icon => icon.classList.remove('active'));
    });

    // Base Calculation Configuration (Hidden Logic)
    const BASE_COST = 2500;

    const TYPE_MULTIPLIERS = {
        'Informational': 1.0,
        'Service-Based': 1.1,
        'Professional Firm': 1.25,
        'Custom Web App': 2.0
    };

    const SCOPE_COSTS = {
        'Core Pages Only': 0,
        'Small Site': 600,
        'Medium Site': 1400,
        'Large Site': 2800
    };

    const DESIGN_COSTS = {
        'Standard': 0,
        'Custom Branding': 1000,
        'Advanced UI': 2000
    };

    const FEATURE_COSTS = {
        'Contact Form': 200,
        'Custom Form Logic': 400,
        'User Accounts': 1000,
        'CMS': 1200,
        'Database': 1500,
        'Integrations': 1000,
        'SEO Fundamentals': 700
    };

    const DEPLOY_COSTS = {
        'Hosting Setup': 300,
        'Maintenance': 0 // Optional / Recurring
    };

    const CONTENT_COSTS = {
        'Ready': 0,
        'Rough Draft': 500,
        'Need Help': 1500,
        'Later': 0
    };

    const TIMELINE_MULTIPLIERS = {
        'Flexible': 1.0,
        'Standard': 1.0,
        'Urgent': 1.25
    };

    function calculateEstimate() {
        let total = BASE_COST;

        // 1. Get Selections
        const type = document.querySelector('input[name="type"]:checked')?.value || 'Informational';
        const scope = document.querySelector('input[name="scope"]:checked')?.value || 'Core Pages Only';
        const design = document.querySelector('input[name="design"]:checked')?.value || 'Standard';
        const content = document.querySelector('input[name="content"]:checked')?.value || 'Ready';
        const timeline = document.querySelector('input[name="timeline"]:checked')?.value || 'Flexible';

        // 2. Add Scope & Design Costs
        total += SCOPE_COSTS[scope] || 0;
        total += DESIGN_COSTS[design] || 0;
        total += CONTENT_COSTS[content] || 0;

        // 3. Add Feature Costs
        form.querySelectorAll('input[name="features"]:checked').forEach(cb => {
            total += FEATURE_COSTS[cb.value] || 0;
        });

        // 4. Add Deployment Costs
        form.querySelectorAll('input[name="deployment"]:checked').forEach(cb => {
            total += DEPLOY_COSTS[cb.value] || 0;
        });

        // 5. Apply Multipliers (Type * Timeline)
        // We compound them to reflect that rushing a complex app is VERY expensive
        const typeMult = TYPE_MULTIPLIERS[type] || 1.0;
        const timeMult = TIMELINE_MULTIPLIERS[timeline] || 1.0;

        total *= typeMult;
        total *= timeMult;

        // 6. Calculate Range (+/- 15%)
        const min = Math.round((total * 0.85) / 100) * 100;
        const max = Math.round((total * 1.15) / 100) * 100;

        return { min, max };
    }

    function updateDisplay() {
        const { min, max } = calculateEstimate();

        // Format Currency
        // Format Currency
        const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

        // VISUAL UPDATE REMOVED - User requested "Custom Review" flow instead of immediate price.
        // if (priceDisplay) priceDisplay.textContent = `${fmt.format(min)} – ${fmt.format(max)}`;

        // Show result area if hidden
        if (resultArea.style.display !== 'block') {
            resultArea.style.display = 'block';
        }
    }

    // Attach Listeners to all inputs for real-time updates
    inputs.forEach(input => {
        input.addEventListener('change', updateDisplay);
    });

    // Initial calculation
    updateDisplay();

    // Handle Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.textContent;

        // Basic Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (!name || !email) {
            alert('Please provide your Name and Email to request a formal quote.');
            return;
        }

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Collect Data
        const formData = {
            name,
            email,
            company: 'Estimate Request',
            service: 'Project Estimate',
            message: `
REQUEST FOR ESTIMATE:
---------------------
Type: ${document.querySelector('input[name="type"]:checked')?.value}
Scope: ${document.querySelector('input[name="scope"]:checked')?.value}
Design: ${document.querySelector('input[name="design"]:checked')?.value}
Features: ${Array.from(form.querySelectorAll('input[name="features"]:checked')).map(cb => cb.value).join(', ')}
Deployment: ${Array.from(form.querySelectorAll('input[name="deployment"]:checked')).map(cb => cb.value).join(', ')}
Content: ${document.querySelector('input[name="content"]:checked')?.value}
Timeline: ${document.querySelector('input[name="timeline"]:checked')?.value}
Business Goal: ${document.querySelector('input[name="goal"]:checked')?.value}

Estimated Range: Custom Review (Public Price Hidden)
            `,
            isEstimate: true,
            selections: {
                type: document.querySelector('input[name="type"]:checked')?.value || 'Informational',
                scope: document.querySelector('input[name="scope"]:checked')?.value || 'Core Pages Only',
                design: document.querySelector('input[name="design"]:checked')?.value || 'Standard',
                features: Array.from(form.querySelectorAll('input[name="features"]:checked')).map(cb => cb.value),
                deployment: Array.from(form.querySelectorAll('input[name="deployment"]:checked')).map(cb => cb.value),
                content: document.querySelector('input[name="content"]:checked')?.value || 'Ready',
                timeline: document.querySelector('input[name="timeline"]:checked')?.value || 'Flexible',
                goal: document.querySelector('input[name="goal"]:checked')?.value || 'Generate Leads'
            }
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                submitBtn.textContent = 'Request Sent';
                submitBtn.classList.add('btn-disabled'); // Optional: add a disabled look if needed, or just rely on disabled attribute
                // Remove generic green overrides to keep Amber theme
                // submitBtn.style.backgroundColor = '#10b981'; 
                // submitBtn.style.borderColor = '#10b981';
                submitBtn.textContent = 'Request Sent!';
                submitBtn.style.backgroundColor = '#10b981'; // Green
                submitBtn.style.borderColor = '#10b981';

                // Show Success Modal
                const modal = document.getElementById('successModal');
                if (modal) {
                    modal.classList.add('active');

                    // Handle Close
                    const closeBtn = document.getElementById('closeModalBtn');
                    if (closeBtn) {
                        closeBtn.onclick = () => window.location.href = '/';
                    }

                    // Close on outside click
                    modal.onclick = (e) => {
                        if (e.target === modal) {
                            window.location.href = '/';
                        }
                    };
                } else {
                    alert('We have received your estimate request. We will review the details and contact you shortly.');
                }
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error('Error:', error);
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.disabled = false;
        }
    });
});
