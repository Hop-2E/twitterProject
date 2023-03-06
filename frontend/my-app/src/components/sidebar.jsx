import React from "react";
import twitterLogo from "../assets/twitterLogo.png";
import "../styles/sidebar.css";
import { RiHomeHeartFill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { RxBookmark } from "react-icons/rx";
import { MdListAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CgMore } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <div className="allCategoryContainer">
          <img src={twitterLogo} alt="" className="twitterLogoSidebar" />
          <Link to="/">
            <div className="sidebarCategoryContainer">
              <div className="sidebarCategory">
                <RiHomeHeartFill className="sidebarIcon" />
                <span className="sideBarCategoryTexts">Home</span>
              </div>
            </div>
          </Link>
          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <BiHash className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Explore</span>
            </div>
          </div>
          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <RiNotification4Line className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Notification</span>
            </div>
          </div>
          <Link to="/messages">
            <div className="sidebarCategoryContainer">
              <div className="sidebarCategory">
                <AiOutlineMail className="sidebarIcon" />
                <span className="sideBarCategoryTexts">Messages</span>
              </div>
            </div>
          </Link>

          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <RxBookmark className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Bookmarks</span>
            </div>
          </div>
          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <MdListAlt className="sidebarIcon" />
              <span className="sideBarCategoryTexts">Lists</span>
            </div>
          </div>
          <Link to="/profile">
            <div className="sidebarCategoryContainer">
              <div className="sidebarCategory">
                <CgProfile className="sidebarIcon" />
                <span className="sideBarCategoryTexts">Profile</span>
              </div>
            </div>
          </Link>
          <div className="sidebarCategoryContainer">
            <div className="sidebarCategory">
              <CgMore className="sidebarIcon" />
              <span className="sideBarCategoryTexts">More</span>
            </div>
          </div>
          <button className="sidebarbtn">
            <span className="sideBarCategoryTexts"> Tweet</span>
          </button>
        </div>
        <div className="sidebarProfileContainer">
          <CgProfile />
          <span>Name</span>
          <p>id000000000000</p>
          <CgMore />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
