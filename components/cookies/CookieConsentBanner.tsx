"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import {
  CookiePreferences,
  OPEN_COOKIE_SETTINGS_EVENT,
  getStoredConsent,
  hasConsentDecision,
  saveConsent,
  subscribeToConsentChanges,
} from "@/lib/cookieConsent";

// No decision has been recorded yet, so there's nothing to read from
// localStorage during server rendering. Treating that as "a decision
// exists" keeps the server-rendered markup free of the banner; the
// real client-side value (from localStorage) takes over immediately
// after hydration via getSnapshot, without a mismatch warning.
function getHasDecisionServerSnapshot() {
  return true;
}

const DEFAULT_DRAFT: CookiePreferences = { analytics: false, functional: false };

type Category = {
  key: keyof CookiePreferences;
  title: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    key: "analytics",
    title: "Analytics",
    description:
      "Allows Google Tag Manager to run on this site, which may load analytics tools to help us understand how visitors use it. No such scripts run unless this is switched on.",
  },
  {
    key: "functional",
    title: "Functional (Maps)",
    description:
      "Loads the embedded Google Map showing our location on the Home, About Us and Contact Us pages. Google may set its own cookies when the map loads.",
  },
];

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-navy/20"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-[4px]"
        }`}
      />
    </button>
  );
}

export default function CookieConsentBanner() {
  const hasDecision = useSyncExternalStore(
    subscribeToConsentChanges,
    hasConsentDecision,
    getHasDecisionServerSnapshot
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<CookiePreferences>(DEFAULT_DRAFT);
  const bannerVisible = !hasDecision;

  useEffect(() => {
    function openSettings() {
      const stored = getStoredConsent();
      setDraft(stored?.preferences ?? DEFAULT_DRAFT);
      setSettingsOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  // Once a script such as Google Tag Manager has actually loaded and run,
  // removing it from the React tree doesn't undo what it already did in
  // the browser (e.g. its own dynamically-inserted script, or cookies it
  // already set) for the rest of that page's lifetime. So if a decision
  // already existed (meaning something may already be active) and the
  // visitor is now changing it, reload the page to guarantee a clean
  // state that matches the new choice. A brand-new, first-time decision
  // needs no reload, since nothing has loaded yet either way.
  function applyConsent(preferences: CookiePreferences) {
    const hadPriorDecision = hasConsentDecision();
    saveConsent(preferences);
    setSettingsOpen(false);
    if (hadPriorDecision) {
      window.location.reload();
    }
  }

  function acceptAll() {
    applyConsent({ analytics: true, functional: true });
  }

  function rejectAll() {
    applyConsent({ analytics: false, functional: false });
  }

  function openDetailedSettings() {
    const stored = getStoredConsent();
    setDraft(stored?.preferences ?? DEFAULT_DRAFT);
    setSettingsOpen(true);
  }

  function savePreferences() {
    applyConsent(draft);
  }

  return (
    <>
      <AnimatePresence>
        {bannerVisible && !settingsOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
          >
            <div className="container-page">
              <div className="mx-auto max-w-4xl rounded-2xl bg-navy-dark text-white shadow-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex gap-3 sm:flex-1">
                  <Cookie size={22} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80">
                    We use cookies to run this site and, with your permission, to understand how
                    it&apos;s used and to show our location on a map. You can accept all cookies,
                    reject non-essential ones, or choose your own settings. See our{" "}
                    <Link href="/cookies-policy" className="text-accent underline hover:text-white">
                      Cookie Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={openDetailedSettings}
                    className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
                  >
                    Cookie Settings
                  </button>
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
                  >
                    Reject Non-Essential
                  </button>
                  <button type="button" onClick={acceptAll} className="btn-accent">
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-navy-dark/60 p-0 sm:p-6"
            onClick={() => setSettingsOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Cookie settings"
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8">
                <h2 className="text-xl font-extrabold text-navy-dark">Cookie Settings</h2>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setSettingsOpen(false)}
                  className="text-slate-400 hover:text-navy-dark transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="px-6 sm:px-8 pt-3 pb-2">
                <p className="text-sm text-slate-600">
                  Choose which optional cookies you&apos;re happy for us to use. Strictly
                  necessary cookies keep the site working and can&apos;t be switched off. See our{" "}
                  <Link href="/cookies-policy" className="text-accent-dark font-semibold hover:underline">
                    Cookie Policy
                  </Link>{" "}
                  for full details.
                </p>
              </div>

              <div className="px-6 sm:px-8 py-4 space-y-4">
                <div className="flex items-start justify-between gap-4 rounded-xl border border-black/5 p-4">
                  <div>
                    <p className="font-bold text-navy-dark text-sm mb-1">Strictly Necessary</p>
                    <p className="text-xs text-slate-500">
                      Required to remember your cookie choice. Always active and cannot be
                      switched off.
                    </p>
                  </div>
                  <Toggle checked disabled label="Strictly Necessary cookies (always active)" />
                </div>

                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.key}
                    className="flex items-start justify-between gap-4 rounded-xl border border-black/5 p-4"
                  >
                    <div>
                      <p className="font-bold text-navy-dark text-sm mb-1">{cat.title}</p>
                      <p className="text-xs text-slate-500">{cat.description}</p>
                    </div>
                    <Toggle
                      checked={draft[cat.key]}
                      onChange={(v) => setDraft((prev) => ({ ...prev, [cat.key]: v }))}
                      label={cat.title}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 px-6 sm:px-8 py-6">
                <button type="button" onClick={rejectAll} className="btn-navy-outline">
                  Reject Non-Essential
                </button>
                <button type="button" onClick={savePreferences} className="btn-navy">
                  Save Preferences
                </button>
                <button type="button" onClick={acceptAll} className="btn-accent">
                  Accept All
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
