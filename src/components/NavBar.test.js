import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

test("renders the component Navbar", () => {
  render(<NavBar />);

  // 10. `my-recipe`
  const myRecipe = screen.getByTestId("my-recipe");
  expect(myRecipe).toBeInTheDocument();
  expect(myRecipe).toHaveTextContent("My Recipe");

  // 11. `form-search`
  const formSearch = screen.getByTestId("form-search");
  expect(formSearch).toBeInTheDocument();

  const recipeName = screen.getByPlaceholderText("Recipe Name");
  expect(recipeName).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /search/i });
  expect(button).toBeInTheDocument();
});
