"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="cookie-banner" className="visible">
      <div className="cookie-content">
        <p>
          We use essential cookies to provide our services and ensure security.
          See our{" "}
          <Link
            href="/privacy"
            style={{
              color: "#38bdf8",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="cookie-buttons">
          <button
            id="accept-cookies"
            className="btn btn-primary btn-sm"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            id="decline-cookies"
            className="btn btn-secondary btn-sm"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
