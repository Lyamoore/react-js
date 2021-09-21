import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import { Provider } from "react-redux";

import { Tabs } from "./components/tabs";
import { persistor, store } from "./store";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={<CircularProgress className="Loading" />}
        >
          <Tabs />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
