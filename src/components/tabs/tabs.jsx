import { AppBar, Tabs as MaterialTabs, Tab } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";

import { ROUTES } from "../../routing/constants";
import { Routing } from "../../routing";

import "./tabs.css";

export const Tabs = () => {
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
          <Link to={ROUTES.GISTS} className="Link1">
            <Tab label="Gists" />
          </Link>
        </MaterialTabs>
        <Routing />
      </AppBar>
    </BrowserRouter>
  );
};
