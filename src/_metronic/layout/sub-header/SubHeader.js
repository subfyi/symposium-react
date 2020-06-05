/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {connect} from "react-redux";
import objectPath from "object-path";
import {withRouter} from "react-router-dom";
import * as builder from "../../ducks/builder";
import {LayoutContextConsumer} from "../LayoutContext";
import BreadCrumbs from "./components/BreadCrumbs";

function putZero(data) {
  if (data < 9) {
    return "0" + data;
  }

  return data.toString();
}

class SubHeader extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.renderedMins !== (new Date().getMinutes())) {
        this.forceUpdate();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      subheaderCssClasses,
      subheaderContainerCssClasses,
      subheaderMobileToggle
    } = this.props;

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var hours = new Date().getHours();
    var mins = new Date().getMinutes();

    this.renderedMins = mins;

    return (
        <div
            id="kt_subheader"
            className={`kt-subheader ${subheaderCssClasses} kt-grid__item`}
        >
          <div className={`kt-container ${subheaderContainerCssClasses}`}>
            <div className="kt-subheader__main">
              <LayoutContextConsumer>
                {({subheader: {title, breadcrumb}}) => (
                    <>
                      <h3 className="kt-subheader__title">
                        {subheaderMobileToggle && (
                            <button
                                className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                                id="kt_subheader_mobile_toggle"
                            >
                              <span/>
                            </button>
                        )}
                        {title}
                      </h3>
                      <BreadCrumbs items={breadcrumb}/>
                    </>
                )}
              </LayoutContextConsumer>
            </div>

            <div className="kt-subheader__toolbar">
              <div className="kt-subheader__wrapper">
                <a href="#" className="btn kt-subheader__btn-secondary">
                  {putZero(date) + '.' + putZero(month) + '.' + year} {hours}:{mins}
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = store => ({
  subheaderCssClasses: builder.selectors.getClasses(store, {
    path: "subheader",
    toString: true
  }),
  subheaderContainerCssClasses: builder.selectors.getClasses(store, {
    path: "subheader_container",
    toString: true
  }),
  config: store.builder.layoutConfig,
  menuConfig: store.builder.menuConfig,
  subheaderMobileToggle: objectPath.get(
      store.builder.layoutConfig,
      "subheader.mobile-toggle"
  )
});

export default withRouter(connect(mapStateToProps)(SubHeader));
