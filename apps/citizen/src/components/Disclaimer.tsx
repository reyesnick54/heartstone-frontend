import type { ReactNode } from "react";

/** The small print at the end of a page: backend disclaimers and record-keeping notes. */
export function Disclaimer({ children }: { children: ReactNode }) {
  return <p className="page-disclaimer">{children}</p>;
}
