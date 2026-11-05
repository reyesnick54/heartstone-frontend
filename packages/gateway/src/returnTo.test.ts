import { safeReturnTo } from "./returnTo";

const ORIGIN = "https://citizen.example.test";

describe("safeReturnTo", () => {
  it.each([
    ["/", "/"],
    ["/applications", "/applications"],
    ["/applications?tab=open#top", "/applications?tab=open#top"],
    ["/a/../b", "/b"],
    ["/search?q=%2F", "/search?q=%2F"],
  ])("accepts same-origin path %s", (input, expected) => {
    expect(safeReturnTo(input, ORIGIN)).toBe(expected);
  });

  it.each([
    "https://evil.example/",
    "http://citizen.example.test/",
    "//evil.example/path",
    "///evil.example",
    "/\\evil.example",
    "\\\\evil.example",
    "/%2F%2Fevil.example",
    "/%5Cevil.example",
    "javascript:alert(1)",
    "data:text/html,x",
    "applications",
    "/\u0000evil",
    "/\tevil",
    "/auth/login",
    "/auth/callback?code=x",
    "/auth",
    "",
    `/${"a".repeat(3000)}`,
  ])("rejects %j", (input) => {
    expect(safeReturnTo(input, ORIGIN)).toBe("/");
  });

  it("returns / for null or undefined", () => {
    expect(safeReturnTo(null, ORIGIN)).toBe("/");
    expect(safeReturnTo(undefined, ORIGIN)).toBe("/");
  });
});
