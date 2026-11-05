import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { SkipLink } from "../SkipLink/SkipLink";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./AppShell.module.css";

export interface AppShellNavItem {
  /** Stable key. */
  id: string;
  label: string;
  href: string;
  /** Decorative icon; the label carries the meaning. */
  icon?: ReactNode;
  /** Marks the current page (`aria-current="page"`). Decided by the router in F2. */
  current?: boolean;
  /** A count shown after the label, e.g. unread messages. */
  count?: number;
  /** Words read after the count by screen readers, e.g. "unread". */
  countLabel?: string;
}

export interface AppShellNavSection {
  id: string;
  /** Section heading, e.g. "My government". Omit for the first, unlabelled section. */
  heading?: string;
  items: readonly AppShellNavItem[];
}

export interface AppShellProps {
  /**
   * Brand lockup (normally a home link with the tenant's logo). Shown in the sidebar at ≥ 900px
   * and in the top bar below that. Supplied by tenant configuration; never hard-coded here.
   */
  brand: ReactNode;
  /** Brand for the light top bar, if it needs a different logo variant. Defaults to `brand`. */
  brandCompact?: ReactNode;
  /** Sidebar navigation (≥ 900px). */
  navigation: readonly AppShellNavSection[];
  /** Sidebar content above the navigation (e.g. the "Acting as" panel). */
  sidebarHeader?: ReactNode;
  /** Links at the bottom of the sidebar (settings, help, sign out). */
  sidebarFooter?: readonly AppShellNavItem[];
  /**
   * Bottom tab bar items (< 900px). The citizen designs use five: Home, Services, Applications,
   * Messages, More (More opens the full menu).
   */
  tabs: readonly AppShellNavItem[];
  /** Content above the top bar: OfficialMark and/or an environment notice. */
  banner?: ReactNode;
  /** Top bar content (search, notifications, account). */
  topBar?: ReactNode;
  /** Accessible name of both navigation landmarks. */
  navigationLabel?: string;
  /** Id of `<main>`, the skip-link target. */
  mainId?: string;
  className?: string;
  children: ReactNode;
}

function NavLink({ item, className }: { item: AppShellNavItem; className: string | undefined }) {
  return (
    <a href={item.href} className={className} aria-current={item.current ? "page" : undefined}>
      {item.icon && <span aria-hidden="true">{item.icon}</span>}
      <span className={styles.navLabel}>{item.label}</span>{" "}
      {item.count !== undefined && (
        <span className={styles.navCount}>
          {item.count}
          {item.countLabel && (
            <>
              {" "}
              <VisuallyHidden>{item.countLabel}</VisuallyHidden>
            </>
          )}
        </span>
      )}
    </a>
  );
}

/**
 * Citizen application shell: skip link, banner, sidebar navigation (≥ 900px), top bar, `<main>`,
 * and a bottom tab bar (< 900px). Layout switches with CSS only, so it works without JavaScript
 * measurement and on first paint.
 *
 * The shell shows navigation; it does not decide what a user may do. Which items appear is
 * decided by backend capabilities (F2).
 */
export function AppShell({
  brand,
  brandCompact,
  navigation,
  sidebarHeader,
  sidebarFooter,
  tabs,
  banner,
  topBar,
  navigationLabel = "Main",
  mainId = "main-content",
  className,
  children,
}: AppShellProps) {
  return (
    <div className={cx(styles.root, className)}>
      <SkipLink targetId={mainId} />

      <nav className={styles.sidebar} aria-label={navigationLabel}>
        <div className={styles.sidebarBrand}>{brand}</div>
        {sidebarHeader}
        {navigation.map((section) => {
          const headingId = section.heading ? `hs-nav-${section.id}` : undefined;
          return (
            <div key={section.id}>
              {section.heading && (
                <p id={headingId} className={styles.sectionHeading}>
                  {section.heading}
                </p>
              )}
              <ul className={styles.section} aria-labelledby={headingId}>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <NavLink item={item} className={styles.navLink} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        {sidebarFooter && sidebarFooter.length > 0 && (
          <ul className={cx(styles.section, styles.sidebarFooter)}>
            {sidebarFooter.map((item) => (
              <li key={item.id}>
                <NavLink item={item} className={styles.navLink} />
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className={styles.column}>
        {banner}
        <header className={styles.topBar}>
          <div className={styles.topBrand}>{brandCompact ?? brand}</div>
          {topBar && <div className={styles.topBarContent}>{topBar}</div>}
        </header>

        <main id={mainId} tabIndex={-1} className={styles.main}>
          {children}
        </main>
      </div>

      <nav className={styles.tabBar} aria-label={navigationLabel}>
        <ul className={styles.tabList}>
          {tabs.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={styles.tabLink}
                aria-current={item.current ? "page" : undefined}
              >
                {item.icon && (
                  <span className={styles.tabIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}{" "}
                {item.count !== undefined && item.count > 0 && (
                  <span className={styles.tabCount}>
                    {item.count}
                    {item.countLabel && (
                      <>
                        {" "}
                        <VisuallyHidden>{item.countLabel}</VisuallyHidden>
                      </>
                    )}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
