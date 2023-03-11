import React from "react";
import "../styles/profile.css";
import Sidebar from "../components/sidebar";
import { BsArrowLeftShort } from "react-icons/bs";
import Profile from "../assets/profile.png";
import { BiCalendar } from "react-icons/bi";
import RightSiderBarProfile from "../components/rightSideBarProfile";
function profile() {
  return (
    <>
      <div className="profileContainer" style={{ backgroundColor: "black" }}>
        <Sidebar />
        <div className="profileMenu">
          <div className="headerProfile">
            <div className="sectionProfile">
              <BsArrowLeftShort className="icon" />
              <div className="headerSection">
                <span className="sectionName">Bayraaaaa</span>
                <br />
                <span className="sectionTweetNumber">4 tweets</span>
              </div>
            </div>
          </div>
          <div className="background">
            <div className="profilePicture">
              <img src={Profile} alt="" className="profile" />
            </div>
          </div>
          <div className="secondBackground">
            <div className="buttonContainer">
              <button className="button">Edit profile</button>
            </div>
            <div className="information">
              <p
                className="sectionName"
                style={{ marginTop: "15px", marginLeft: "20px" }}
              >
                bayraaaaa
              </p>
              <p
                className="sectionTweetNumber"
                style={{ marginLeft: "20px", marginTop: "3px" }}
              >
                @batbayar0913
              </p>
              <p
                className="sectionName"
                style={{
                  fontSize: "15px",
                  fontWeight: "300",
                  marginLeft: "23px",
                  marginTop: "14px",
                }}
              >
                i want to die
              </p>
              <div style={{ display: "flex", marginTop: 10, marginLeft: 19 }}>
                <BiCalendar
                  className="sectionTweetNumber"
                  style={{ fontSize: 17, marginRight: 3 }}
                />
                <p className="sectionTweetNumber">Joined May 2021</p>
              </div>
              <div style={{ display: "flex", marginTop: 10, marginLeft: 19 }}>
                <p className="sectionTweetNumber" style={{ color: "white" }}>
                  23
                </p>
                <p
                  className="sectionTweetNumber"
                  style={{ marginRight: 17, marginLeft: 5 }}
                >
                  Following
                </p>
                <p className="sectionTweetNumber" style={{ color: "white" }}>
                  0
                </p>
                <p className="sectionTweetNumber" style={{ marginLeft: 3 }}>
                  Followers
                </p>
              </div>
            </div>
            <div className="categoryProfile">
              <div className="tweetsCategory">
                <p className="sectionTweetNumber">Tweets</p>
              </div>
              <div className="tweetsRepliesCategory">
                <p className="sectionTweetNumber">Tweets&replies</p>
              </div>
              <div className="mediaCategory">
                <p className="sectionTweetNumber">Media</p>
              </div>
              <div className="LikesCategory">
                <p className="sectionTweetNumber">Likes</p>
              </div>
            </div>
          </div>
        </div>
        <RightSiderBarProfile />
      </div>
    </>
  );
}

export default profile;
