import { Provider } from "react-redux";

import { SimpleTabs } from "./components/tabs";
import { store } from "./store";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <SimpleTabs />
      </Provider>
    </div>
  );
};

export default App;
