import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

import { Profile } from "../screens/profile";
import { Main } from "../screens/main";
import { Chats } from "../screens/chats";
import { Tabs } from "../components/tabs";
import { ROUTES } from "./constants";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Link to={ROUTES.PROFILE} component={} />
            <Link to={ROUTES.CHATS} component={} />
            <Link to={ROUTES.MAIN} component={} />
            <Switch>
                <Route 
                exact
                path={ROUTES.PROFILE}
                >
                    <Profile />
                </Route>
                <Route 
                exact
                path={ROUTES.CHATS}
                >
                    <Chats />
                </Route>
                <Route 
                exact
                path={ROUTES.MAIN}
                >
                    <Main />
                </Route>
                <Route 
                path={ROUTES.NOT_FOUND}
                >

                </Route>
                <Route>
                    <Redirect 
                    to={ROUTES.NOT_FOUND}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}