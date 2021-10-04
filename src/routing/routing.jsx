import { Redirect, Switch } from "react-router-dom";

import PrivateRoute from "../hocs/privateRoute";
import PublicRoute from "../hocs/publicRoute";
import { Main } from "../screens/main";
import { SigninContainer } from "../screens/signin";
import { SignupContainer } from "../screens/signup";
import { ProfileContainer } from "../screens/profile";
import { ChatsContainer } from "../screens/chats";
import { DogsContainer } from "../screens/dogs";
import { NotFound } from "../screens/not-found";
import { ROUTES } from "./constants";

export const Routing = () => {
  return (
    <Switch>
      <PublicRoute exact path={ROUTES.MAIN}>
        <Main />
      </PublicRoute>

      <PublicRoute exact path={ROUTES.SIGNIN}>
        <SigninContainer />
      </PublicRoute>

      <PublicRoute exact path={ROUTES.SIGNUP}>
        <SignupContainer />
      </PublicRoute>

      <PrivateRoute path={ROUTES.PROFILE}>
        <ProfileContainer />
      </PrivateRoute>

      <PrivateRoute path={ROUTES.CHATS}>
        <ChatsContainer />
      </PrivateRoute>

      <PrivateRoute path={ROUTES.DOGS}>
        <DogsContainer />
      </PrivateRoute>

      <PrivateRoute path={ROUTES.NOT_FOUND}>
        <NotFound />
      </PrivateRoute>
      <PrivateRoute>
        <Redirect to={ROUTES.NOT_FOUND} />
      </PrivateRoute>
    </Switch>
  );
};
