import { render, screen } from "@testing-library/react";
import { App, EXPERIENCE_NAME } from "./App";

describe("App (F0 baseline)", () => {
  it("renders a single level-one heading naming the experience", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(EXPERIENCE_NAME);
  });

  it("does not present itself as a live or operational service", () => {
    render(<App />);
    expect(screen.getByText(/not a live government service/i)).toBeInTheDocument();
  });
});
