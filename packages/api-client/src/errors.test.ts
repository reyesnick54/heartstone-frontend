import {
  HeartStoneApiError,
  STEP_UP_MESSAGES,
  apiErrorFromResponse,
  normaliseApiError,
  type HeartStoneApiErrorKind,
} from "./errors";

// Body shapes produced by heartstone-backend AllExceptionsFilter.
function nestBody(statusCode: number, message: string | string[], error = "Error") {
  return { statusCode, message, error, path: "/api/v1/x", timestamp: "2026-11-05T00:00:00.000Z" };
}

describe("normaliseApiError", () => {
  it.each<[number, HeartStoneApiErrorKind]>([
    [400, "validation"],
    [401, "unauthenticated"],
    [403, "forbidden"],
    [404, "not-found"],
    [409, "conflict"],
    [413, "validation"],
    [422, "validation"],
    [429, "rate-limited"],
    [500, "server"],
    [502, "server"],
    [503, "server"],
  ])("maps HTTP %i to kind %s", (status, kind) => {
    const error = normaliseApiError(status, nestBody(status, "Something"));
    expect(error).toBeInstanceOf(HeartStoneApiError);
    expect(error.kind).toBe(kind);
    expect(error.status).toBe(status);
    expect(error.message).toBe("Something");
  });

  it("keeps every validation message and groups them by field", () => {
    const error = normaliseApiError(
      400,
      nestBody(400, [
        "accessToken must be a string",
        "accessToken should not be empty",
        "property extra should not exist",
        "address.postcode must be shorter than or equal to 10 characters",
      ]),
    );
    expect(error.kind).toBe("validation");
    expect(error.messages).toHaveLength(4);
    expect(error.fieldErrors).toEqual({
      accessToken: ["accessToken must be a string", "accessToken should not be empty"],
      extra: ["property extra should not exist"],
      "address.postcode": ["address.postcode must be shorter than or equal to 10 characters"],
    });
  });

  it("reads structured field errors when the body provides them", () => {
    const error = normaliseApiError(422, {
      message: "Invalid",
      errors: [
        { field: "email", message: "Enter an email address" },
        { property: "age", constraints: { min: "age must not be less than 18" } },
      ],
    });
    expect(error.fieldErrors).toEqual({
      email: ["Enter an email address"],
      age: ["age must not be less than 18"],
    });
  });

  it("treats the form engine's 409 with per-field errors as validation", () => {
    // heartstone-backend ApplicationsService.submit: ConflictException with form field errors.
    const error = normaliseApiError(409, {
      message: "Form response validation failed",
      errors: [
        { fieldKey: "registrationNumber", code: "REQUIRED", message: "Field is required" },
        {
          fieldKey: "email",
          code: "INVALID_EMAIL",
          message: "Value must be a valid email address",
        },
      ],
      missingRequiredFields: ["registrationNumber"],
    });
    expect(error.kind).toBe("validation");
    expect(error.fieldErrors).toEqual({
      registrationNumber: ["Field is required"],
      email: ["Value must be a valid email address"],
    });
  });

  it("keeps a 409 without field errors as a conflict", () => {
    const error = normaliseApiError(
      409,
      nestBody(
        409,
        "Service version or configuration fingerprint is no longer valid for submission",
      ),
    );
    expect(error.kind).toBe("conflict");
    expect(error.fieldErrors).toEqual({});
  });

  it("does not attach field errors to non-validation kinds", () => {
    expect(normaliseApiError(403, nestBody(403, "foo must be x")).fieldErrors).toEqual({});
  });

  describe("safe halt", () => {
    const denial = {
      message: "Consequential action blocked: authority evaluation did not permit this action.",
      outcome: "SAFE_HALT",
      status: "SAFE_HALT",
      explanationCodes: ["AUTHORITY_SOURCE_UNVERIFIED"],
      evaluationId: "eval-1",
      summary: "Processing halted",
      safeHalt: true,
      requiresRevalidation: true,
    };

    it("detects the authority-denial body with safeHalt: true (403)", () => {
      const error = normaliseApiError(403, denial);
      expect(error.kind).toBe("safe-halt");
      expect(error.denial).toEqual({
        outcome: "SAFE_HALT",
        status: "SAFE_HALT",
        explanationCodes: ["AUTHORITY_SOURCE_UNVERIFIED"],
        evaluationId: "eval-1",
        summary: "Processing halted",
        safeHalt: true,
        requiresRevalidation: true,
      });
    });

    it("detects outcome SAFE_HALT even if the flag is missing", () => {
      expect(normaliseApiError(403, { message: "Blocked", outcome: "SAFE_HALT" }).kind).toBe(
        "safe-halt",
      );
    });

    it("keeps an ordinary authority denial as forbidden, with its detail", () => {
      const error = normaliseApiError(403, {
        ...denial,
        outcome: "DENY",
        status: "NOT_AUTHORIZED",
        safeHalt: false,
      });
      expect(error.kind).toBe("forbidden");
      expect(error.denial?.status).toBe("NOT_AUTHORIZED");
      expect(error.denial?.safeHalt).toBe(false);
    });

    it("detects 503 with 'safe halt' in the message, case-insensitively", () => {
      expect(normaliseApiError(503, nestBody(503, "Service is in SAFE HALT")).kind).toBe(
        "safe-halt",
      );
      expect(normaliseApiError(503, { code: "SAFE_HALT_ACTIVE", message: "Paused" }).kind).toBe(
        "safe-halt",
      );
      expect(normaliseApiError(503, "safe-halt engaged").kind).toBe("safe-halt");
    });

    it("does not treat other 503s or other statuses mentioning halt as safe halt", () => {
      expect(normaliseApiError(503, { code: "POLICY_SERVICE_UNAVAILABLE" }).kind).toBe("server");
      expect(
        normaliseApiError(400, nestBody(400, "Completed registry queries cannot be safe-halted"))
          .kind,
      ).toBe("validation");
    });
  });

  describe("step-up", () => {
    it.each(STEP_UP_MESSAGES)("treats 401 '%s' as step-up-required", (message) => {
      const error = normaliseApiError(401, nestBody(401, message, "Unauthorized"));
      expect(error.kind).toBe("step-up-required");
      expect(error.message).toBe(message);
    });

    it.each([
      "Session has expired",
      "Session has been revoked",
      "Missing or invalid authorization header",
      "Invalid or expired session",
    ])("treats 401 '%s' as unauthenticated", (message) => {
      expect(normaliseApiError(401, nestBody(401, message)).kind).toBe("unauthenticated");
    });

    it("does not treat a 403 with a step-up message as step-up", () => {
      expect(normaliseApiError(403, nestBody(403, STEP_UP_MESSAGES[0] as string)).kind).toBe(
        "forbidden",
      );
    });
  });

  it("reads a code from `code`, or from a reason-code message", () => {
    expect(normaliseApiError(503, { code: "X_Y", message: "m" }).code).toBe("X_Y");
    expect(normaliseApiError(403, nestBody(403, "AI_CANNOT_ACTIVATE")).code).toBe(
      "AI_CANNOT_ACTIVATE",
    );
    expect(normaliseApiError(403, nestBody(403, "Forbidden resource")).code).toBeUndefined();
  });

  it("falls back to a plain-language message when the body has none", () => {
    const error = normaliseApiError(500, undefined);
    expect(error.kind).toBe("server");
    expect(error.message).toMatch(/went wrong/i);
  });

  it("parses Retry-After in seconds and as a date", () => {
    expect(normaliseApiError(429, undefined, { retryAfter: "30" }).retryAfterSeconds).toBe(30);
    const now = Date.parse("2026-11-05T10:00:00Z");
    expect(
      normaliseApiError(429, undefined, { retryAfter: "Thu, 05 Nov 2026 10:01:00 GMT", now })
        .retryAfterSeconds,
    ).toBe(60);
  });
});

describe("apiErrorFromResponse", () => {
  it("reads JSON and the correlation id from the response", async () => {
    const response = new Response(JSON.stringify(nestBody(409, "Version conflict")), {
      status: 409,
      headers: { "content-type": "application/json", "x-correlation-id": "abc" },
    });
    const error = await apiErrorFromResponse(response);
    expect(error.kind).toBe("conflict");
    expect(error.correlationId).toBe("abc");
  });

  it("accepts a plain-text body", async () => {
    const error = await apiErrorFromResponse(new Response("Bad gateway", { status: 502 }));
    expect(error.kind).toBe("server");
    expect(error.body).toBe("Bad gateway");
  });
});
