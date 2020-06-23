/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { tokenized } from "../../../../app/api";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";

export class QuickUserToggler extends React.Component {
  state = { };
  
  async componentDidMount() {
    const data = await tokenized.get('/api/myself');
    this.setState({ user: data.data });
  }

  render() {
    if (!this.state.user)
      return null;

    return (<>
          <UserProfileDropdown user={this.state.user} />
        </>
    );
  }
}
