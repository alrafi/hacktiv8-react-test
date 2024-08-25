import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("renders the component Card & given props", () => {
  render(<Footer />);

  // 6. `footer-text`
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent(
    "© 2024 Company, Inc. All rights reserved."
  );

  // 7. `link-facebook`
  const linkFacebook = screen.getByTestId("link-facebook");
  expect(linkFacebook).toHaveAttribute("href", "https://facebook.com");

  // 8. `link-x`
  const linkX = screen.getByTestId("link-x");
  expect(linkX).toHaveAttribute("href", "https://x.com");

  // 9. `link-instagram`
  const linkInstagram = screen.getByTestId("link-instagram");
  expect(linkInstagram).toHaveAttribute("href", "https://instagram.com/");
});
