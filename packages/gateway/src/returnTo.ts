/** Where sign-in and sign-out land when no valid `returnTo` is given. */
export const DEFAULT_RETURN_TO = "/";

const MAX_RETURN_TO_LENGTH = 2048;

/**
 * Accepts only a same-origin relative path ("/applications?tab=open#x") and returns its
 * normalised form; anything else returns `DEFAULT_RETURN_TO`. Rejected: absolute URLs,
 * protocol-relative ("//evil"), backslash tricks ("/\evil"), control characters, encoded
 * slashes that browsers might reinterpret, and the gateway's own `/auth/` routes (no loops).
 */
export function safeReturnTo(value: string | null | undefined, origin: string): string {
  if (!value || value.length > MAX_RETURN_TO_LENGTH) return DEFAULT_RETURN_TO;
  if (!value.startsWith("/") || value.startsWith("//")) return DEFAULT_RETURN_TO;
  // eslint-disable-next-line no-control-regex
  if (/[\\\u0000-\u001f\u007f]/.test(value)) return DEFAULT_RETURN_TO;
  if (/%(2f|5c)/i.test(value.split(/[?#]/, 1)[0] ?? "")) return DEFAULT_RETURN_TO;

  let resolved: URL;
  try {
    resolved = new URL(value, origin);
  } catch {
    return DEFAULT_RETURN_TO;
  }
  if (resolved.origin !== new URL(origin).origin) return DEFAULT_RETURN_TO;
  if (resolved.pathname === "/auth" || resolved.pathname.startsWith("/auth/")) {
    return DEFAULT_RETURN_TO;
  }
  return `${resolved.pathname}${resolved.search}${resolved.hash}`;
}
