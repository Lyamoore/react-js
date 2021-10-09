import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import "../services/firebase";
import { store } from "../store";
import { App } from "../App";


test("renders learn react App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});