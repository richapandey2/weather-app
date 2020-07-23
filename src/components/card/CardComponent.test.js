import React from "react";
import { render, cleanup } from "@testing-library/react";
import CardComponent from "./CardComponent";

afterEach(cleanup);

test("should test card component", () => {
  const { asFragment } = render(<CardComponent />);
  expect(asFragment).toMatchSnapshot();
});
