import { AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";

import { ROUTES } from "../../routing/constants";
import { Routing } from "../../routing";

import "./tabs.css";

export const SimpleTabs = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Tabs className="Tabs">
          <Link to={ROUTES.MAIN} className="Link1">
            <Tab label="Main" />
          </Link>
          <Link to={ROUTES.CHATS} className="Link1">
            <Tab label="Chats" />
          </Link>
          <Link to={ROUTES.PROFILE} className="Link1">
            <Tab label="Profile" />
          </Link>
        </Tabs>
        <Routing />
      </AppBar>
    </BrowserRouter>
  );
};
