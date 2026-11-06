// How to tell this site is official (design: website/pages/Official.html). Public. The site's
// address comes from tenant configuration.
import { Card, Link, Stack } from "@heartstone/ui";
import { Page } from "../components/Page";
import { paths } from "../lib/paths";
import { TENANT } from "../tenant";

export function HowToTellPage() {
  return (
    <Page
      title="How to tell this site is official"
      description="Scam websites can look like government websites. Check these signs before you sign in, pay or share personal details."
    >
      <Card title="Signs of the official site" titleLevel={2}>
        <Stack gap="4">
          <div>
            <h3 className="subheading">The address is {TENANT.officialSiteAddress}</h3>
            <p>
              Look at the address bar. Be careful of addresses that only look similar, such as extra
              words or different endings.
            </p>
          </div>
          <div>
            <h3 className="subheading">The connection is secure</h3>
            <p>
              The address starts with https:// and your browser shows a padlock. A padlock alone
              does not prove a site is official, so check the address too.
            </p>
          </div>
          <div>
            <h3 className="subheading">Official documents can be checked</h3>
            <p>
              Certificates, licences and permits from government carry a reference you can check on
              this site. If a document cannot be checked, do not rely on it.
            </p>
          </div>
          <div>
            <h3 className="subheading">Messages about your account appear in your account</h3>
            <p>
              We may text or email to tell you there is something new, but the details are always in
              your account. We never ask you to reply with personal details.
            </p>
          </div>
        </Stack>
      </Card>
      <Card title="Government will never" titleLevel={2}>
        <ul className="bullets">
          <li>ask for your password or sign-in code, by phone, text or email</li>
          <li>ask you to pay a fee by gift card, cryptocurrency or money transfer to a person</li>
          <li>threaten you with arrest or deportation to make you pay straight away</li>
          <li>charge you to &ldquo;speed up&rdquo; an application on another website</li>
        </ul>
      </Card>
      <Card title="Check a document" titleLevel={2}>
        <p>
          Confirm a certificate, licence or permit was issued by government and is still valid.{" "}
          <Link href={paths.verify}>Check a document</Link>
        </p>
      </Card>
    </Page>
  );
}
