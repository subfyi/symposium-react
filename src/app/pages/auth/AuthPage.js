import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import { Helmet } from "react-helmet";
import { toAbsoluteUrl } from "../../../_metronic";
import "../../../_metronic/_assets/sass/pages/login/login-1.scss";

export default function AuthPage() {
  return (
    <>
      {/* https://github.com/nfl/react-helmet */}
      <Helmet>
        {/* <link
            type="text/css"
            rel="stylesheet"
            href={toAbsoluteUrl(
                "/assets/css/demo1/style.bundle.css"
            )}
        />
        <link
          type="text/css"
          rel="stylesheet"
          href={toAbsoluteUrl(
            "/assets/css/demo1/pages/login/login-1.css"
          )}
        /> */}
      </Helmet>

      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div
          id="kt_login"
          className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1"
        >
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
            <div
              className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside"
              style={{
                backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-7.jpg")})`
              }}
            >
              <div className="kt-grid__item">
                <Link to="/" className="kt-login__logo" >
                  <img
                    alt="Logo" className="w-100"
                    src={toAbsoluteUrl("/logos/logo.png")}
                  />
                </Link>
              </div>
              <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                <div className="kt-grid__item kt-grid__item--middle">
                  <h3 className="kt-login__title">ISESER2020</h3>
                </div>
              </div>
              <div className="kt-grid__item">
                <div className="kt-login__info">
                  <div className="kt-login__copyright">
                    © Made with ❤ <a target="_blank" href="https://sub.fyi/">Sub.fyi</a>.
                  </div>
                  <div className="kt-login__menu">
                    <a href="http://www.google.com.tr/search?hl=tr&q=ISESER" target="_blank">
                      G-Arama
                    </a>
                    <a target="_blank" href="https://iseser.com/contact" className="kt-link">
                      Contact
                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
              <Switch>
                <Redirect from="/auth" exact={true} to="/auth/login" />

                <Route path="/auth/login" component={Login} />
                <Link to="https://iseser.com/register" component={Registration} />

              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
