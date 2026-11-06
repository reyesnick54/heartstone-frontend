// The public website's frame (design: website/pages/*.html): official banner, header with the
// tenant lockup and main navigation, the page, and the footer. Mobile-first: below 760px the
// navigation folds behind a "Menu" button.
import { useId, useState, type ReactNode } from "react";
import { loginUrl } from "@heartstone/api-client";
import { BrandLockup, OfficialMark, SkipLink } from "@heartstone/ui";
import { paths, site } from "../lib/paths";
import { useLocation } from "../router/router";
import { LAUNCH, TENANT } from "../tenant";
import { Phone } from "./Phone";

const MAIN_NAV = [
  { label: "Services", href: site.services },
  { label: "Life events", href: site.lifeEvents },
  { label: "Business & investors", href: site.business },
  { label: "Help", href: site.help },
];

function footerGroups(signedIn: boolean) {
  return FOOTER_GROUPS.map((group) =>
    group.heading === "Your account" && signedIn
      ? {
          ...group,
          links: [
            { label: "Your account", href: paths.home },
            ...group.links.filter((link) => link.href !== site.signIn),
          ],
        }
      : group,
  );
}

const FOOTER_GROUPS = [
  {
    heading: "Services",
    links: [
      { label: "All services", href: site.services },
      { label: "Browse by topic", href: site.topics },
      { label: "Life events", href: site.lifeEvents },
      { label: "Business and investors", href: site.business },
      { label: "Check a document", href: site.verify },
      { label: "Service status", href: site.status },
    ],
  },
  {
    heading: "Your account",
    links: [
      { label: "Sign in", href: site.signIn },
      { label: "Get a digital ID", href: site.digitalId },
      { label: "Help with signing in", href: site.signInHelp },
      { label: "Government official sign in", href: site.officials },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About this site", href: site.about },
      { label: "Contact us", href: site.contact },
      { label: "Accessibility", href: site.accessibility },
      { label: "Privacy", href: site.privacy },
      { label: "Terms of use", href: site.terms },
    ],
  },
];

function isCurrent(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const siteBanner = (
  <OfficialMark
    statement={TENANT.officialStatement}
    learnMoreHref={TENANT.howToTellHref}
    {...(LAUNCH.isLiveService ? {} : { aside: LAUNCH.notLiveNotice })}
  />
);

export interface SiteShellProps {
  /** Signed in: the header offers "Your account" instead of "Sign in". */
  signedIn: boolean;
  children: ReactNode;
}

export function SiteShell({ signedIn, children }: SiteShellProps) {
  const { pathname } = useLocation();
  // The small-screen menu stays open only on the page where it was opened, so it closes after
  // navigating.
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null);
  const menuOpen = menuOpenAt === pathname;
  const navId = useId();

  return (
    <div className="site">
      <SkipLink targetId="main-content" />
      {siteBanner}
      <header className="site-header">
        <div className="site-wrap site-header-inner">
          <BrandLockup
            href={site.home}
            image={TENANT.lockup.onLight}
            alt={TENANT.lockup.alt}
            className="site-lockup"
          />
          <button
            type="button"
            className="site-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={navId}
            onClick={() => setMenuOpenAt(menuOpen ? null : pathname)}
          >
            Menu
          </button>
          <nav
            id={navId}
            aria-label="Main"
            className={menuOpen ? "site-nav site-nav-open" : "site-nav"}
          >
            <ul className="site-nav-list">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="site-nav-link"
                    aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header-actions">
            <Phone className="site-phone" />
            {signedIn ? (
              <a href={paths.home} className="site-button">
                Your account
              </a>
            ) : (
              <a href={loginUrl({ returnTo: paths.home })} className="site-button">
                Sign in
              </a>
            )}
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-wrap site-footer-grid">
          <div className="site-footer-brand">
            <BrandLockup href={site.home} image={TENANT.lockup.onDark} alt={TENANT.lockup.alt} />
            <p>{TENANT.siteTagline}</p>
            <p className="site-footer-emergency">Emergency: call {TENANT.emergencyNumber}</p>
          </div>
          {footerGroups(signedIn).map((group) => {
            const headingId = `site-footer-${group.heading.toLowerCase().replace(/\W+/g, "-")}`;
            return (
              <nav key={group.heading} aria-labelledby={headingId}>
                <h2 id={headingId} className="site-footer-heading">
                  {group.heading}
                </h2>
                <ul className="site-footer-list">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>
        <div className="site-wrap site-footer-bottom">
          <a href={site.howToTell}>How to tell this site is official</a>
          <span>{TENANT.copyright}</span>
        </div>
      </footer>
    </div>
  );
}

/** A website page's body: constrained width and vertical rhythm. */
export function SitePage({ children }: { children: ReactNode }) {
  return <div className="site-wrap site-page">{children}</div>;
}
