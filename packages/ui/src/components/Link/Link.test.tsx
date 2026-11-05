import { render, screen } from "@testing-library/react";
import { Link } from "./Link";
import { SkipLink } from "../SkipLink/SkipLink";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

describe("Link", () => {
  it("renders a link with its accessible name", () => {
    render(<Link href="/help">Help</Link>);
    expect(screen.getByRole("link", { name: "Help" })).toHaveAttribute("href", "/help");
  });

  it("marks external links and tells screen-reader users they open a new tab", () => {
    render(
      <Link href="https://example.org" external>
        Guidance
      </Link>,
    );
    const link = screen.getByRole("link", { name: "Guidance (opens in a new tab)" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

describe("SkipLink", () => {
  it("targets the main content by default", () => {
    render(<SkipLink />);
    expect(screen.getByRole("link", { name: "Skip to main content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
  });
});

describe("VisuallyHidden", () => {
  it("keeps text in the accessibility tree", () => {
    render(
      <button type="button">
        <span aria-hidden="true">×</span>
        <VisuallyHidden>Remove file</VisuallyHidden>
      </button>,
    );
    expect(screen.getByRole("button", { name: "Remove file" })).toBeInTheDocument();
  });
});
