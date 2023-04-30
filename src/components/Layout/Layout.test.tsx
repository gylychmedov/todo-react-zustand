import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("Layout test", () => {
  render(<Layout>Testing</Layout>);
  const textElement = screen.getByText("Testing");
  expect(textElement).toBeInTheDocument();
});
