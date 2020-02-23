import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Create from "./Create";

export default function Index() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/siparisler/index"
                to="/siparisler/main"
            />

            <Route
                path="/siparisler/main"
                component={Main}
            />
            <Route
                path="/siparisler/create"
                component={Create}
            />
        </Switch>
    );
}
