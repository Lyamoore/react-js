import { Redirect, Route, Switch } from "react-router-dom";

import { Profile } from "../screens/profile";
import { Main } from "../screens/main";
import { Chats } from "../screens/chats";
import { ROUTES } from "./constants";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.PROFILE}>
        <Profile />
      </Route>
      <Route exact path={ROUTES.CHATS}>
        <Chats />
      </Route>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.NOT_FOUND}></Route>
      <Route>
        <Redirect to={ROUTES.NOT_FOUND} />
      </Route>
    </Switch>
  );
};
