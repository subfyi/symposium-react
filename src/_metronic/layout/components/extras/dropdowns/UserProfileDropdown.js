/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import objectPath from "object-path";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import {toAbsoluteUrl} from "../../../../_helpers";
import {DropdownTopbarItemToggler} from "../../../../_partials/dropdowns";

export function UserProfileDropdown(props) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light: objectPath.get(uiService.config, "extras.user.dropdown.style") === "light",
    };
  }, [uiService]);

  return (
      <Dropdown drop="down" alignRight>
        <Dropdown.Toggle
            as={DropdownTopbarItemToggler}
            id="dropdown-toggle-user-profile"
        >
          <div className={"btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"}>
            <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
            <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                    { props.user.name + " "  +  props.user.surname}
            </span>
            <span className="symbol symbol-35 symbol-light-success">            
              <span className="symbol-label font-size-h5 font-weight-bold">{props.user.name[0]}</span>
            </span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu
            className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          <>
            {!layoutProps.light && (
                <div
                    className="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
                    style={{
                      backgroundImage: `url(${toAbsoluteUrl("/media/misc/bg-1.jpg")})`
                    }}
                >
                  <div className="symbol bg-white-o-15 mr-3">
                    <span className="symbol-label text-success font-weight-bold font-size-h4">{props.user.name[0]}</span>
                  </div>
                  <div className="text-white m-0 flex-grow-1 mr-3 font-size-h5">
                    { props.user.name + " "  +  props.user.surname}
                  </div>
                </div>
            )}
          </>

          <div className="navi navi-spacer-x-0 pt-5">
            <Link  to="/profile" className="navi-item px-8">
              <div className="navi-link">
                <div className="navi-icon mr-2">
                  <i className="flaticon2-calendar-3 text-success"/>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">
                    My Profile
                  </div>
                  <div className="text-muted">
                    Account settings
                  </div>
                </div>
              </div>
            </Link>

            <div className="navi-separator mt-3"></div>

            <div className="navi-footer  px-8 py-5">
              <Link to="/logout" className="btn btn-light-primary font-weight-bold">
                Sign Out
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
  );
}
