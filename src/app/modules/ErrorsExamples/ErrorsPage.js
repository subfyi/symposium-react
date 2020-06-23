import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorPage1 } from "./ErrorPage1";
import { ErrorPage2 } from "./ErrorPage2";
import { ErrorPage3 } from "./ErrorPage3";
import { ErrorPage4 } from "./ErrorPage4";
import { ErrorPage5 } from "./ErrorPage5";
import { ErrorPage6 } from "./ErrorPage6";

export default function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/error-v6" />
      <Route path="/error/error-v6" component={ErrorPage6} />
    </Switch>
  );
}
