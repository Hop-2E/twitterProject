import React from "react";
import twitterLogo from "../assets/twitterLogo.png";
import "../styles/sidebar.css";
import { RiHomeHeartFill } from "react-icons/ri";

function sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <img src={twitterLogo} alt="" className="twitterLogoSidebar" />
        <RiHomeHeartFill className="sidebarHomeIcon" />
        <span className="sideBarCategoryTexts">Home</span>
      </div>
    </>
  );
}

export default sidebar;
