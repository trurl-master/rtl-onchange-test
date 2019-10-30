import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

const CHECKBOX = "checkbox";
const LABEL = "label text";

it("checks!", () => {
  const { getByText, getByTestId } = render(<CheckboxWithLabel />);

  fireEvent.click(getByText(LABEL));

  expect(getByTestId(CHECKBOX).querySelector("input").checked).toBe(true);
});
