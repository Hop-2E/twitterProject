import React from "react";
import "../styles/header.css";
import twitterLogo from "../assets/twitterLogo.png";
// import { useState } from "react";
// import { CiImageOn } from "react-icons/ci";
// import { AiOutlineFileGif } from "react-icons/ai";
// import { BiPoll } from "react-icons/bi";
// import { BsEmojiSmile } from "react-icons/bs";
// import { GrSchedulePlay } from "react-icons/ai/gr";
// import { GrLocation } from "react-icons/gr";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerThird">
        <div className="headerFirst">
          <span className="headerText">someCategory</span>
        </div>
        <div className="headerSecond">
          <button className="headerBtn">
            <span className="headerText">For you</span>
          </button>
          <button className="headerBtn">
            <span className="headerText">Following</span>
          </button>
        </div>
      </div>
      <div className="headerSearchContainer">
        <div className="headerSearch">
          <img
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            src={twitterLogo}
            alt=""
          />
          <input
            className="headerInput"
            type="text"
            placeholder="What's happening?"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
