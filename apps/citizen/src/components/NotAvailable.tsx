import type { ReactNode } from "react";
import { Notice, Stack } from "@heartstone/ui";

/**
 * An honest "not available yet" state for a capability the backend does not offer yet. Never
 * replace this with sample data or a form that pretends to submit.
 */
export function NotAvailable({
  title = "Not available online yet",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Notice tone="info" title={title}>
      <Stack gap="2">{children}</Stack>
    </Notice>
  );
}
