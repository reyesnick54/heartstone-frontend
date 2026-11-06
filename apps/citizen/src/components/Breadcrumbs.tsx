// "Home › Services › Work permit": where this page sits in the website.
import type { ContentLink } from "../content/schema";
import { site } from "../lib/paths";

export function Breadcrumbs({ trail }: { trail: readonly ContentLink[] }) {
  const items = [{ label: "Home", href: site.home }, ...trail];
  return (
    <nav aria-label="Breadcrumb" className="site-breadcrumbs">
      <ol>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
