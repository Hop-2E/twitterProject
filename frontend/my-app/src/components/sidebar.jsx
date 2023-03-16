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
import { BsThreeDots } from "react-icons/bs";
function Sidebar({ setVisible, visible }) {
  var x = localStorage.getItem("id");
  console.log(x, "lel");
  var v = localStorage.getItem("email");
  console.log(x, "lel");
  return (
    <>
      <div className="sidebarContainer">
        <div className="allCategoryContainer">
          <img src={twitterLogo} alt="" className="twitterLogoSidebar" />
          <Link to="/home" style={{ textDecoration: "none" }}>
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
          <Link to="/messages" style={{ textDecoration: "none" }}>
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
          <Link to="/profile" style={{ textDecoration: "none" }}>
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
          <button
            className="sidebarbtn"
            onClick={() => setVisible(!visible)}
            style={{ zIndex: "1002" }}
          >
            <span className="sideBarCategoryTexts"> Tweet</span>
          </button>
        </div>
        <div className="sidebarProfileContainer">
          <div className="sidebarAccPic"></div>
          <div className="nameUsernameDiv">
            <p className="bigName">{x}</p>
            <p className="smallName">@{v}</p>
          </div>
          <BsThreeDots className="threeDot" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
