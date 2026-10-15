/**
 * Green Nova — Admin Auth (client-side)
 * -------------------------------------
 * Lightweight session management for the admin portal.
 *
 * NOTE: This is a frontend-only implementation. The credentials are checked
 * in the browser and the session flag is stored in sessionStorage. For a
 * production deployment this MUST be replaced with a real backend auth flow
 * (server-side session / JWT) since client-side checks can be bypassed.
 */

export const ADMIN_CREDENTIALS = {
  email: import.meta.env.VITE_ADMIN_EMAIL || '',
  password: import.meta.env.VITE_ADMIN_PASSWORD || '',
} as const;

const SESSION_KEY = 'green_nova_admin_session';

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}

export function isAuthenticated(): boolean {
  if (!isBrowser()) return false;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export function login(email: string, password: string): { ok: boolean; error?: string } {
  const normalizedEmail = (email || '').trim().toLowerCase();
  const normalizedPassword = password || '';

  if (!normalizedEmail || !normalizedPassword) {
    return { ok: false, error: 'Please enter your email and password.' };
  }

  if (
    normalizedEmail === ADMIN_CREDENTIALS.email.toLowerCase() &&
    normalizedPassword === ADMIN_CREDENTIALS.password
  ) {
    if (isBrowser()) {
      window.sessionStorage.setItem(SESSION_KEY, 'true');
    }
    return { ok: true };
  }

  return { ok: false, error: 'Invalid email or password. Please try again.' };
}

export function logout(): void {
  if (isBrowser()) {
    window.sessionStorage.removeItem(SESSION_KEY);
  }
}
