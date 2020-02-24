/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../_metronic";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";

import { tokenized } from '../../api';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  async componentDidMount() {
    var profile = await tokenized.get('/api/myself');
    
    this.setState({
      profile: profile.data
    });
  }

  render() {
    const { user, showHi, showAvatar, showBadge } = this.props;

    return (
      <Dropdown
        className="kt-header__topbar-item kt-header__topbar-item--user"
        drop="down"
        alignRight
      >
        <Dropdown.Toggle
          as={HeaderDropdownToggle}
          id="dropdown-toggle-user-profile"
        >
          <div
            className="kt-header__topbar-wrapper"
            data-toggle="dropdown"
            data-offset="10px,0px"
          >
            {showHi && (
              <span className="kt-header__topbar-welcome kt-hidden-mobile">
                Welcome,
              </span>
            )}

            {showHi && (
              <span className="kt-header__topbar-username kt-hidden-mobile">
                { this.state.profile && this.state.profile.name }
              </span>
            )}

            {showAvatar && user && <img alt="Pic" src={user && user.pic} />}

            {showBadge && user && (
              <span className="kt-header__topbar-icon">
                {/* TODO: Should get from currentUser */}
                <b>{user && user.fullname[0]}</b>
              </span>
            )}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          {/** ClassName should be 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl' */}
          <div
            className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/misc/bg-1.jpg")})`
            }}
          >
            <div className="kt-user-card__name">{this.state.profile && this.state.profile.name}</div>

          </div>
          <div className="kt-notification">
            <Link to="/profile" className="kt-notification__item">
              <div className="kt-notification__item-icon">
                <i className="flaticon2-calendar-3 kt-font-success" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  My
                </div>
                <div className="kt-notification__item-time">
                  Profile
                </div>
              </div>
            </Link>


            <div className="kt-notification__custom">
              <Link
                to="/logout"
                className="btn btn-label-brand btn-sm btn-bold"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default UserProfile;
