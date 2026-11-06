import { render, screen } from "@testing-library/react";
import { App, EXPERIENCE_NAME } from "./App";
import { TENANT } from "./tenant";

describe("App (F1 institutional theme preview)", () => {
  it("renders a single level-one heading naming the experience", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(EXPERIENCE_NAME);
  });

  it("does not present itself as a live or operational service", () => {
    render(<App />);
    expect(screen.getAllByText(/not a live government service/i).length).toBeGreaterThan(0);
  });

  it("renders the example table with an accessible name", () => {
    render(<App />);
    expect(screen.getByRole("table", { name: "Example items" })).toBeInTheDocument();
  });

  it("carries the tenant's official statement and lockup", () => {
    render(<App />);
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      TENANT.officialStatement,
    );
    expect(screen.getByRole("link", { name: TENANT.lockup.alt })).toHaveAttribute("href", "/");
  });
});
