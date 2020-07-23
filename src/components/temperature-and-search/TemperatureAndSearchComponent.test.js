import React from "react";
import { render, cleanup } from "@testing-library/react";
import TemperatureAndSearchComponent from "./TemperatureAndSearchComponent";

afterEach(cleanup);

test("sholud test temperature and search component", () => {
  const { asFragment } = render(<TemperatureAndSearchComponent />);
  expect(asFragment).toMatchSnapshot();
});
