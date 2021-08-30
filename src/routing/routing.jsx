import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "../screens/profile";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/'>
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}