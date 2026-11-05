import { render, screen } from "@testing-library/react";
import { StatGrid, StatTile } from "./StatTile";

describe("StatTile", () => {
  it("reads the count and label as one link name, inside a labelled list", () => {
    render(
      <StatGrid label="At a glance">
        <StatTile value={3} label="Active applications" href="/applications" />
        <StatTile value={0} label="Appeals open" />
      </StatGrid>,
    );
    expect(screen.getByRole("list", { name: "At a glance" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "3 Active applications" })).toHaveAttribute(
      "href",
      "/applications",
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
