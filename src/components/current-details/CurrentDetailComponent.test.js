import React from "react";
import { render, cleanup } from "@testing-library/react";
import CurrentDetailsComponent from "./CurrentDetailsComponent";
import { testStore } from "../../utils/test.util";

afterEach(cleanup);

test("should test current details component", () => {
  const store = testStore();
  const { asFragment } = render(<CurrentDetailsComponent store={store} />);
  expect(asFragment).toMatchSnapshot();
});
