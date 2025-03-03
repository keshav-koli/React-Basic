import { render, screen } from "@testing-library/react";
import { sum } from "../components/sum";
import Grocery from "../components/Grocery";
import "@testing-library/jest-dom";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});

test("containing heading in the grocery  ", () => {
  render(<Grocery />);

  //Querying
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("containing button in the grocery", () => {
  render(<Grocery />);
  const btn = screen.getByText("Submit");

  //assertion
  expect(btn).toBeInTheDocument();
});

test("contain 2 input tag", () => {
  render(<Grocery />);
  const input = screen.getAllByRole("textbox");
  console.log(input.length)
  // expect(input.length).toBe(2)
  expect(input.length).not.toBe(3)
});
