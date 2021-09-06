import { Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";

import { Profile } from "../screens/profile";
import { Main } from "../screens/main";
import { Chats } from "../screens/chats";
import { ROUTES } from "./constants";
import { NoChat } from "../screens/no-chat";

export const Routing = () => {
  const [chats, setChats] = useState([]);

  return (
    <Switch>
      <Route exact path={ROUTES.PROFILE}>
        <Profile />
      </Route>
      <Route path={ROUTES.CHATS}>
        <Chats chats={chats} setChats={setChats} />
      </Route>
      <Route path={ROUTES.NO_CHAT}>
        <NoChat chats={chats} setChats={setChats} />
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
