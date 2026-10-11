document.addEventListener("DOMContentLoaded", function () {
    // Check if banner already exists in DOM to prevent duplicate IDs
    let cookieBanner = document.getElementById("cookie-banner");
    
    if (!cookieBanner) {
        cookieBanner = document.createElement("div");
        cookieBanner.id = "cookie-banner";
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p>We use essential cookies to provide our services and ensure security. See our <a href="/privacy" style="color: #38bdf8; text-decoration: underline; font-weight: 500;">Privacy Policy</a>.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="btn btn-primary btn-sm">Accept</button>
                    <button id="decline-cookies" class="btn btn-secondary btn-sm">Decline</button>
                </div>
            </div>
        `;
        document.body.appendChild(cookieBanner);
    }

    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
        // Show banner after page initial paint & LCP have settled
        setTimeout(() => {
            cookieBanner.classList.add("visible");
        }, 2500);
    } else if (consent === "accepted") {
        setVisitorCookie();
    }

    // Handle clicks safely
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookie_consent", "accepted");
            setVisitorCookie();
            hideBanner();
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookie_consent", "declined");
            hideBanner();
        });
    }

    function hideBanner() {
        cookieBanner.classList.remove("visible");
        // Remove from DOM after transition
        setTimeout(() => {
            cookieBanner.remove();
        }, 500);
    }

    function setVisitorCookie() {
        // Simple UUID generator
        if (!getCookie('visitor_id')) {
            const uuid = crypto.randomUUID();
            document.cookie = `visitor_id=${uuid}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
            console.log("Visitor Cookie Set:", uuid);
        }
    }

    function getCookie(name) {
        return document.cookie.split('; ').find(row => row.startsWith(name + '='));
    }
});
