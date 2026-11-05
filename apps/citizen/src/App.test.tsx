import { render, screen } from "@testing-library/react";
import { App, EXPERIENCE_NAME } from "./App";

describe("App (F1 design-system shell)", () => {
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

  it("shows the official-website banner with placeholder text, not a real government name", () => {
    render(<App />);
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      /tenant configuration/i,
    );
  });

  it("uses the citizen shell landmarks and bottom tabs", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getAllByRole("navigation", { name: "Main" })).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Skip to main content" })).toBeInTheDocument();
  });
});
