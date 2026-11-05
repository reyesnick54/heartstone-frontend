// @heartstone/api-client: typed access to the HeartStone backend through the app's gateway.
// React bindings live in "@heartstone/api-client/react"; the dependency-free error rules in
// "@heartstone/api-client/errors" (shared with the gateway Worker).
export {
  DEFAULT_API_BASE_URL,
  createHeartStoneClient,
  resolveBaseUrl,
  unwrap,
  type HeartStoneClient,
  type HeartStoneClientOptions,
} from "./client.js";
export {
  CORRELATION_HEADER,
  CSRF_HEADER,
  CSRF_HEADER_VALUE,
  SIGNIN_ERROR_PARAM,
  type SignInErrorCode,
} from "./protocol.js";
export {
  correlationIdOf,
  createHeartStoneFetch,
  isMutatingMethod,
  newCorrelationId,
  type FetchLike,
  type HeartStoneFetchOptions,
} from "./fetch.js";
export {
  HeartStoneApiError,
  STEP_UP_MESSAGES,
  apiErrorFromResponse,
  defaultMessageFor,
  isHeartStoneApiError,
  isSafeHaltBody,
  isStepUpBody,
  networkError,
  normaliseApiError,
  type AuthorityDenialDetail,
  type HeartStoneApiErrorInit,
  type HeartStoneApiErrorKind,
} from "./errors.js";
export {
  fetchSession,
  loginUrl,
  logout,
  providerLogoutUrl,
  type AuthEndpointsOptions,
  type LoginUrlOptions,
  type GatewaySession,
} from "./auth.js";
export type { components, operations, paths } from "./generated/schema.js";
export type * as Api from "./types.js";
