import { useEffect, type ReactNode } from "react";
import { PageHeader, Stack } from "@heartstone/ui";
import { TENANT_PLACEHOLDER } from "../tenant";

export interface PageProps {
  /** The page's single h1. Plain text, also used for the document title. */
  title: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

/** Every routed page: one h1 (PageHeader), the document title, and the page body. */
export function Page({ title, description, eyebrow, actions, children }: PageProps) {
  useEffect(() => {
    document.title = `${title} — ${TENANT_PLACEHOLDER.productName}`;
  }, [title]);
  return (
    <>
      <PageHeader title={title} description={description} eyebrow={eyebrow} actions={actions} />
      <Stack gap="6">{children}</Stack>
    </>
  );
}
