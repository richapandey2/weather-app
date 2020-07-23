import React from "react";
import { render, cleanup } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

afterEach(cleanup);

test("should test error component", () => {
  const { asFragment } = render(<ErrorComponent />);
  expect(asFragment).toMatchSnapshot();
});
