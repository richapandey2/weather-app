import React from "react";
import { render, cleanup } from "@testing-library/react";
import BarChartComponent from "./BarChartComponent";

afterEach(cleanup);

test("should test bar chart component", () => {
  const chartDetail = [{ time: "00:00", temp: 20 }];
  const { asFragment } = render(
    <BarChartComponent chartDetails={chartDetail} />
  );
  expect(asFragment).toMatchSnapshot();
});
