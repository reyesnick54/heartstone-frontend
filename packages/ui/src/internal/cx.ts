/** Joins class names, skipping falsy values. */
export function cx(...names: unknown[]): string {
  return names.filter((name): name is string => typeof name === "string" && name !== "").join(" ");
}
