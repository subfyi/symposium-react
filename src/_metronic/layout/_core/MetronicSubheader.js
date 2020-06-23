import React, {createContext, useState, useContext} from "react";
import { injectIntl } from "react-intl";

export function getBreadcrumbsAndTitle(menuId, pathName) {
  const result = {
    breadcrumbs: [],
    title: ""
  };
  const menu = document.getElementById(menuId);
  if (!menu) {
    return result;
  }


  const activeLinksArray = Array.from(menu.getElementsByClassName("active") || []);
  const activeLinks = activeLinksArray.filter(el => el.tagName === "A");
  if (!activeLinks) {
    return result;
  }

  activeLinks.forEach(link => {
    const titleSpans = link.getElementsByClassName("menu-text");
    if (titleSpans) {
      const titleSpan = Array.from(titleSpans).find(t => t.innerHTML);
      if (titleSpan) {
        result.breadcrumbs.push(
            {
              pathname: link.pathname,
              title: titleSpan.innerHTML
            }
        );
      }
    }
  });
  result.title = getTitle(result.breadcrumbs, pathName);
  return result;
}

export function getTitle(breadCrumbs, pathname) {
  if (!breadCrumbs || !pathname) {
    return "";
  }

  const item = breadCrumbs.find(b => b.pathname === pathname);
  if (!item) {
    return  "";
  }

  return  item.title;
}

const SubheaderContext = createContext();

export function useSubheader() {
  return useContext(SubheaderContext);
}

export const SubheaderConsumer = SubheaderContext.Consumer;

export function MetronicSubheaderProvider({ children }) {
  const [title, setTitle] = useState("");
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const value = { title, setTitle, breadcrumbs, setBreadcrumbs };
  return <SubheaderContext.Provider value={value}>{children}</SubheaderContext.Provider>;
}

class _SubHeaderManipulation extends React.Component {
  static contextType = SubheaderContext;

  componentDidMount() {
    this.context.setTitle(this.props.intl.formatMessage({ id: this.props.title }) + ((this.props.edit && ' ' + this.props.intl.formatMessage({ id: 'general.edit' }) ) || ''));
    this.context.setBreadcrumbs(this.props.breadcrumb.map((a, i) => ({
      ...a,
      title: 
        i === this.props.breadcrumb.length - 1 ? 
        this.props.intl.formatMessage({ id: this.props.title }) + ((this.props.edit && ' ' + this.props.intl.formatMessage({ id: 'general.edit' }) ) || '')
        : this.props.intl.formatMessage({ id: a.title })
    })));
  }

  render() {
    return this.props.children || null;
  }
}

export const SubHeaderManipulation = injectIntl(_SubHeaderManipulation);