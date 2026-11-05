import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("names what is missing and offers a next step", () => {
    render(
      <EmptyState
        title="No applications yet"
        titleLevel={3}
        description="When you apply for a service it appears here."
        action={<a href="/services">Find a service</a>}
      />,
    );
    expect(
      screen.getByRole("heading", { level: 3, name: "No applications yet" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Find a service" })).toBeInTheDocument();
  });
});
