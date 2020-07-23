import React from "react";
import { render, cleanup } from "@testing-library/react";
import LoadingComponent from "./LoadingComponent";

afterEach(cleanup);

test("should test Loading component", () => {
  const { asFragment } = render(<LoadingComponent />);
  expect(asFragment).toMatchSnapshot();
});
