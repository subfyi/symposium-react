import React, {useMemo} from "react";
import {useHtmlClassService} from "../../_core/MetronicLayout";

export function Footer() {
  const today = new Date().getFullYear();
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      footerClasses: uiService.getClasses("footer", true),
      footerContainerClasses: uiService.getClasses("footer_container", true)
    };
  }, [uiService]);

  return (
    <div
      className={`footer bg-white py-4 d-flex flex-lg-column  ${layoutProps.footerClasses}`}
      id="kt_footer"
    >
      <div
        className={`${layoutProps.footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className="text-dark order-2 order-md-1">
          ISESER{" "}<span className="text-muted font-weight-bold mr-2">{today.toString()}</span>{" "}&copy;{" "}
          <a
            href="https://sub.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-75 text-hover-primary"
          >
          Sub.fyi
          </a>. All Rights Reserved.
        </div>
        <div className="nav nav-dark order-1 order-md-2">

          <a
            href="http://www.google.com.tr/search?hl=tr&q=ISESER"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pr-3 pl-0"
          >
            G-Search
          </a>
          <a
            href="http://www.alexa.com/siteinfo/iseser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link px-3"
          >
            Alexa
          </a>
          <a
              href="https://iseser.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pl-3 pr-0"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
