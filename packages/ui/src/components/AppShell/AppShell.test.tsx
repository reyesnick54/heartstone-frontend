import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppShell, type AppShellNavItem } from "./AppShell";

const tabs: AppShellNavItem[] = [
  { id: "home", label: "Home", href: "/", current: true },
  { id: "services", label: "Services", href: "/services" },
  { id: "applications", label: "Applications", href: "/applications" },
  { id: "messages", label: "Messages", href: "/messages", count: 2, countLabel: "unread" },
  { id: "more", label: "More", href: "/menu" },
];

function navigations(): [HTMLElement, HTMLElement] {
  const [sidebar, tabBar] = screen.getAllByRole("navigation", { name: "Main" });
  if (!sidebar || !tabBar) throw new Error("expected two navigation landmarks");
  return [sidebar, tabBar];
}

function renderShell() {
  return render(
    <AppShell
      brand={<a href="/">Brand home</a>}
      navigation={[
        { id: "main", items: tabs.slice(0, 4) },
        { id: "gov", heading: "My government", items: [{ id: "tax", label: "Tax", href: "/tax" }] },
      ]}
      sidebarFooter={[{ id: "help", label: "Help", href: "/help" }]}
      tabs={tabs}
      banner={<div role="note">Development build</div>}
      topBar={<button type="button">Account</button>}
    >
      <h1>Page title</h1>
    </AppShell>,
  );
}

describe("AppShell", () => {
  it("provides landmarks: two labelled navigations, a banner and main", () => {
    renderShell();
    expect(screen.getAllByRole("navigation", { name: "Main" })).toHaveLength(2);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toContainElement(screen.getByRole("heading", { level: 1 }));
  });

  it("starts with a skip link to main content", async () => {
    const user = userEvent.setup();
    renderShell();
    await user.tab();
    const skip = screen.getByRole("link", { name: "Skip to main content" });
    expect(skip).toHaveFocus();
    expect(skip).toHaveAttribute("href", `#${screen.getByRole("main").id}`);
  });

  it("marks the current page and reads counts with their meaning", () => {
    renderShell();
    const [sidebar, tabBar] = navigations();
    expect(within(sidebar).getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(within(tabBar).getByRole("link", { name: "Messages 2 unread" })).toBeInTheDocument();
  });

  it("renders the five bottom tabs from the designs, and grouped sidebar sections", () => {
    renderShell();
    const [, tabBar] = navigations();
    expect(
      within(tabBar)
        .getAllByRole("link")
        .map((l) => l.textContent?.trim()),
    ).toEqual(["Home", "Services", "Applications", "Messages 2 unread", "More"]);
    expect(screen.getByRole("list", { name: "My government" })).toBeInTheDocument();
  });
});
