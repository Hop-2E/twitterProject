import React from "react";
import "../styles/search.css";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMoreLine } from "react-icons/ri";
import FollowBox from "./FollowBox";

function Search() {
  return (
    <div className="searchContainer">
      <div className="inputContainer">
        <div className="searchIcon">
          <AiOutlineSearch
            style={{ color: "white", height: "27px", width: "27px" }}
          />
        </div>
        <input
          className="mainInput"
          placeholder="Search Twitter"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="firstBoxContainer">
        <div className="mainBoxHeader">
          <h1 className="boxTitle">Trends for you</h1>
        </div>
        <div className="mainBox">
          <div className="firstText">
            <p style={{ color: "grey", fontSize: "13px" }}>
              Politics · Trending
            </p>
            <div className="mainBoxIcon">
              <RiMoreLine
                style={{ color: "grey", width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <div className="secondText">
            <p style={{ color: "white", fontSize: "15px" }}>Country</p>
          </div>
          <div className="thirdText">
            <p style={{ color: "grey", fontSize: "13px" }}>69k Tweets</p>
          </div>
        </div>
        <div className="mainBoxfooter">
          <span className="blueText">Show more</span>
        </div>
      </div>
      <div className="secondBoxContainer">
        <div className="mainBoxHeader">
          <h1 className="boxTitle">Who to follow</h1>
        </div>
        <div className="secondMainBox">
          <FollowBox />
          <FollowBox />
          <FollowBox />
        </div>
        <div className="mainBoxFooter">
          <span className="blueText">Show more</span>
        </div>
      </div>
      <div className="searchFooter">
        <a className="greyText" href="">
          Terms of Service
        </a>
        <a className="greyText" href="">
          Privacy Policy
        </a>
        <a className="greyText" href="">
          Cookie Policy
        </a>
        <a className="greyText" href="">
          Accessibility Ads info
        </a>
        <a className="greyText" href="">
          More...
        </a>
        <a className="greyText" href="">
          @2023 Twitter,Inc
        </a>
      </div>
    </div>
  );
}

export default Search;
