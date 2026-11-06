import { OIDC_COOKIE, SESSION_COOKIE } from "./cookies";
import { seal } from "./crypto";
import { SESSION_ABSOLUTE_SECONDS } from "./handler";
import { codeChallengeS256 } from "./crypto";
import {
  APP,
  BACKEND,
  ISSUER,
  KEY_A,
  KEY_B,
  NOW,
  baseEnv,
  cookieValue,
  createHarness,
  json,
  jwt,
  setCookie,
  type Harness,
} from "./test/harness";

const SAME_ORIGIN = { Origin: APP, "Sec-Fetch-Site": "same-origin", "X-HeartStone-CSRF": "1" };

async function sessionCookieFor(
  token = "hs-session-token",
  keyB64 = KEY_A,
  identity = "identity-1",
) {
  return seal(
    { t: token, i: identity },
    { key: keyB64, purpose: SESSION_COOKIE, expiresAt: NOW / 1000 + 3600 },
  );
}

/** Runs /auth/login and returns the authorize URL and the transaction cookie. */
async function startLogin(h: Harness, returnTo?: string) {
  const qs = returnTo === undefined ? "" : `?returnTo=${encodeURIComponent(returnTo)}`;
  const response = await h.send(`/auth/login${qs}`);
  const location = new URL(response.headers.get("Location") as string);
  h.fakes.nonce = location.searchParams.get("nonce") ?? undefined;
  return { response, location, oidc: cookieValue(setCookie(response, OIDC_COOKIE)) };
}

async function completeLogin(h: Harness, returnTo?: string) {
  const { location, oidc } = await startLogin(h, returnTo);
  const state = location.searchParams.get("state") as string;
  return h.send(`/auth/callback?code=auth-code&state=${encodeURIComponent(state)}`, {
    cookies: { [OIDC_COOKIE]: oidc },
  });
}

describe("static assets", () => {
  it("passes non-gateway paths to the asset fetcher untouched", async () => {
    const h = createHarness();
    const response = await h.send("/applications/123");
    expect(await response.text()).toBe("asset");
    expect(h.assets).toHaveBeenCalledTimes(1);
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("serves assets even when the gateway is not configured", async () => {
    const h = createHarness({});
    expect((await h.send("/")).status).toBe(200);
  });
});

describe("configuration", () => {
  it("fails closed with 503 for /api and /auth/session when misconfigured", async () => {
    const h = createHarness(baseEnv({ SESSION_COOKIE_KEY: "short" }));
    const api = await h.send("/api/v1/experience/citizen/me");
    expect(api.status).toBe(503);
    expect(await api.json()).toMatchObject({ code: "GATEWAY_NOT_CONFIGURED" });
    expect((await h.send("/auth/session")).status).toBe(503);
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("redirects sign-in navigations with signin_error=unavailable when misconfigured", async () => {
    const h = createHarness(baseEnv({ OIDC_ISSUER: "http://id.example.test" }));
    const response = await h.send("/auth/login");
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/?signin_error=unavailable");
  });

  it("logs the variable names that are wrong, never their values", async () => {
    const h = createHarness(
      baseEnv({ BACKEND_ORIGIN: "https://api.example.test/api", OIDC_CLIENT_ID: "" }),
    );
    await h.send("/api/v1/x");
    const text = JSON.stringify(h.logs);
    expect(text).toContain("BACKEND_ORIGIN");
    expect(text).toContain("OIDC_CLIENT_ID");
    expect(text).not.toContain(KEY_A);
  });
});

describe("GET /auth/login", () => {
  it("redirects to the discovered authorize endpoint with PKCE S256, state and nonce", async () => {
    const h = createHarness();
    const { response, location, oidc } = await startLogin(h, "/applications");

    expect(response.status).toBe(302);
    expect(`${location.origin}${location.pathname}`).toBe(`${ISSUER}/protocol/openid-connect/auth`);
    const p = location.searchParams;
    expect(p.get("response_type")).toBe("code");
    expect(p.get("client_id")).toBe("heartstone-citizen");
    expect(p.get("redirect_uri")).toBe(`${APP}/auth/callback`);
    expect(p.get("scope")).toBe("openid profile email");
    expect(p.get("code_challenge_method")).toBe("S256");
    expect(p.get("code_challenge")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("state")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("nonce")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("prompt")).toBeNull();

    const line = setCookie(response, OIDC_COOKIE) as string;
    expect(line).toMatch(/HttpOnly/);
    expect(line).toMatch(/Secure/);
    expect(line).toMatch(/SameSite=Lax/);
    expect(line).toMatch(/Path=\//);
    expect(line).toMatch(/Max-Age=600/);
    expect(line).not.toMatch(/Domain=/i);
    // The cookie is encrypted: no state, nonce or verifier in clear text.
    expect(oidc).not.toContain(p.get("state"));
    expect(response.headers.get("Cache-Control")).toBe("no-store");
  });

  it("uses OIDC_REDIRECT_URI when set", async () => {
    const h = createHarness(
      baseEnv({ OIDC_REDIRECT_URI: "https://citizen.gov.example/auth/callback" }),
    );
    const { location } = await startLogin(h);
    expect(location.searchParams.get("redirect_uri")).toBe(
      "https://citizen.gov.example/auth/callback",
    );
  });

  it("caches discovery between requests", async () => {
    const h = createHarness();
    await startLogin(h);
    await startLogin(h);
    const discoveries = h.fakes.calls.filter((c) => c.url.endsWith("openid-configuration"));
    expect(discoveries).toHaveLength(1);
  });

  it("asks for a fresh sign-in on reauth=1 (step-up)", async () => {
    const h = createHarness();
    const response = await h.send("/auth/login?reauth=1");
    const location = new URL(response.headers.get("Location") as string);
    expect(location.searchParams.get("prompt")).toBe("login");
    expect(location.searchParams.get("max_age")).toBe("0");
  });

  it("refuses a discovery document for another issuer", async () => {
    const h = createHarness();
    h.fakes.discovery["issuer"] = "https://evil.example";
    const response = await h.send("/auth/login");
    expect(response.headers.get("Location")).toBe("/?signin_error=unavailable");
  });

  it("refuses an issuer that does not support S256", async () => {
    const h = createHarness();
    h.fakes.discovery["code_challenge_methods_supported"] = ["plain"];
    expect((await h.send("/auth/login")).headers.get("Location")).toBe(
      "/?signin_error=unavailable",
    );
  });

  it("only accepts GET", async () => {
    const h = createHarness();
    expect((await h.send("/auth/login", { method: "POST" })).status).toBe(405);
  });
});

describe("GET /auth/register", () => {
  /** Runs /auth/register and returns the registration URL and the transaction cookie. */
  async function startRegister(h: Harness, returnTo?: string) {
    const qs = returnTo === undefined ? "" : `?returnTo=${encodeURIComponent(returnTo)}`;
    const response = await h.send(`/auth/register${qs}`);
    const location = new URL(response.headers.get("Location") as string);
    h.fakes.nonce = location.searchParams.get("nonce") ?? undefined;
    return { response, location, oidc: cookieValue(setCookie(response, OIDC_COOKIE)) };
  }

  it("redirects Keycloak to its registrations endpoint with PKCE S256, state and nonce", async () => {
    const h = createHarness();
    const { response, location, oidc } = await startRegister(h, "/dashboard");

    expect(response.status).toBe(302);
    expect(`${location.origin}${location.pathname}`).toBe(
      `${ISSUER}/protocol/openid-connect/registrations`,
    );
    const p = location.searchParams;
    expect(p.get("response_type")).toBe("code");
    expect(p.get("client_id")).toBe("heartstone-citizen");
    expect(p.get("redirect_uri")).toBe(`${APP}/auth/callback`);
    expect(p.get("scope")).toBe("openid profile email");
    expect(p.get("code_challenge_method")).toBe("S256");
    expect(p.get("code_challenge")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("state")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("nonce")).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(p.get("prompt")).toBeNull();

    const line = setCookie(response, OIDC_COOKIE) as string;
    expect(line).toMatch(/HttpOnly/);
    expect(line).toMatch(/Secure/);
    expect(line).toMatch(/SameSite=Lax/);
    expect(line).toMatch(/Max-Age=600/);
    expect(oidc).not.toContain(p.get("state"));
    expect(response.headers.get("Cache-Control")).toBe("no-store");
  });

  it("uses prompt=create on the authorize endpoint for a non-Keycloak issuer", async () => {
    const issuer = "https://login.example.test";
    const h = createHarness(baseEnv({ OIDC_ISSUER: issuer }));
    h.fakes.discovery["issuer"] = issuer;
    h.fakes.discovery["authorization_endpoint"] = `${issuer}/authorize`;
    const response = await h.send("/auth/register");
    const location = new URL(response.headers.get("Location") as string);
    expect(`${location.origin}${location.pathname}`).toBe(`${issuer}/authorize`);
    expect(location.searchParams.get("prompt")).toBe("create");
    expect(location.searchParams.get("code_challenge_method")).toBe("S256");
  });

  it("finishes through the normal callback and lands on returnTo", async () => {
    const h = createHarness();
    const { location, oidc } = await startRegister(h, "/dashboard");
    const state = location.searchParams.get("state") as string;
    const response = await h.send(`/auth/callback?code=auth-code&state=${state}`, {
      cookies: { [OIDC_COOKIE]: oidc },
    });
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/dashboard");
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/HttpOnly/);
  });

  it("never returns off-site", async () => {
    const h = createHarness();
    const { location, oidc } = await startRegister(h, "https://evil.example/");
    const state = location.searchParams.get("state") as string;
    const response = await h.send(`/auth/callback?code=auth-code&state=${state}`, {
      cookies: { [OIDC_COOKIE]: oidc },
    });
    expect(response.headers.get("Location")).toBe("/");
  });

  it("ignores reauth (registration is never a step-up)", async () => {
    const h = createHarness();
    const response = await h.send("/auth/register?reauth=1");
    const location = new URL(response.headers.get("Location") as string);
    expect(location.searchParams.get("max_age")).toBeNull();
    expect(location.searchParams.get("prompt")).toBeNull();
  });

  it("reports an unreachable or wrong provider as unavailable", async () => {
    const h = createHarness();
    h.fakes.discovery["issuer"] = "https://evil.example";
    const response = await h.send("/auth/register");
    expect(response.headers.get("Location")).toBe("/?signin_error=unavailable");
  });

  it("redirects with signin_error=unavailable when the gateway is not configured", async () => {
    const h = createHarness(baseEnv({ OIDC_ISSUER: undefined }));
    const response = await h.send("/auth/register");
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/?signin_error=unavailable");
  });

  it("only accepts GET", async () => {
    const h = createHarness();
    expect((await h.send("/auth/register", { method: "POST" })).status).toBe(405);
  });
});

describe("GET /auth/callback", () => {
  it("exchanges the code with the PKCE verifier, opens a backend session and sets the cookie", async () => {
    const h = createHarness();
    const { location, oidc } = await startLogin(h, "/applications?tab=open");
    const challenge = location.searchParams.get("code_challenge");
    const state = location.searchParams.get("state") as string;

    const response = await h.send(`/auth/callback?code=auth-code&state=${state}`, {
      cookies: { [OIDC_COOKIE]: oidc },
    });

    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/applications?tab=open");

    const tokenCall = h.fakes.calls.find((c) => c.url.endsWith("/token"));
    const form = new URLSearchParams(tokenCall?.body);
    expect(form.get("grant_type")).toBe("authorization_code");
    expect(form.get("code")).toBe("auth-code");
    expect(form.get("redirect_uri")).toBe(`${APP}/auth/callback`);
    expect(await codeChallengeS256(form.get("code_verifier") as string)).toBe(challenge);
    expect(tokenCall?.headers.get("Authorization")).toBe(
      `Basic ${btoa("heartstone-citizen:s3cret")}`,
    );
    expect(form.get("client_secret")).toBeNull();

    const login = h.fakes.calls.find((c) => c.url === `${BACKEND}/api/v1/identity/auth/login/oidc`);
    expect(login?.method).toBe("POST");
    expect(JSON.parse(login?.body ?? "")).toEqual({
      accessToken: "idp-access-token",
      providerCode: "keycloak",
    });

    const session = setCookie(response, SESSION_COOKIE) as string;
    expect(session).toMatch(/HttpOnly/);
    expect(session).toMatch(/Secure/);
    expect(session).toMatch(/SameSite=Lax/);
    expect(session).toMatch(/Path=\//);
    expect(session).toMatch(new RegExp(`Max-Age=${SESSION_ABSOLUTE_SECONDS}`));
    expect(session).not.toContain("hs-session-token");
    expect(setCookie(response, OIDC_COOKIE)).toMatch(/Max-Age=0/);

    // Never log tokens or codes.
    const logged = JSON.stringify(h.logs);
    for (const secret of ["hs-session-token", "idp-access-token", "auth-code", "s3cret"]) {
      expect(logged).not.toContain(secret);
    }
  });

  it("then reports the session without exposing the token", async () => {
    const h = createHarness();
    const callback = await completeLogin(h);
    const cookie = cookieValue(setCookie(callback, SESSION_COOKIE));
    const response = await h.send("/auth/session", { cookies: { [SESSION_COOKIE]: cookie } });
    const body = await response.json();
    expect(body).toEqual({
      authenticated: true,
      identityId: "identity-1",
      expiresAt: new Date(NOW + SESSION_ABSOLUTE_SECONDS * 1000).toISOString(),
    });
    expect(JSON.stringify(body)).not.toContain("hs-session-token");
    expect(response.headers.get("Cache-Control")).toBe("no-store");
  });

  it("sends client_id in the form for a public client (no secret)", async () => {
    const h = createHarness(baseEnv({ OIDC_CLIENT_SECRET: undefined }));
    await completeLogin(h);
    const tokenCall = h.fakes.calls.find((c) => c.url.endsWith("/token"));
    expect(new URLSearchParams(tokenCall?.body).get("client_id")).toBe("heartstone-citizen");
    expect(tokenCall?.headers.get("Authorization")).toBeNull();
  });

  it("omits providerCode when OIDC_PROVIDER_CODE is not set", async () => {
    const h = createHarness(baseEnv({ OIDC_PROVIDER_CODE: undefined }));
    await completeLogin(h);
    const login = h.fakes.calls.find((c) => c.url.endsWith("/login/oidc"));
    expect(JSON.parse(login?.body ?? "")).toEqual({ accessToken: "idp-access-token" });
  });

  it("rejects a state that does not match the transaction cookie", async () => {
    const h = createHarness();
    const { oidc } = await startLogin(h);
    const response = await h.send("/auth/callback?code=c&state=forged", {
      cookies: { [OIDC_COOKIE]: oidc },
    });
    expect(response.headers.get("Location")).toBe("/?signin_error=expired");
    expect(setCookie(response, SESSION_COOKIE)).toBeUndefined();
    expect(h.fakes.calls.some((c) => c.url.endsWith("/token"))).toBe(false);
  });

  it("rejects a callback without the transaction cookie (login CSRF)", async () => {
    const h = createHarness();
    const { location } = await startLogin(h);
    const response = await h.send(
      `/auth/callback?code=c&state=${location.searchParams.get("state")}`,
    );
    expect(response.headers.get("Location")).toBe("/?signin_error=expired");
  });

  it("rejects an expired transaction (over 10 minutes)", async () => {
    const h = createHarness();
    const { location, oidc } = await startLogin(h);
    h.now.value = NOW + 601_000;
    const response = await h.send(
      `/auth/callback?code=c&state=${location.searchParams.get("state")}`,
      { cookies: { [OIDC_COOKIE]: oidc } },
    );
    expect(response.headers.get("Location")).toBe("/?signin_error=expired");
  });

  it("rejects an ID token with the wrong nonce", async () => {
    const h = createHarness();
    h.fakes.token = () =>
      json({
        access_token: "a",
        id_token: jwt({ iss: ISSUER, aud: "heartstone-citizen", exp: NOW / 1000 + 60, nonce: "x" }),
      });
    const response = await completeLogin(h);
    expect(response.headers.get("Location")).toBe("/?signin_error=failed");
    expect(h.fakes.calls.some((c) => c.url.endsWith("/login/oidc"))).toBe(false);
  });

  it("rejects an ID token for another audience", async () => {
    const h = createHarness();
    h.fakes.token = () =>
      json({
        access_token: "a",
        id_token: jwt({ iss: ISSUER, aud: "other", exp: NOW / 1000 + 60, nonce: h.fakes.nonce }),
      });
    expect((await completeLogin(h)).headers.get("Location")).toBe("/?signin_error=failed");
  });

  it("rejects a mismatched iss parameter (RFC 9207)", async () => {
    const h = createHarness();
    const { location, oidc } = await startLogin(h);
    const response = await h.send(
      `/auth/callback?code=c&state=${location.searchParams.get("state")}&iss=https://evil.example`,
      { cookies: { [OIDC_COOKIE]: oidc } },
    );
    expect(response.headers.get("Location")).toBe("/?signin_error=failed");
  });

  it("reports a cancelled sign-in", async () => {
    const h = createHarness();
    const { location, oidc } = await startLogin(h);
    const response = await h.send(
      `/auth/callback?error=access_denied&state=${location.searchParams.get("state")}`,
      { cookies: { [OIDC_COOKIE]: oidc } },
    );
    expect(response.headers.get("Location")).toBe("/?signin_error=cancelled");
    expect(setCookie(response, OIDC_COOKIE)).toMatch(/Max-Age=0/);
  });

  it("reports an unlinked identity distinctly", async () => {
    const h = createHarness();
    h.fakes.backend = () =>
      json(
        {
          statusCode: 401,
          message:
            "No linked HeartStone identity for this external subject. Account linking requires explicit credential provisioning.",
        },
        401,
      );
    expect((await completeLogin(h)).headers.get("Location")).toBe("/?signin_error=not-linked");
  });

  it("reports a backend outage as unavailable", async () => {
    const h = createHarness();
    h.fakes.backend = () => {
      throw new TypeError("connect failed");
    };
    expect((await completeLogin(h)).headers.get("Location")).toBe("/?signin_error=unavailable");
  });

  it("revokes a previous session when signing in again (step-up)", async () => {
    const h = createHarness();
    const { location, oidc } = await startLogin(h);
    const old = await sessionCookieFor("old-token");
    await h.send(`/auth/callback?code=c&state=${location.searchParams.get("state")}`, {
      cookies: { [OIDC_COOKIE]: oidc, [SESSION_COOKIE]: old },
    });
    await Promise.all(h.waited);
    const logout = h.fakes.calls.find((c) => c.url.endsWith("/identity/auth/logout"));
    expect(logout?.headers.get("Authorization")).toBe("Bearer old-token");
  });

  it("never redirects off-site, even if the transaction says so", async () => {
    const h = createHarness();
    const response = await completeLogin(h, "//evil.example/");
    expect(response.headers.get("Location")).toBe("/");
  });
});

describe("GET /auth/session", () => {
  it("reports signed out without a cookie", async () => {
    const h = createHarness();
    const response = await h.send("/auth/session");
    expect(await response.json()).toEqual({ authenticated: false });
    expect(response.headers.getSetCookie()).toHaveLength(0);
  });

  it("reports signed out and clears a tampered cookie", async () => {
    const h = createHarness();
    const cookie = await sessionCookieFor();
    const tampered = `${cookie.slice(0, -2)}${cookie.endsWith("A") ? "B" : "A"}A`;
    const response = await h.send("/auth/session", { cookies: { [SESSION_COOKIE]: tampered } });
    expect(await response.json()).toEqual({ authenticated: false });
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=0/);
  });

  it("re-seals a cookie encrypted with the previous key", async () => {
    const h = createHarness(
      baseEnv({ SESSION_COOKIE_KEY: KEY_B, SESSION_COOKIE_KEY_PREVIOUS: KEY_A }),
    );
    const old = await sessionCookieFor("hs-session-token", KEY_A);
    const response = await h.send("/auth/session", { cookies: { [SESSION_COOKIE]: old } });
    expect((await response.json()).authenticated).toBe(true);
    const renewed = cookieValue(setCookie(response, SESSION_COOKIE));
    expect(renewed).not.toBe(old);
    // The new cookie opens with the new key alone.
    const h2 = createHarness(baseEnv({ SESSION_COOKIE_KEY: KEY_B }));
    const check = await h2.send("/auth/session", { cookies: { [SESSION_COOKIE]: renewed } });
    expect((await check.json()).authenticated).toBe(true);
  });

  it("rejects a cookie sealed with a retired key", async () => {
    const h = createHarness(baseEnv({ SESSION_COOKIE_KEY: KEY_B }));
    const old = await sessionCookieFor("hs-session-token", KEY_A);
    const response = await h.send("/auth/session", { cookies: { [SESSION_COOKIE]: old } });
    expect((await response.json()).authenticated).toBe(false);
  });

  it("refuses cross-site requests", async () => {
    const h = createHarness();
    const response = await h.send("/auth/session", { headers: { "Sec-Fetch-Site": "cross-site" } });
    expect(response.status).toBe(403);
  });
});

describe("POST /auth/logout", () => {
  it("revokes the backend session with the bearer token and clears the cookie", async () => {
    const h = createHarness();
    const response = await h.send("/auth/logout", {
      method: "POST",
      headers: SAME_ORIGIN,
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(204);
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=0/);
    const call = h.fakes.calls.find((c) => c.url === `${BACKEND}/api/v1/identity/auth/logout`);
    expect(call?.method).toBe("POST");
    expect(call?.headers.get("Authorization")).toBe("Bearer hs-session-token");
  });

  it("still clears the cookie when the backend is unreachable", async () => {
    const h = createHarness();
    h.fakes.backend = () => {
      throw new TypeError("down");
    };
    const response = await h.send("/auth/logout", {
      method: "POST",
      headers: SAME_ORIGIN,
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(204);
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=0/);
  });

  it.each([
    ["no CSRF header", { Origin: APP, "Sec-Fetch-Site": "same-origin" }],
    ["wrong CSRF value", { ...SAME_ORIGIN, "X-HeartStone-CSRF": "yes" }],
    ["cross-origin Origin", { ...SAME_ORIGIN, Origin: "https://evil.example" }],
    ["cross-site fetch metadata", { ...SAME_ORIGIN, "Sec-Fetch-Site": "same-site" }],
    ["neither Origin nor Sec-Fetch-Site", { "X-HeartStone-CSRF": "1" }],
  ])("refuses %s", async (_label, headers) => {
    const h = createHarness();
    const response = await h.send("/auth/logout", {
      method: "POST",
      headers,
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(403);
    expect(await response.json()).toMatchObject({ code: "CSRF_CHECK_FAILED" });
    expect(h.fakes.calls).toHaveLength(0);
    expect(setCookie(response, SESSION_COOKIE)).toBeUndefined();
  });

  it("only accepts POST", async () => {
    const h = createHarness();
    expect((await h.send("/auth/logout")).status).toBe(405);
  });
});

describe("GET /auth/logout/redirect", () => {
  it("redirects to the provider's end-session endpoint and drops the local cookie", async () => {
    const h = createHarness();
    const response = await h.send("/auth/logout/redirect", {
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    const location = new URL(response.headers.get("Location") as string);
    expect(`${location.origin}${location.pathname}`).toBe(
      `${ISSUER}/protocol/openid-connect/logout`,
    );
    expect(location.searchParams.get("client_id")).toBe("heartstone-citizen");
    expect(location.searchParams.get("post_logout_redirect_uri")).toBe(`${APP}/`);
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=0/);
  });

  it("goes home when the provider advertises no end-session endpoint", async () => {
    const h = createHarness();
    delete h.fakes.discovery["end_session_endpoint"];
    const response = await h.send("/auth/logout/redirect");
    expect(response.headers.get("Location")).toBe("/");
  });
});

describe("/api/* proxy", () => {
  it("forwards to the backend with the bearer token, path and query", async () => {
    const h = createHarness();
    const response = await h.send("/api/v1/experience/citizen/me?x=1&y=2", {
      headers: {
        Accept: "application/json",
        "X-Correlation-Id": "11111111-2222-4333-8444-555555555555",
        "CF-Connecting-IP": "203.0.113.9",
      },
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(200);
    const call = h.fakes.calls[0];
    expect(call?.url).toBe(`${BACKEND}/api/v1/experience/citizen/me?x=1&y=2`);
    expect(call?.headers.get("Authorization")).toBe("Bearer hs-session-token");
    expect(call?.headers.get("Accept")).toBe("application/json");
    expect(call?.headers.get("X-Correlation-Id")).toBe("11111111-2222-4333-8444-555555555555");
    expect(call?.headers.get("X-Forwarded-For")).toBe("203.0.113.9");
    expect(call?.headers.get("X-Forwarded-Proto")).toBe("https");
    expect(response.headers.get("X-Correlation-Id")).toBe("11111111-2222-4333-8444-555555555555");
  });

  it("strips the browser's Cookie and Authorization headers", async () => {
    const h = createHarness();
    await h.send("/api/v1/experience/citizen/me", {
      headers: { Authorization: "Bearer attacker-token", "X-Api-Key": "k" },
      cookies: { other: "1" },
    });
    const call = h.fakes.calls[0];
    expect(call?.headers.get("Authorization")).toBeNull();
    expect(call?.headers.get("Cookie")).toBeNull();
    expect(call?.headers.get("X-Api-Key")).toBeNull();
  });

  it("replaces a client Authorization header with the session's", async () => {
    const h = createHarness();
    await h.send("/api/v1/x", {
      headers: { Authorization: "Bearer attacker-token" },
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(h.fakes.calls[0]?.headers.get("Authorization")).toBe("Bearer hs-session-token");
  });

  it("generates a correlation id when the client sends none or an invalid one", async () => {
    const h = createHarness();
    const response = await h.send("/api/v1/x", { headers: { "X-Correlation-Id": "bad id\n" } });
    const id = h.fakes.calls[0]?.headers.get("X-Correlation-Id");
    expect(id).toMatch(/^[0-9a-f-]{36}$/);
    expect(response.headers.get("X-Correlation-Id")).toBe(id);
  });

  it("streams a mutation body through with the CSRF checks satisfied", async () => {
    const h = createHarness();
    const response = await h.send("/api/v1/applications", {
      method: "POST",
      headers: { ...SAME_ORIGIN, "Content-Type": "application/json", "Idempotency-Key": "k-1" },
      body: JSON.stringify({ serviceId: "svc-1" }),
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(200);
    const call = h.fakes.calls[0];
    expect(call?.method).toBe("POST");
    expect(call?.body).toBe('{"serviceId":"svc-1"}');
    expect(call?.headers.get("Content-Type")).toBe("application/json");
    expect(call?.headers.get("Idempotency-Key")).toBe("k-1");
    expect(call?.headers.get("X-HeartStone-CSRF")).toBeNull();
  });

  it.each(["POST", "PUT", "PATCH", "DELETE"])("requires the CSRF header on %s", async (method) => {
    const h = createHarness();
    const response = await h.send("/api/v1/applications", {
      method,
      headers: { Origin: APP, "Sec-Fetch-Site": "same-origin" },
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(403);
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("refuses a mutation from another origin even with the CSRF header", async () => {
    const h = createHarness();
    const response = await h.send("/api/v1/applications", {
      method: "POST",
      headers: { ...SAME_ORIGIN, Origin: "https://evil.example", "Sec-Fetch-Site": "cross-site" },
      body: "{}",
    });
    expect(response.status).toBe(403);
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("refuses cross-site GETs", async () => {
    const h = createHarness();
    const response = await h.send("/api/v1/experience/citizen/me", {
      headers: { "Sec-Fetch-Site": "cross-site" },
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(403);
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("blocks the backend's token-issuing login routes", async () => {
    const h = createHarness();
    for (const path of ["/api/v1/identity/auth/login", "/api/v1/identity/auth/login/oidc"]) {
      const response = await h.send(path, { method: "POST", headers: SAME_ORIGIN, body: "{}" });
      expect(response.status).toBe(403);
    }
    expect(h.fakes.calls).toHaveLength(0);
  });

  it("clears the session cookie when the backend says the session ended (401)", async () => {
    const h = createHarness();
    h.fakes.backend = () => json({ statusCode: 401, message: "Session has expired" }, 401);
    const response = await h.send("/api/v1/experience/citizen/me", {
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(401);
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=0/);
    expect(await response.json()).toMatchObject({ message: "Session has expired" });
  });

  it("keeps the session cookie on a step-up 401", async () => {
    const h = createHarness();
    h.fakes.backend = () =>
      json({ statusCode: 401, message: "Recent stronger authentication is required" }, 401);
    const response = await h.send("/api/v1/x", {
      cookies: { [SESSION_COOKIE]: await sessionCookieFor() },
    });
    expect(response.status).toBe(401);
    expect(setCookie(response, SESSION_COOKIE)).toBeUndefined();
  });

  it("drops Set-Cookie and hop-by-hop headers from the backend", async () => {
    const h = createHarness();
    h.fakes.backend = () =>
      new Response("{}", {
        headers: { "Set-Cookie": "backend=1", "Content-Type": "application/json", "X-Other": "ok" },
      });
    const response = await h.send("/api/v1/x");
    expect(response.headers.getSetCookie()).toHaveLength(0);
    expect(response.headers.get("X-Other")).toBe("ok");
    expect(response.headers.get("Cache-Control")).toBe("no-store");
  });

  it("returns 502 without retrying when the backend is unreachable", async () => {
    const h = createHarness();
    h.fakes.backend = () => {
      throw new TypeError("down");
    };
    const response = await h.send("/api/v1/applications", {
      method: "POST",
      headers: SAME_ORIGIN,
      body: "{}",
    });
    expect(response.status).toBe(502);
    expect(h.fakes.calls).toHaveLength(1);
  });

  it("re-seals a rotated session cookie on success", async () => {
    const h = createHarness(
      baseEnv({ SESSION_COOKIE_KEY: KEY_B, SESSION_COOKIE_KEY_PREVIOUS: KEY_A }),
    );
    const response = await h.send("/api/v1/x", {
      cookies: { [SESSION_COOKIE]: await sessionCookieFor("hs-session-token", KEY_A) },
    });
    expect(h.fakes.calls[0]?.headers.get("Authorization")).toBe("Bearer hs-session-token");
    expect(setCookie(response, SESSION_COOKIE)).toMatch(/Max-Age=/);
  });

  it("does not forward an unauthenticated request with a bearer", async () => {
    const h = createHarness();
    await h.send("/api/v1/public/services");
    expect(h.fakes.calls[0]?.headers.get("Authorization")).toBeNull();
  });

  it("rejects unsupported methods", async () => {
    const h = createHarness();
    expect((await h.send("/api/v1/x", { method: "OPTIONS" })).status).toBe(405);
  });
});

describe("unknown /auth routes", () => {
  it("returns 404", async () => {
    const h = createHarness();
    expect((await h.send("/auth/whatever")).status).toBe(404);
  });
});
