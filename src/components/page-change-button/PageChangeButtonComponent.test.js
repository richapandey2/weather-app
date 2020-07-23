import React from "react";
import { render, cleanup } from "@testing-library/react";
import PageChangeButtonComponent from "./PageChangeButtonComponent";
import { testStore } from "../../utils/test.util";

afterEach(cleanup);

test("should test page change button component", () => {
  const store = testStore();
  const wrapper = render(<PageChangeButtonComponent store={store} />);
  expect(wrapper.asFragment).toMatchSnapshot();
});
