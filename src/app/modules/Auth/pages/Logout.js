import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../../api";

class Logout extends Component {
  componentDidMount() {
    logout();
  }

  render() {
    return <Redirect to="/auth/login" />;
  }
}

export default Logout;
