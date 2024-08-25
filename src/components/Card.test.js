import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card & given props", () => {
  render(<Card el={el} />);

  // 2. `img-recipe-n` (n merupakan value el.id dari props pada Card)
  const imgRecipe = screen.getByTestId(`img-recipe-${el.id}`);
  expect(imgRecipe).toHaveAttribute("src", el.image);
  expect(imgRecipe).toHaveAttribute("alt", el.name);

  // 3. `title-recipe-n`
  const titleRecipe = screen.getByTestId(`title-recipe-${el.id}`);
  expect(titleRecipe).toBeInTheDocument();
  expect(titleRecipe).toHaveTextContent(`${el.name}`);

  // 4. `rating-recipe-n`
  const ratingRecipe = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(ratingRecipe).toBeInTheDocument();
  expect(ratingRecipe).toHaveTextContent(`${el.rating}`);

  // 5. `link-recipe-n`
  const linkRecipe = screen.getByTestId(`link-recipe-${el.id}`);
  expect(linkRecipe).toHaveAttribute(
    "href",
    `https://dummyjson.com/recipes/${el.id}`
  );
});
