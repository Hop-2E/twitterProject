import React from "react";
import "../styles/login.css";
import { IoIosSearch } from "react-icons/io";
import { RiSettings3Line } from "react-icons/ri";
import { RiMoreFill } from "react-icons/ri";

function LoginPost() {
  return (
    <>
      <div className="loginPostContainer">
        <div className="loginPostHeader">
          <div className="loginPostSearchContainer">
            <div className="loginPostSearchIcon">
              <IoIosSearch style={{ color: "grey", fontSize: "27px" }} />
            </div>
            <input
              type="text"
              name=""
              id=""
              className="loginPostInput"
              placeholder="Search Twitter"
            />
          </div>
          <div className="loginHeaderIcon">
            <RiSettings3Line
              style={{ height: "22px", width: "22px", color: "white" }}
            />
          </div>
        </div>
        <div className="loginSecondHeader">
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            }}
          >
            Trends for you
          </span>
        </div>
        <div className="loginPostMain">
          <div>
            <div className="loginMainFirstText">
              <span className="greyText"> Only on Twitter · Trending </span>
              <div className="loginMainIconContainer">
                <RiMoreFill className="greyText" />
              </div>
            </div>
            <div
              style={{
                height: "20px",
                width: "566px",
              }}
            >
              <span className="whiteText">#ガルパ高校卒業式</span>
            </div>
            <div
              style={{
                height: "16px",
                width: "566px",
              }}
            >
              <span className="greyText">6969k Tweets</span>
            </div>
          </div>
        </div>
        <div className="loginPostMain">
          <div>
            <div className="loginMainFirstText">
              <span className="greyText"> Only on Twitter · Trending </span>
              <div className="loginMainIconContainer">
                <RiMoreFill className="greyText" />
              </div>
            </div>
            <div
              style={{
                height: "20px",
                width: "566px",
              }}
            >
              <span className="whiteText">#ガルパ高校卒業式</span>
            </div>
            <div
              style={{
                height: "16px",
                width: "566px",
              }}
            >
              <span className="greyText">6969k Tweets</span>
            </div>
          </div>
        </div>
        <div className="loginPostMain">
          <div>
            <div className="loginMainFirstText">
              <span className="greyText"> Only on Twitter · Trending </span>
              <div className="loginMainIconContainer">
                <RiMoreFill className="greyText" />
              </div>
            </div>
            <div
              style={{
                height: "20px",
                width: "566px",
              }}
            >
              <span className="whiteText">#ガルパ高校卒業式</span>
            </div>
            <div
              style={{
                height: "16px",
                width: "566px",
              }}
            >
              <span className="greyText">6969k Tweets</span>
            </div>
          </div>
        </div>
        <div className="loginPostMain">
          <div>
            <div className="loginMainFirstText">
              <span className="greyText"> Only on Twitter · Trending </span>
              <div className="loginMainIconContainer">
                <RiMoreFill className="greyText" />
              </div>
            </div>
            <div
              style={{
                height: "20px",
                width: "566px",
              }}
            >
              <span className="whiteText">#ガルパ高校卒業式</span>
            </div>
            <div
              style={{
                height: "16px",
                width: "566px",
              }}
            >
              <span className="greyText">6969k Tweets</span>
            </div>
          </div>
        </div>
        <div className="loginMiniFooter">
          <span className="blueText">Show more</span>
        </div>
      </div>
    </>
  );
}

export default LoginPost;
