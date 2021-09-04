import { AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";

import { ROUTES } from "../../routing/constants";
import { Routing } from "../../routing";

import "./tabs.css";

export const SimpleTabs = () => {
  return (
    <BrowserRouter>
      <AppBar position="static" className="Tabs">
        <Tabs>
          <Link to={ROUTES.MAIN}>
            <Tab label="Main" />
          </Link>
          <Link to={ROUTES.CHATS}>
            <Tab label="Chats" />
          </Link>
          <Link to={ROUTES.PROFILE}>
            <Tab label="Profile" />
          </Link>
        </Tabs>
        <Routing />
      </AppBar>
    </BrowserRouter>
  );
};
