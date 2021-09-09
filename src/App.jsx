import { Provider } from "react-redux";

import { Tabs } from "./components/tabs";
import { store } from "./store";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Tabs />
      </Provider>
    </div>
  );
};

export default App;
