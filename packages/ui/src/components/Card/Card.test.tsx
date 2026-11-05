import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("becomes a region labelled by its title", () => {
    render(
      <Card title="Payments" titleLevel={3}>
        <p>Nothing due.</p>
      </Card>,
    );
    const region = screen.getByRole("region", { name: "Payments" });
    expect(region.tagName).toBe("SECTION");
    expect(screen.getByRole("heading", { level: 3, name: "Payments" })).toBeInTheDocument();
  });

  it("renders a plain container without a title", () => {
    render(
      <Card as="article" aria-label="Example">
        Content
      </Card>,
    );
    expect(screen.getByRole("article", { name: "Example" })).toBeInTheDocument();
    expect(screen.queryByRole("heading")).toBeNull();
  });
});
