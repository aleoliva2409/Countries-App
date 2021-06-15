import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

describe('testing app component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  })
  test("should has text in navbar", () => {
    expect(screen.queryByText("Go Home")).toBeInTheDocument();
  });
  test('should has text in principal page', () => {
    expect(screen.queryByText("Welcome")).toBeInTheDocument();
  })
  
})



