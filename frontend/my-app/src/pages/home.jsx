import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";

import Post from "../components/Post";
import WriteMessage from "../components/WriteMessage";

import Header from "../components/Header";
import Login from "../components/Login";

import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import RightSideBarHome from "../components/rigthSideBarHome";

function home() {
  return (
    <>
      <div className="homeContainer">
        <SideBar />

        {/* <Post /> */}

        <div className="mainContentHome">
          <div className="homeContentHeader">
            <div className="pageNameDiv">
              <p className="pageNameHomeContainer">Home</p>
            </div>
            <div className="fypHome">
              <div className="fypHomeTextsDiv">
                <span className="fypHomeTexts">For you</span>
              </div>
              <div className="fypHomeTextsDiv">
                <span className="fypHomeTexts">Following</span>
              </div>
            </div>
          </div>
          <div className="homeTweet">
            <div className="homeTweetHeader">
              <div className="homeTweetHeaderHeader">
                <div className="homeTweetHeaderHeaderPic"></div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="homeTweetHeaderHeaderInput"
                  placeholder="What's happening?"
                />
              </div>
              <div className="homeTweetBottom">
                <div className="homeTweetBottomIconsDiv">
                  <div className="iconDiv">
                    <CiImageOn className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <HiOutlineGif className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    <BiPoll className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <BsEmojiSmile
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "17px", marginBottom: "2px" }}
                    />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <TbCalendarTime
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "19px", marginBottom: "2px" }}
                    />
                  </div>
                  <div className="iconDiv">
                    <HiOutlineLocationMarker
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "19px", marginBottom: "1px" }}
                    />
                  </div>
                </div>
                <div className="homeTweetButtonDiv">
                  <button className="homeTweetButton">Tweet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeRightSiderBar">
          <RightSideBarHome />
        </div>
      </div>
    </>
  );
}

export default home;
