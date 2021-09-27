import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "../routing/constants";


export default function PublicRoute({ authenticated, ...rest }) {
  return !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.CHATS} />;
}