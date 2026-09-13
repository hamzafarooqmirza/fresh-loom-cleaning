export type CookiePreferences = {
  analytics: boolean;
  functional: boolean;
};

export type StoredConsent = {
  version: number;
  decidedAt: string;
  preferences: CookiePreferences;
};

const STORAGE_KEY = "freshloom-cookie-consent";

// Bump this if the categories or their meaning change materially, so
// visitors are asked again under the new terms rather than silently
// carrying over a decision made under an old version of this policy.
export const CONSENT_VERSION = 1;

export const CONSENT_CHANGED_EVENT = "freshloom:cookie-consent-changed";
export const OPEN_COOKIE_SETTINGS_EVENT = "freshloom:open-cookie-settings";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getStoredConsent(): StoredConsent | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasConsentDecision(): boolean {
  return getStoredConsent() !== null;
}

export function saveConsent(preferences: CookiePreferences) {
  if (!isBrowser()) return;
  const record: StoredConsent = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    preferences,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: record }));
}

export function openCookieSettings() {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

// For use with React's useSyncExternalStore, so components reading
// consent state stay correctly synced with localStorage (and with each
// other) without the anti-pattern of calling setState from inside an
// effect body.
export function subscribeToConsentChanges(callback: () => void) {
  if (!isBrowser()) return () => {};

  // The browser's "storage" event fires in *other* tabs/windows on the
  // same origin (never the tab that made the change), which is how a
  // consent decision made in one tab reaches an already-open tab. Since
  // that other tab may already have GTM running or a map loaded based on
  // the old preferences, and there's no way to undo those once active, a
  // reload is the only way to guarantee it actually reflects the change.
  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY) window.location.reload();
  }

  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

export function getAnalyticsAllowed(): boolean {
  return Boolean(getStoredConsent()?.preferences.analytics);
}

export function getFunctionalAllowed(): boolean {
  return Boolean(getStoredConsent()?.preferences.functional);
}

// Nothing is allowed to run before a consent decision exists, so both
// the server-rendered markup and the client's first paint (before
// localStorage can be read) agree that optional features are off.
export function getOptionalCookiesServerSnapshot() {
  return false;
}
