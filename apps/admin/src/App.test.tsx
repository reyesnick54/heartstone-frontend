import { render, screen } from "@testing-library/react";
import { App, EXPERIENCE_NAME } from "./App";
import { TENANT } from "./tenant";

describe("App (F0 baseline)", () => {
  it("renders a single level-one heading naming the experience", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(EXPERIENCE_NAME);
  });

  it("does not present itself as a live or operational service", () => {
    render(<App />);
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      /not a live government service/i,
    );
  });

  it("carries the tenant's official statement and lockup", () => {
    render(<App />);
    expect(screen.getByRole("region", { name: "Official website notice" })).toHaveTextContent(
      TENANT.officialStatement,
    );
    expect(screen.getByRole("link", { name: TENANT.lockup.alt })).toHaveAttribute("href", "/");
  });
});
