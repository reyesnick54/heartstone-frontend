// Web Crypto helpers: random values, PKCE (RFC 7636, S256) and AES-256-GCM sealed cookies with key
// rotation. Runs unchanged in Cloudflare Workers and Node 22.

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Decodes standard or URL-safe base64, with or without padding. Throws on invalid input. */
export function base64Decode(value: string): Uint8Array<ArrayBuffer> {
  const normalised = value.trim().replace(/-/g, "+").replace(/_/g, "/");
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(normalised)) throw new Error("invalid base64");
  const padded = normalised + "=".repeat((4 - (normalised.length % 4)) % 4);
  const binary = atob(padded);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

export function randomToken(byteLength = 32): string {
  return base64UrlEncode(crypto.getRandomValues(new Uint8Array(byteLength)));
}

/** PKCE code verifier: 32 random bytes, base64url (43 characters, RFC 7636 §4.1). */
export function createCodeVerifier(): string {
  return randomToken(32);
}

/** PKCE S256 code challenge: base64url(SHA-256(ASCII(verifier))) (RFC 7636 §4.2). */
export async function codeChallengeS256(verifier: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(verifier));
  return base64UrlEncode(new Uint8Array(digest));
}

/** Length-independent-ish comparison for short secrets such as `state`. */
export function timingSafeEqual(a: string, b: string): boolean {
  const ab = encoder.encode(a);
  const bb = encoder.encode(b);
  let diff = ab.length ^ bb.length;
  for (let i = 0; i < Math.max(ab.length, bb.length); i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

const keyCache = new Map<string, Promise<CryptoKey>>();

/** Imports a base64 32-byte key as AES-256-GCM. Throws if it is not exactly 32 bytes. */
export function importCookieKey(base64Key: string): Promise<CryptoKey> {
  let key = keyCache.get(base64Key);
  if (!key) {
    const raw = base64Decode(base64Key);
    if (raw.length !== 32) throw new Error("cookie key must be 32 bytes");
    key = crypto.subtle.importKey("raw", raw.buffer as ArrayBuffer, { name: "AES-GCM" }, false, [
      "encrypt",
      "decrypt",
    ]);
    keyCache.set(base64Key, key);
  }
  return key;
}

/** Returns true when `base64Key` decodes to exactly 32 bytes. */
export function isValidCookieKey(base64Key: string | undefined): base64Key is string {
  if (!base64Key) return false;
  try {
    return base64Decode(base64Key).length === 32;
  } catch {
    return false;
  }
}

const SEAL_VERSION = "v1";
const IV_BYTES = 12;

/**
 * Encrypts `payload` as `v1.<base64url(iv || ciphertext+tag)>`. `purpose` (the cookie name) is
 * bound as additional authenticated data, so a value sealed for one cookie cannot be replayed as
 * another. `exp` (Unix seconds) is stored inside the ciphertext and enforced by `openSealed`,
 * independently of the browser's Max-Age.
 */
export async function seal(
  payload: object,
  options: { key: string; purpose: string; expiresAt: number },
): Promise<string> {
  const key = await importCookieKey(options.key);
  const iv = crypto.getRandomValues(new Uint8Array(IV_BYTES));
  const plaintext = encoder.encode(JSON.stringify({ ...payload, exp: options.expiresAt }));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv, additionalData: encoder.encode(options.purpose) },
    key,
    plaintext,
  );
  const combined = new Uint8Array(IV_BYTES + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), IV_BYTES);
  return `${SEAL_VERSION}.${base64UrlEncode(combined)}`;
}

export interface Opened<T> {
  payload: T;
  /** True when a previous key decrypted it: the caller should re-seal with the current key. */
  rotated: boolean;
}

/**
 * Decrypts a value from `seal`, trying each key in order (current first, then previous).
 * Returns null when the value is malformed, tampered with, sealed for another purpose, sealed
 * with an unknown key, or expired.
 */
export async function openSealed<T extends object>(
  value: string,
  options: { keys: readonly string[]; purpose: string; now: number },
): Promise<Opened<T> | null> {
  const [version, body, extra] = value.split(".");
  if (version !== SEAL_VERSION || !body || extra !== undefined) return null;
  let combined: Uint8Array;
  try {
    combined = base64Decode(body);
  } catch {
    return null;
  }
  if (combined.length <= IV_BYTES + 16) return null;
  const iv = combined.slice(0, IV_BYTES);
  const ciphertext = combined.slice(IV_BYTES);

  for (const [index, keyString] of options.keys.entries()) {
    let plaintext: ArrayBuffer;
    try {
      const key = await importCookieKey(keyString);
      plaintext = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv, additionalData: encoder.encode(options.purpose) },
        key,
        ciphertext,
      );
    } catch {
      continue;
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(decoder.decode(plaintext));
    } catch {
      return null;
    }
    if (parsed === null || typeof parsed !== "object") return null;
    const exp = (parsed as { exp?: unknown }).exp;
    if (typeof exp !== "number" || exp * 1000 <= options.now) return null;
    return { payload: parsed as T, rotated: index > 0 };
  }
  return null;
}
