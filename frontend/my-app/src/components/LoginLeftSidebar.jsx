import React from "react";
import "../styles/login.css";
import twitterLogo from "../assets/twitterLogo.png";
import { FaHashtag } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";

function LoginLeftSidebar() {
  return (
    <>
      <div className="loginLeftSideBarContainer">
        <div className="leftSidebarCategoryContainer">
          {" "}
          <div className="leftSidebarIcon">
            {" "}
            <img src={twitterLogo} alt="" className="twitterLogoLeftSidebar" />
          </div>
          <div className="leftSidebarCategory">
            <FaHashtag style={{ color: "white", fontSize: "25px" }} />
            <span style={{ fontWeight: "bolder" }} className="leftSideBarText">
              Explore
            </span>
          </div>
          <div className="leftSidebarCategory">
            <RiSettings3Line style={{ color: "white", fontSize: "26px" }} />
            <span className="leftSideBarText">Settings</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginLeftSidebar;
