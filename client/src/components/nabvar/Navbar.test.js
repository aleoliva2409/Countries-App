import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("testing component", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should has my nick", () => {
    component.getByText("By aleoliva2409");
  });
  test("should has 'Home' in nabvar component", () => {
    component.getByText("Home");
  });
  test("should has 'Home' in nabvar component", () => {
    component.getByText("Activities");
  });
});
