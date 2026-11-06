// "How to apply" on a website service page. The page itself comes from tenant content; the
// backend only adds to it. When the content links the service to the public catalogue
// (`catalogueCode`) and the catalogue says online applications are open, it offers "Apply
// online". Otherwise, and whenever the backend cannot be reached, it says plainly that online
// applications are being prepared and how to start. Backend errors are logged, never shown.
import { useEffect } from "react";
import { unwrap } from "@heartstone/api-client";
import { useApi } from "@heartstone/api-client/react";
import { Card, Cluster, Link, Stack } from "@heartstone/ui";
import type { ServiceContent } from "../content/schema";
import { paths, site } from "../lib/paths";
import { useQuery } from "../lib/query";
import { WEBSITE_CONTENT } from "../tenant";

/** Catalogue states in which a published service takes applications online. */
const OPEN_STATES = new Set(["ACTIVE", "PILOT_ONLY", "PRE_APPLICATION"]);

export function isOpenOnline(service: {
  applicationCapable: boolean;
  availabilityStatus: string;
  isInformationOnly: boolean;
}): boolean {
  return (
    service.applicationCapable &&
    !service.isInformationOnly &&
    OPEN_STATES.has(service.availabilityStatus)
  );
}

export function OnlineApplication({ service }: { service: ServiceContent }) {
  const client = useApi();
  const code = service.catalogueCode;
  const published = useQuery(code ? `public-service:${code}` : null, (signal) =>
    unwrap(
      client.GET("/public/services/{slug}", { params: { path: { slug: code ?? "" } }, signal }),
    ),
  );
  useEffect(() => {
    if (published.status === "error") {
      console.warn(
        `Online application status for "${code ?? ""}" is unavailable; showing the content-only page.`,
        published.error,
      );
    }
  }, [published.status, published.error, code]);

  const { shortName } = WEBSITE_CONTENT.organisation;
  const open = code && published.status === "success" && isOpenOnline(published.data);

  if (open) {
    return (
      <Card title="Apply online" titleLevel={2} raised>
        <Stack gap="3">
          <p>
            You can apply for this service online. You&rsquo;ll need to sign in with your digital
            ID. Your progress is saved as a draft, so you can finish later.
          </p>
          <Cluster gap="4" align="center">
            <Link href={paths.apply(code)} standalone className="button-link">
              Apply online
            </Link>
            <Link href={site.digitalId} standalone>
              Get a digital ID
            </Link>
          </Cluster>
        </Stack>
      </Card>
    );
  }
  return (
    <Card title="How to start" titleLevel={2} raised>
      <Stack gap="3">
        <p>
          Online applications for this service are being prepared. Contact {shortName} to start your
          application, or to ask what your case needs.
        </p>
        <Cluster gap="4" align="center">
          <Link href={site.contact} standalone className="button-link">
            Contact {shortName}
          </Link>
          <Link href={site.help} standalone>
            Help with applying
          </Link>
        </Cluster>
      </Stack>
    </Card>
  );
}
