import { render, screen } from "@testing-library/react";
import { OfficialMark } from "./OfficialMark";

describe("OfficialMark", () => {
  it("is a labelled region showing only the statement it is given", () => {
    render(
      <OfficialMark
        statement="[OFFICIAL WEBSITE STATEMENT]"
        learnMoreHref="/official"
        aside="Development build. Not a live government service."
      />,
    );
    const region = screen.getByRole("region", { name: "Official website notice" });
    expect(region).toHaveTextContent("[OFFICIAL WEBSITE STATEMENT]");
    expect(screen.getByRole("link", { name: "How to tell" })).toHaveAttribute("href", "/official");
  });

  it("contains no hard-coded government or programme name", () => {
    const { container } = render(<OfficialMark statement="X" />);
    expect(container.textContent).toBe("X");
  });
});
