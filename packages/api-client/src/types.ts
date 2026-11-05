// Convenience aliases for frequently used contract schemas. Everything here is derived from
// src/generated/schema.ts; never declare backend shapes by hand.
import type { components } from "./generated/schema.js";

type Schemas = components["schemas"];

export type CitizenMe = Schemas["CitizenMeResponseDto"];
export type OfficialMe = Schemas["OfficialMeResponseDto"];
export type LoginResponse = Schemas["LoginResponseDto"];
export type OidcLoginRequest = Schemas["OidcLoginDto"];
