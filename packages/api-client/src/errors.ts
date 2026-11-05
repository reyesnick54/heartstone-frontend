// Error normalisation for HeartStone backend responses. Pure TypeScript with no runtime
// dependencies, so the gateway Worker shares the exact same rules (`@heartstone/api-client/errors`).
//
// Backend error shapes (heartstone-backend `src/common/filters/all-exceptions.filter.ts`):
//   1. HttpException with a string or `{ message }` payload:
//        { statusCode, message: string | string[], error, path, timestamp }
//   2. HttpException with an object payload that has no `statusCode`: the object is returned as
//      is. Authority denials use this shape (`buildConsequentialActionDenial`):
//        { message, outcome, status, explanationCodes, evaluationId?, summary, safeHalt,
//          requiresRevalidation }
//      and some fail-closed 503s send `{ code, message }`.

export type HeartStoneApiErrorKind =
  | "unauthenticated"
  | "forbidden"
  | "not-found"
  | "conflict"
  | "validation"
  | "safe-halt"
  | "step-up-required"
  | "rate-limited"
  | "server"
  | "network";

/**
 * 401 messages thrown by the backend when the session is valid but the action needs stronger or
 * more recent authentication (`identity/auth/step-up/step-up-auth.service.ts` and
 * `identity/auth/mfa/mfa-assurance.service.ts`). The backend has no machine-readable code for
 * these yet, so the exact messages are the contract. A backend change to the wording must update
 * this list (see the step-up tests).
 */
export const STEP_UP_MESSAGES: readonly string[] = [
  "Recent stronger authentication is required",
  "Multi-factor authentication is required",
  "Authentication assurance level is insufficient",
];

const SAFE_HALT_TEXT = /safe[\s_-]?halt/i;

/** Authority-denial detail the backend returns with a consequential-action refusal. */
export interface AuthorityDenialDetail {
  outcome?: string;
  status?: string;
  explanationCodes: string[];
  evaluationId?: string;
  summary?: string;
  safeHalt: boolean;
  requiresRevalidation: boolean;
}

export interface HeartStoneApiErrorInit {
  kind: HeartStoneApiErrorKind;
  message: string;
  status?: number;
  messages?: string[];
  fieldErrors?: Record<string, string[]>;
  code?: string;
  denial?: AuthorityDenialDetail;
  retryAfterSeconds?: number;
  correlationId?: string;
  body?: unknown;
  cause?: unknown;
}

export class HeartStoneApiError extends Error {
  override readonly name = "HeartStoneApiError";
  readonly kind: HeartStoneApiErrorKind;
  /** HTTP status; undefined for `network`. */
  readonly status: number | undefined;
  /** Every message the backend returned (validation returns several). */
  readonly messages: readonly string[];
  /** Validation messages grouped by field, when the backend names the field. */
  readonly fieldErrors: Readonly<Record<string, readonly string[]>>;
  /** Machine-readable code, when the backend sends one (`code` or a reason-code message). */
  readonly code: string | undefined;
  /** Authority evaluation detail for consequential-action refusals (403 or safe halt). */
  readonly denial: AuthorityDenialDetail | undefined;
  /** From `Retry-After` on 429/503, in seconds. */
  readonly retryAfterSeconds: number | undefined;
  /** The `X-Correlation-Id` of the failed request, for support and audit lookups. */
  readonly correlationId: string | undefined;
  /** The parsed response body, unchanged. */
  readonly body: unknown;

  constructor(init: HeartStoneApiErrorInit) {
    super(init.message, init.cause === undefined ? undefined : { cause: init.cause });
    this.kind = init.kind;
    this.status = init.status;
    this.messages = init.messages ?? [init.message];
    this.fieldErrors = init.fieldErrors ?? {};
    this.code = init.code;
    this.denial = init.denial;
    this.retryAfterSeconds = init.retryAfterSeconds;
    this.correlationId = init.correlationId;
    this.body = init.body;
  }
}

export function isHeartStoneApiError(value: unknown): value is HeartStoneApiError {
  return value instanceof HeartStoneApiError;
}

type JsonObject = Record<string, unknown>;

function asObject(value: unknown): JsonObject | undefined {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonObject)
    : undefined;
}

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function messagesOf(body: unknown): string[] {
  if (typeof body === "string") return body.trim() ? [body.trim()] : [];
  const obj = asObject(body);
  if (!obj) return [];
  const message = obj["message"];
  if (typeof message === "string") return message ? [message] : [];
  if (Array.isArray(message)) return message.filter((m): m is string => typeof m === "string");
  return [];
}

/** True when the body or message marks a safe halt (the backend fails closed). */
export function isSafeHaltBody(status: number, body: unknown): boolean {
  const obj = asObject(body);
  if (obj) {
    if (obj["safeHalt"] === true) return true;
    if (obj["outcome"] === "SAFE_HALT" || obj["status"] === "SAFE_HALT") return true;
  }
  if (status === 503) {
    const code = obj ? str(obj["code"]) : undefined;
    if (code && SAFE_HALT_TEXT.test(code)) return true;
    return messagesOf(body).some((m) => SAFE_HALT_TEXT.test(m));
  }
  return false;
}

/** True when a 401 means "authenticate more strongly", not "you are signed out". */
export function isStepUpBody(status: number, body: unknown): boolean {
  if (status !== 401) return false;
  return messagesOf(body).some((m) => STEP_UP_MESSAGES.includes(m));
}

function denialOf(body: unknown): AuthorityDenialDetail | undefined {
  const obj = asObject(body);
  if (!obj || typeof obj["safeHalt"] !== "boolean" || !Array.isArray(obj["explanationCodes"])) {
    return undefined;
  }
  const detail: AuthorityDenialDetail = {
    explanationCodes: (obj["explanationCodes"] as unknown[]).filter(
      (c): c is string => typeof c === "string",
    ),
    safeHalt: obj["safeHalt"] === true,
    requiresRevalidation: obj["requiresRevalidation"] === true,
  };
  const outcome = str(obj["outcome"]);
  const status = str(obj["status"]);
  const evaluationId = str(obj["evaluationId"]);
  const summary = str(obj["summary"]);
  if (outcome) detail.outcome = outcome;
  if (status) detail.status = status;
  if (evaluationId) detail.evaluationId = evaluationId;
  if (summary) detail.summary = summary;
  return detail;
}

const REASON_CODE = /^[A-Z][A-Z0-9_]{2,}$/;

function codeOf(body: unknown, messages: string[]): string | undefined {
  const obj = asObject(body);
  const explicit = obj ? str(obj["code"]) : undefined;
  if (explicit) return explicit;
  // Some backend refusals use a reason code as the message, e.g. ForbiddenException(CODE).
  const only = messages.length === 1 ? messages[0] : undefined;
  return only && REASON_CODE.test(only) ? only : undefined;
}

/**
 * Groups class-validator messages by field. Nest's ValidationPipe returns messages such as
 * "email must be an email" or "property foo should not exist"; the first word is the property
 * path. Structured `errors: [{ field | property, message | messages | constraints }]` bodies are
 * also read, should the backend adopt them.
 */
export function fieldErrorsOf(body: unknown, messages: string[]): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  const add = (field: string, message: string) => {
    (out[field] ??= []).push(message);
  };

  const errors = asObject(body)?.["errors"];
  if (Array.isArray(errors)) {
    for (const entry of errors) {
      const e = asObject(entry);
      const field = e && (str(e["field"]) ?? str(e["property"]));
      if (!e || !field) continue;
      const msg = str(e["message"]);
      if (msg) add(field, msg);
      const list = e["messages"];
      if (Array.isArray(list)) list.forEach((m) => typeof m === "string" && add(field, m));
      const constraints = asObject(e["constraints"]);
      if (constraints)
        Object.values(constraints).forEach((m) => typeof m === "string" && add(field, m));
    }
    if (Object.keys(out).length > 0) return out;
  }

  for (const message of messages) {
    const unknownProperty = /^property (\S+) should not exist$/.exec(message);
    if (unknownProperty?.[1]) {
      add(unknownProperty[1], message);
      continue;
    }
    const match = /^([A-Za-z_$][\w$]*(?:\.[\w$]+)*) \S/.exec(message);
    if (match?.[1]) add(match[1], message);
  }
  return out;
}

function kindFor(status: number, body: unknown): HeartStoneApiErrorKind {
  if (isSafeHaltBody(status, body)) return "safe-halt";
  switch (status) {
    case 401:
      return isStepUpBody(status, body) ? "step-up-required" : "unauthenticated";
    case 403:
      return "forbidden";
    case 404:
    case 410:
      return "not-found";
    case 409:
      return "conflict";
    case 400:
    case 413:
    case 415:
    case 422:
      return "validation";
    case 429:
      return "rate-limited";
    default:
      return "server";
  }
}

const DEFAULT_MESSAGES: Record<HeartStoneApiErrorKind, string> = {
  unauthenticated: "You are not signed in, or your session has ended.",
  forbidden: "You do not have access to this.",
  "not-found": "This could not be found.",
  conflict: "This changed since you last loaded it.",
  validation: "Some information needs to be corrected.",
  "safe-halt": "This service has been paused for safety checks.",
  "step-up-required": "This needs a stronger or more recent sign-in.",
  "rate-limited": "Too many requests. Please wait and try again.",
  server: "Something went wrong on our side.",
  network: "We could not reach the service. Check your connection and try again.",
};

/** A plain-language default for each kind, for UIs that have no more specific copy. */
export function defaultMessageFor(kind: HeartStoneApiErrorKind): string {
  return DEFAULT_MESSAGES[kind];
}

function parseRetryAfter(value: string | null | undefined, now: number): number | undefined {
  if (!value) return undefined;
  if (/^\d+$/.test(value.trim())) return Number(value.trim());
  const at = Date.parse(value);
  return Number.isNaN(at) ? undefined : Math.max(0, Math.ceil((at - now) / 1000));
}

export interface NormaliseOptions {
  correlationId?: string | undefined;
  retryAfter?: string | null | undefined;
  now?: number;
}

/** Maps a non-2xx status and its parsed body to a HeartStoneApiError. */
export function normaliseApiError(
  status: number,
  body: unknown,
  options: NormaliseOptions = {},
): HeartStoneApiError {
  const kind = kindFor(status, body);
  const messages = messagesOf(body);
  const init: HeartStoneApiErrorInit = {
    kind,
    status,
    message: messages[0] ?? DEFAULT_MESSAGES[kind],
    messages: messages.length > 0 ? messages : [DEFAULT_MESSAGES[kind]],
    body,
  };
  if (kind === "validation") init.fieldErrors = fieldErrorsOf(body, messages);
  const code = codeOf(body, messages);
  if (code) init.code = code;
  const denial = denialOf(body);
  if (denial) init.denial = denial;
  const retryAfterSeconds = parseRetryAfter(options.retryAfter, options.now ?? Date.now());
  if (retryAfterSeconds !== undefined) init.retryAfterSeconds = retryAfterSeconds;
  if (options.correlationId) init.correlationId = options.correlationId;
  return new HeartStoneApiError(init);
}

/** Wraps a failed fetch (DNS, offline, connection reset) as kind `network`. */
export function networkError(cause: unknown, correlationId?: string): HeartStoneApiError {
  const init: HeartStoneApiErrorInit = {
    kind: "network",
    message: DEFAULT_MESSAGES.network,
    cause,
  };
  if (correlationId) init.correlationId = correlationId;
  return new HeartStoneApiError(init);
}

/** Reads a Response body as JSON when possible, otherwise as text. */
export async function readErrorBody(response: Response): Promise<unknown> {
  let text: string;
  try {
    text = await response.text();
  } catch {
    return undefined;
  }
  if (!text) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

/** Normalises a non-2xx Response (consumes its body). */
export async function apiErrorFromResponse(
  response: Response,
  correlationId?: string,
): Promise<HeartStoneApiError> {
  const body = await readErrorBody(response);
  return normaliseApiError(response.status, body, {
    correlationId: correlationId ?? response.headers.get("x-correlation-id") ?? undefined,
    retryAfter: response.headers.get("retry-after"),
  });
}
