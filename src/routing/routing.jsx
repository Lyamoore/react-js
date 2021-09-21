import { Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";

import { ProfileContainer } from "../screens/profile";
import { Main } from "../screens/main";
import { Chats } from "../screens/chats";
import { NoChat } from "../screens/no-chat";
import { Gists } from "../screens/gists";
import { ROUTES } from "./constants";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.PROFILE}>
        <ProfileContainer />
      </Route>
      <Route path={ROUTES.CHATS}>
        <Chats />
      </Route>
      <Route path={ROUTES.NO_CHAT}>
        <NoChat />
      </Route>
      <Route exact path={ROUTES.GISTS}>
        <Gists />
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
