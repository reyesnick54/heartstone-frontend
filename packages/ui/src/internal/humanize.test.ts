import { humanizeStatus } from "./humanize";

describe("humanizeStatus", () => {
  it.each([
    ["UNDER_REVIEW", "Under review"],
    ["awaiting-applicant", "Awaiting applicant"],
    ["inProgress", "In progress"],
    ["  ", ""],
  ])("%s → %s", (input, expected) => {
    expect(humanizeStatus(input)).toBe(expected);
  });
});
