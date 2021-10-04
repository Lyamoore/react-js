import { AppBar, Tabs as MaterialTabs, Tab, Button } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { exitFirebaseThunkAction } from "../../store/authenticated/action";
import { ROUTES } from "../../routing/constants";
import { Routing } from "../../routing";

import "./tabs.css";

export const Tabs = () => {
  const dispatch = useDispatch();

  const handleExit = useCallback(() => {
    dispatch(exitFirebaseThunkAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppBar position="static">
        <MaterialTabs className="Tabs">
          <Link to={ROUTES.MAIN} className="Link1">
            <Tab label="Main" />
          </Link>
          <Link to={ROUTES.CHATS} className="Link1">
            <Tab label="Chats" />
          </Link>
          <Link to={ROUTES.PROFILE} className="Link1">
            <Tab label="Profile" />
          </Link>
          <Link to={ROUTES.DOGS} className="Link1">
            <Tab label="Dogs" />
          </Link>
          <Link to={ROUTES.SIGNIN} className="Link1">
            <Tab label="Sign in" />
          </Link>
          <Link to={ROUTES.SIGNUP} className="Link1">
            <Tab label="Sign up" />
          </Link>

          <Button
            variant="contained"
            color="primary"
            onClick={handleExit}
            className="profile__btn"
          >
            Exit
          </Button>
        </MaterialTabs>
        <Routing />
      </AppBar>
    </BrowserRouter>
  );
};
