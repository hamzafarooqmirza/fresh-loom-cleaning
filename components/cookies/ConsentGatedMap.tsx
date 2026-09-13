"use client";

import { useSyncExternalStore } from "react";
import { MapPin } from "lucide-react";
import {
  getFunctionalAllowed,
  getOptionalCookiesServerSnapshot,
  getStoredConsent,
  saveConsent,
  subscribeToConsentChanges,
} from "@/lib/cookieConsent";
import { siteInfo } from "@/lib/data";

export default function ConsentGatedMap({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const allowed = useSyncExternalStore(
    subscribeToConsentChanges,
    getFunctionalAllowed,
    getOptionalCookiesServerSnapshot
  );

  function enableMap() {
    const current = getStoredConsent();
    saveConsent({
      analytics: current?.preferences.analytics ?? false,
      functional: true,
    });
  }

  if (allowed) {
    return (
      <iframe
        src={siteInfo.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={`w-full border-0 ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full bg-light flex flex-col items-center justify-center text-center gap-3 p-6 ${className}`}
    >
      <MapPin className="text-navy" size={26} />
      <p className="text-sm text-slate-600 max-w-xs">
        The map is only loaded with your consent, since it sets cookies from Google.
      </p>
      <p className="text-sm font-semibold text-navy-dark">{siteInfo.address}</p>
      <button type="button" onClick={enableMap} className="btn-navy-outline">
        Show Map
      </button>
    </div>
  );
}
