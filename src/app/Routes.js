/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "../_metronic/layout";
import { is_logged_in, onLoggedIn } from "./api";
import BasePage from "./BasePage";
import { AuthPage, Logout } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";


export function Routes() {
    const [ isAuthorized, setIsLoggedIn ] = useState(is_logged_in());

    onLoggedIn(setIsLoggedIn);

    return (
        <Switch>
            {!isAuthorized ? (
                /*Render auth page when user at `/auth` and not authorized.*/
                <Route>
                    <AuthPage />
                </Route>
            ) : (
                /*Otherwise redirect to root page (`/`)*/
                <Redirect from="/auth" to="/"/>
            )}

            <Route path="/error" component={ErrorsPage}/>
            <Route path="/logout" component={Logout}/>


            {!isAuthorized ? (
                /*Redirect to `/auth` when user is not authorized*/
                <Redirect to="/auth/login"/>
            ) : (
                <Layout>
                    <BasePage/>
                </Layout>
            )}
        </Switch>
    );
}
