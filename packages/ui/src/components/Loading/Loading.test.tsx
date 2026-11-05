import { render, screen } from "@testing-library/react";
import { Loading, Skeleton } from "./Loading";

describe("Loading", () => {
  it("announces its label politely", () => {
    render(<Loading label="Loading applications" />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading applications");
  });

  it("hides skeleton shapes from assistive technology but keeps the label", () => {
    const { container } = render(
      <Loading label="Loading payments">
        <Skeleton width="60%" />
        <Skeleton shape="block" />
      </Loading>,
    );
    expect(screen.getByRole("status")).toHaveTextContent("Loading payments");
    expect(container.querySelectorAll("[aria-hidden='true']")).toHaveLength(2);
  });
});
