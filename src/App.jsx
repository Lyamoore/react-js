import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import firebase from "firebase";

import { authedThunkAction } from "./store/authenticated/action";
import { Tabs } from "./components/tabs";
import { persistor } from "./store";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(authedThunkAction(user));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <PersistGate
        persistor={persistor}
        loading={<CircularProgress className="Loading" />}
      >
        <Tabs />
      </PersistGate>
    </div>
  );
};

export default App;
