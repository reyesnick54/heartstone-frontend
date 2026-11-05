/**
 * Turns a machine status string into readable text for display when the backend did not send a
 * label: `UNDER_REVIEW` → `Under review`, `awaiting-applicant` → `Awaiting applicant`.
 * It never changes the meaning of the status; prefer the backend's own public label.
 */
export function humanizeStatus(status: string): string {
  const words = status
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase());
  const [first, ...rest] = words;
  if (!first) return "";
  return [first.charAt(0).toUpperCase() + first.slice(1), ...rest].join(" ");
}
