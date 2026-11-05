import { render, screen } from "@testing-library/react";
import { App, EXPERIENCE_NAME } from "./App";

describe("App (F1 institutional theme preview)", () => {
  it("renders a single level-one heading naming the experience", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(EXPERIENCE_NAME);
  });

  it("does not present itself as a live or operational service", () => {
    render(<App />);
    expect(screen.getByText(/not a live government service/i)).toBeInTheDocument();
  });

  it("renders the example table with an accessible name", () => {
    render(<App />);
    expect(screen.getByRole("table", { name: "Example items" })).toBeInTheDocument();
  });
});
