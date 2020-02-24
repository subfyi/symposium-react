/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as builder from "../../ducks/builder";
import { toAbsoluteUrl } from "../../utils/utils";

class Brand extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
  }

  render() {
    return (
      <div
        className={`kt-header__brand ${this.props.brandClasses} kt-grid__item`}
        id="kt_header_brand"
      >
        <Link to="" className="kt-header__brand-logo">
          <img
              alt="logo"
              src={toAbsoluteUrl("/logos/logo2.png")}
              className="kt-header__brand-logo-default w-75"
          />
          <img
              alt="logo"
              src={toAbsoluteUrl("/logos/logo2.png")}
              className="kt-header__brand-logo-sticky w-50"
          />
        </Link> <Link to="" className="text-white">
        2020
      </Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    brandClasses: builder.selectors.getClasses(store, {
      path: "brand",
      toString: true
    })
  };
};

export default connect(mapStateToProps)(Brand);
