import React from "react";
import { render, cleanup } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";

afterEach(cleanup);

test("should test header component", () => {
  const { asFragment } = render(<HeaderComponent />);
  expect(asFragment).toMatchSnapshot();
});
