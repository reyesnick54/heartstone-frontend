import { render, screen } from "@testing-library/react";
import { BrandLockup } from "./BrandLockup";

const image = { src: "/brand/example.png", width: 400, height: 100 };

describe("BrandLockup", () => {
  it("is a link whose accessible name is the image's alternative text", () => {
    render(<BrandLockup href="/" image={image} alt="Example platform" />);
    const link = screen.getByRole("link", { name: "Example platform" });
    expect(link).toHaveAttribute("href", "/");
    const img = screen.getByRole("img", { name: "Example platform" });
    expect(img).toHaveAttribute("src", "/brand/example.png");
    expect(img).toHaveAttribute("width", "400");
    expect(img).toHaveAttribute("height", "100");
  });

  it("contains no hard-coded name: only the alt text it is given", () => {
    const { container } = render(<BrandLockup href="/" image={image} alt="X" />);
    expect(container.textContent).toBe("");
    expect(container.querySelector("img")?.getAttribute("alt")).toBe("X");
  });
});
