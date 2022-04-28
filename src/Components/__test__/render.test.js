import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer";
import Contact from "../Contact";
import Services from "../Service";

test("test", () => {
  expect(true).toBe(true);
});
test("should render footer component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

test("should render contact component", () => {
  render(<Contact />);
  const contactElement = screen.getByTestId("contact");
  expect(contactElement).toBeInTheDocument();
});

test("should render service component", () => {
    render(<Services />);
    const serviceElement = screen.getByTestId("service");
    expect(serviceElement).toBeInTheDocument();
  });
