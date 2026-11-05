import { matchPath } from "./router";

describe("matchPath", () => {
  it("matches static and parameterised paths", () => {
    expect(matchPath("/", "/")).toEqual({});
    expect(matchPath("/services", "/services/")).toEqual({});
    expect(matchPath("/services/:slug", "/services/register%20employer")).toEqual({
      slug: "register employer",
    });
    expect(matchPath("/services/:slug", "/services")).toBeNull();
    expect(matchPath("/services/:slug/apply", "/services/x/review")).toBeNull();
  });

  it("rejects malformed encodings", () => {
    expect(matchPath("/a/:id", "/a/%E0%A4%A")).toBeNull();
  });
});
