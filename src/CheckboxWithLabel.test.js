import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

const CHECKBOX = "checkbox";
const LABEL = "label text";

it("works when clicked on the text", () => {
  const { getByText, getByTestId } = render(<CheckboxWithLabel />);

  fireEvent.click(getByText(LABEL));

  // fails
  expect(getByTestId(CHECKBOX).querySelector("input").checked).toBe(true);
});

it("works when clicked on the label", () => {
  const { getByText, getByTestId } = render(<CheckboxWithLabel />);

  fireEvent.click(getByTestId(CHECKBOX));

  expect(getByTestId(CHECKBOX).querySelector("input").checked).toBe(true);
});
