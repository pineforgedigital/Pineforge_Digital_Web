"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const CONSENT_STORAGE_KEY = "cookie_consent";
export const CONSENT_EVENT_NAME = "pineforge-consent-change";

export default function AnalyticsWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
      setEnabled(consent !== "declined");
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT_NAME, syncConsent);
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, syncConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
