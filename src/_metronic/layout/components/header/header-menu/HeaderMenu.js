/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";
import MenuConfig from '../../../../../app/MenuConfig';
import { FormattedMessage } from "react-intl";

class AutoLink extends React.Component {
    render() {
        const { to } = this.props;

        if (to.indexOf("http:") === 0 || to.indexOf("https:") === 0) {
            return <a href={to} {...this.props} to={null} />
        }

        return <NavLink {...this.props} to={"/" + to} />;
    }
}

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>

            { 
                MenuConfig.header.items
                    .map((a, i) => {
                        if (a.submenu) {
                            if(a.submenu.type === "mega") {
                                return <li
                                    key={i}
                                    data-menu-toggle={layoutProps.menuDesktopToggle}
                                    aria-haspopup="true"
                                    className={`menu-item menu-item-submenu menu-item-rel`}>
                                    <NavLink className="menu-link menu-toggle" to="/">
                                        <span className="menu-text">
                                            <FormattedMessage id={ a.title } />
                                        </span>
                                        <i className="menu-arrow" />
                                    </NavLink>
                                    
                                    <div className="menu-submenu menu-submenu-fixed menu-submenu-left">
                                        <div className="menu-subnav">
                                            <ul className="menu-content">
                                                { a.submenu.columns.map((b,i) => <li key={i} className="menu-item">
                                                    <ul className="menu-inner">
                                                        { b.items.map((b,i) => <li key={i} className={`menu-item ${getMenuItemActive('/' + b.page)}`}>
                                                            <AutoLink className="menu-link" to={b.page}>
                                                                <span className="menu-text"><FormattedMessage id={ b.title } /></span>
                                                            </AutoLink>
                                                        </li>) }
                                                    </ul>
                                                </li>
                                                ) }
                                            </ul>   
                                        </div>
                                    </div>
                                </li>;
                            }

                            return <li
                                key={i}
                                data-menu-toggle={layoutProps.menuDesktopToggle}
                                aria-haspopup="true"
                                className={`menu-item menu-item-submenu menu-item-rel`}>
                                <NavLink className="menu-link menu-toggle" to="/">
                                    <span className="menu-text">
                                        <FormattedMessage id={ a.title } />
                                    </span>
                                    <i className="menu-arrow" />
                                </NavLink>
                                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                    <ul className="menu-subnav">
                                        { a.submenu.map((b,i) => <li key={i} className={`menu-item ${getMenuItemActive('/' + b.page)}`}>
                                            <AutoLink className="menu-link" to={b.page}>
                                                <span className="menu-text"><FormattedMessage id={ b.title } /></span>
                                            </AutoLink>
                                        </li>)}
                                    </ul>
                                </div>
                            </li>;
                        }

                        if (a.type === "single") {
                            return <li className={`menu-item menu-item-rel ${getMenuItemActive('/' + a.page)}`}>
                                <AutoLink className="menu-link" to={a.page}>
                                    <span className="menu-text">
                                            <FormattedMessage id={a.title}/></span>
                                    <i className="menu-arrow"/>
                                </AutoLink>
                            </li>;
                        } else return null
                    })
                    .filter(a => !!a)
            }
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
