// F0 baseline placeholder with the tenant's branding. The real shell and navigation arrive in
// later stages. This screen holds no government data.
import { BrandLockup, OfficialMark, PageHeader, SkipLink } from "@heartstone/ui";
import { TENANT } from "./tenant";

export const EXPERIENCE_NAME = "Executive";

export function App() {
  return (
    <div className="baseline">
      <SkipLink />
      <OfficialMark
        statement={TENANT.officialStatement}
        learnMoreHref={TENANT.howToTellHref}
        aside={TENANT.environmentNotice}
      />
      <header className="baseline-header">
        <BrandLockup href="/" image={TENANT.lockup.onDark} alt={TENANT.lockup.alt} />
      </header>
      <main id="main-content" tabIndex={-1} className="baseline-main">
        <PageHeader
          title={`${TENANT.displayName} — ${EXPERIENCE_NAME}`}
          description="Development baseline. This area is not built yet."
        />
      </main>
    </div>
  );
}
