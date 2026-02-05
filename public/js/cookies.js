document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.createElement("div");
    cookieBanner.id = "cookie-banner";
    cookieBanner.innerHTML = `
        <div class="cookie-content">
            <p>We use cookies to improve your experience and analyze technical performance. 
            See our <a href="privacy.html">Privacy Policy</a>.</p>
            <div class="cookie-buttons">
                <button id="accept-cookies" class="btn btn-primary btn-sm">Accept</button>
                <button id="decline-cookies" class="btn btn-secondary btn-sm">Decline</button>
            </div>
        </div>
    `;
    document.body.appendChild(cookieBanner);

    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
        // Show banner with a slight delay
        setTimeout(() => {
            cookieBanner.classList.add("visible");
        }, 1000);
    } else if (consent === "accepted") {
        setVisitorCookie();
    }

    // Handle clicks
    document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookie_consent", "accepted");
        setVisitorCookie();
        hideBanner();
    });

    document.getElementById("decline-cookies").addEventListener("click", function () {
        localStorage.setItem("cookie_consent", "declined");
        hideBanner();
    });

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
