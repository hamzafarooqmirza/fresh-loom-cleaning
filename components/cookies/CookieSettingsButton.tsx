"use client";

import { openCookieSettings } from "@/lib/cookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="hover:text-accent transition-colors"
    >
      Cookie Settings
    </button>
  );
}
