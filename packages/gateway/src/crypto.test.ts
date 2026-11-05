import {
  base64Decode,
  base64UrlEncode,
  codeChallengeS256,
  createCodeVerifier,
  isValidCookieKey,
  openSealed,
  seal,
  timingSafeEqual,
} from "./crypto";
import { KEY_A, KEY_B, NOW, key } from "./test/harness";

describe("PKCE", () => {
  it("matches the RFC 7636 Appendix B example", async () => {
    expect(await codeChallengeS256("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk")).toBe(
      "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    );
  });

  it("creates 43-character base64url verifiers that differ every time", () => {
    const a = createCodeVerifier();
    const b = createCodeVerifier();
    expect(a).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(a).not.toBe(b);
  });
});

describe("base64", () => {
  it("round-trips bytes through base64url", () => {
    const bytes = new Uint8Array([0, 251, 255, 62, 63, 128]);
    expect(base64Decode(base64UrlEncode(bytes))).toEqual(bytes);
  });

  it("rejects invalid input", () => {
    expect(() => base64Decode("not base64!")).toThrow();
  });

  it("validates cookie keys as exactly 32 bytes", () => {
    expect(isValidCookieKey(KEY_A)).toBe(true);
    expect(isValidCookieKey(btoa("short"))).toBe(false);
    expect(isValidCookieKey("%%%")).toBe(false);
    expect(isValidCookieKey(undefined)).toBe(false);
  });
});

describe("timingSafeEqual", () => {
  it("compares strings", () => {
    expect(timingSafeEqual("abc", "abc")).toBe(true);
    expect(timingSafeEqual("abc", "abd")).toBe(false);
    expect(timingSafeEqual("abc", "abcd")).toBe(false);
  });
});

describe("sealed cookies", () => {
  const exp = NOW / 1000 + 600;
  const purpose = "__Host-hs_session";

  it("round-trips a payload", async () => {
    const sealed = await seal({ t: "token", i: "id" }, { key: KEY_A, purpose, expiresAt: exp });
    expect(sealed).toMatch(/^v1\.[A-Za-z0-9_-]+$/);
    expect(sealed).not.toContain("token");
    const opened = await openSealed<{ t: string; i: string }>(sealed, {
      keys: [KEY_A],
      purpose,
      now: NOW,
    });
    expect(opened).toEqual({ payload: { t: "token", i: "id", exp }, rotated: false });
  });

  it("uses a fresh IV each time", async () => {
    const a = await seal({ t: "x" }, { key: KEY_A, purpose, expiresAt: exp });
    const b = await seal({ t: "x" }, { key: KEY_A, purpose, expiresAt: exp });
    expect(a).not.toBe(b);
  });

  it("detects tampering with any byte", async () => {
    const sealed = await seal({ t: "token" }, { key: KEY_A, purpose, expiresAt: exp });
    const bytes = base64Decode(sealed.slice(3));
    for (const index of [0, 11, 12, bytes.length - 1]) {
      const copy = bytes.slice();
      copy[index] = (copy[index] as number) ^ 1;
      const tampered = `v1.${base64UrlEncode(copy)}`;
      expect(await openSealed(tampered, { keys: [KEY_A], purpose, now: NOW })).toBeNull();
    }
  });

  it("rejects malformed values", async () => {
    for (const value of ["", "v1.", "v2.abc", "v1.abc.def", "v1.%%%", "v1.AAAA"]) {
      expect(await openSealed(value, { keys: [KEY_A], purpose, now: NOW })).toBeNull();
    }
  });

  it("binds the purpose: a value sealed for one cookie does not open as another", async () => {
    const sealed = await seal(
      { t: "token" },
      { key: KEY_A, purpose: "__Host-hs_oidc", expiresAt: exp },
    );
    expect(await openSealed(sealed, { keys: [KEY_A], purpose, now: NOW })).toBeNull();
  });

  it("enforces the embedded expiry", async () => {
    const sealed = await seal({ t: "token" }, { key: KEY_A, purpose, expiresAt: exp });
    expect(await openSealed(sealed, { keys: [KEY_A], purpose, now: exp * 1000 })).toBeNull();
    expect(
      await openSealed(sealed, { keys: [KEY_A], purpose, now: exp * 1000 - 1 }),
    ).not.toBeNull();
  });

  it("rejects an unknown key", async () => {
    const sealed = await seal({ t: "token" }, { key: KEY_A, purpose, expiresAt: exp });
    expect(await openSealed(sealed, { keys: [key(9)], purpose, now: NOW })).toBeNull();
  });

  it("supports rotation: the previous key still opens, and reports rotated", async () => {
    const sealedWithOld = await seal({ t: "token" }, { key: KEY_A, purpose, expiresAt: exp });
    const opened = await openSealed(sealedWithOld, { keys: [KEY_B, KEY_A], purpose, now: NOW });
    expect(opened?.rotated).toBe(true);
    const sealedWithNew = await seal({ t: "token" }, { key: KEY_B, purpose, expiresAt: exp });
    expect(
      (await openSealed(sealedWithNew, { keys: [KEY_B, KEY_A], purpose, now: NOW }))?.rotated,
    ).toBe(false);
  });
});
