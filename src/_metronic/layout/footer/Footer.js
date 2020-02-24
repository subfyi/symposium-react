/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import objectPath from "object-path";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../utils/utils";
import * as builder from "../../ducks/builder";

class Footer extends React.Component {
  render() {
    const today = new Date().getFullYear();
    const {
      footerSelfLayoutIsExtended,
      footerClasses,
      footerContainerClasses
    } = this.props;
    return (
      <div
        className={`kt-footer ${footerClasses} kt-grid__item`}
        id="kt_footer"
        style={{backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-2.jpg")})`}}
      >

        <div className="kt-footer__bottom" style={{backgroundColor: "transparent"}}>
          <div className={`kt-container ${footerContainerClasses}`}>
            <div className="kt-footer__wrapper">
              <div className="kt-footer__logo">
                <div className="kt-footer__copyright">
                  ISESER  &nbsp;&copy;&nbsp; {today} . &nbsp;<a href="https://sub.fyi" target="_blank">
                  Sub.fyi
                </a>

                </div>
              </div>
              <div className="kt-footer__menu">
                <a href="http://www.google.com.tr/search?hl=tr&q=ISESER" target="_blank">
                  G-Arama
                </a>
                <a href="http://www.iseser.com/siteinfo/iseser.com" target="_blank">
                  Alexa
                </a>
                <a target="_blank" href="https://iseser.com/contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  footerSelfLayoutIsExtended:
    objectPath.get(store.builder.layoutConfig, "footer.self.layout") ===
    "extended",
  footerClasses: builder.selectors.getClasses(store, {
    path: "footer",
    toString: true
  }),
  footerContainerClasses: builder.selectors.getClasses(store, {
    path: "footer_container",
    toString: true
  })
});

export default connect(mapStateToProps)(Footer);
