import React from "react";
import "../styles/profile.css";
function rightBarFooter() {
  return (
    <>
      <div className="footerContainer">
        <span className="footerTexts">Terms of Service</span>&nbsp;
        <span className="footerTexts">Privacy Policy</span>&nbsp;
        <span className="footerTexts">Cookie Policy</span>
        <br />
        <span className="footerTexts">Accessibility</span>
        <span className="footerTexts">Ads info</span>
        <span className="footerTexts">More···</span>
        <br />
        <span className="footerTexts">© 2023 Twitter, Inc.</span>
      </div>
    </>
  );
}

export default rightBarFooter;
