import { render, screen } from "@testing-library/react";
import { Cluster, Stack } from "./Layout";

describe("Stack and Cluster", () => {
  it("render semantic elements via `as` without adding roles", () => {
    render(
      <Stack as="section" aria-label="Summary" gap="6">
        <Cluster as="ul" aria-label="Actions">
          <li>One</li>
          <li>Two</li>
        </Cluster>
      </Stack>,
    );
    expect(screen.getByRole("region", { name: "Summary" })).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Actions" }).children).toHaveLength(2);
  });

  it("apply gap, alignment and justification classes", () => {
    render(
      <Cluster data-testid="c" gap="4" align="start" justify="between">
        x
      </Cluster>,
    );
    const className = screen.getByTestId("c").className;
    expect(className).toMatch(/gap-4/);
    expect(className).toMatch(/align-start/);
    expect(className).toMatch(/justify-between/);
  });
});
