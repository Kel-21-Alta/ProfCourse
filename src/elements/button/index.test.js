import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";
/* eslint-disable */
test("Shound be show span n disable", () => {
  const { container } = render(<Button isDisabled />);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Shound be is loading, must render loading or spin", () => {
  const { container, getByText } = render(<Button isLoading />);
  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Button link or ext, must be render tag a", () => {
  const { container } = render(<Button type="link" isExternal />);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Button link or ext, must be render tag Link", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" />{" "}
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
