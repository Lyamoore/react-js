
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store";
import { DogsContainer } from "..";

it("renders Dogs component", () => {
    const dogs = render(
      <Provider store={store}>
        <DogsContainer />
      </Provider>
    );
    expect(dogs).toMatchSnapshot();
  });