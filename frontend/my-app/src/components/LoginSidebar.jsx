import React from "react";
import twitterLogo from "../assets/twitterLogo.png";
import "../styles/sidebar.css";
import { RiHomeHeartFill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { TbSettings } from "react-icons/tb";

function Sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <div className="allCategoryContainer">
          <img src={twitterLogo} alt="" className="twitterLogoSidebar" />
          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <BiHash className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Explore</span>
            </div>
          </div>
          <div className="loginSidebarCategoryContainer">
            <div className="sidebarCategory">
              <TbSettings className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Settings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
