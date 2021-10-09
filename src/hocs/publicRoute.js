import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { authenticatedSelector } from "../store/authenticated/selectors";
import { ROUTES } from "../routing/constants";

export default function PublicRoute({ ...rest }) {
  const authenticated = useSelector(authenticatedSelector);

  return !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.DOGS} />;
}