import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
describe("ATOMS | Button component", () => {
  it("should render a Link component", () => {
    render(<Button type="link">Click me</Button>);
    expect(screen.getByRole("link", { name: /click me/i })).toBeDefined();
  });
  
  it("should render as a button by default", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeDefined();
    expect(buttonElement).toHaveProperty("type", "button");
  });
  it("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me!</Button>,
    );
    const buttonElement = getByRole("button", { name: /click me!/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});