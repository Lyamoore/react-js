import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { authenticatedSelector } from "../store/authenticated/selectors";
import PrivateRoute from "../hocs/privateRoute";
import PublicRoute from "../hocs/publicRoute";
import { ProfileContainer } from "../screens/profile";
import { MainContainer } from "../screens/main";
import { ChatsContainer } from "../screens/chats";
import { DogsContainer } from "../screens/dogs";
import { SignupContainer } from "../screens/signup";
import { SigninContainer } from "../screens/signin";
import { NotFound } from "../screens/not-found";
import { ROUTES } from "./constants";

export const Routing = () => {
  const authenticated = useSelector(authenticatedSelector);

  return (
    <Switch>
      <PublicRoute exact authenticated={authenticated} path={ROUTES.MAIN}>
        <MainContainer />
      </PublicRoute>

      <PublicRoute exact authenticated={authenticated} path={ROUTES.SIGNIN}>
        <SigninContainer />
      </PublicRoute>

      <PublicRoute exact authenticated={authenticated} path={ROUTES.SIGNUP}>
        <SignupContainer />
      </PublicRoute>

      <PrivateRoute exact authenticated={authenticated} path={ROUTES.PROFILE}>
        <ProfileContainer />
      </PrivateRoute>

      <PrivateRoute authenticated={authenticated} path={ROUTES.CHATS}>
        <ChatsContainer />
      </PrivateRoute>

      <PrivateRoute exact authenticated={authenticated} path={ROUTES.DOGS}>
        <DogsContainer />
      </PrivateRoute>

      <PrivateRoute path={ROUTES.NOT_FOUND} authenticated={authenticated}>
        <NotFound />
      </PrivateRoute>
      <PrivateRoute authenticated={authenticated}>
        <Redirect to={ROUTES.NOT_FOUND} />
      </PrivateRoute>
    </Switch>
  );
};
