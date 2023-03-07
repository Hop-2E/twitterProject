import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/login.css";
import { TbSettings } from "react-icons/tb";
function LoginPost() {
  return (
    <>
      <div className="loginPostContainer">
        <div className="loginSearch">
          <div className="loginInputContainer">
            <div className="loginInputIcon">
              <AiOutlineSearch style={{ color: "grey", fontSize: "25px" }} />
            </div>
            <input
              className="loginInput"
              placeholder="Search Twitter"
              type="text"
              name=""
              id=""
            />
          </div>
          <div
            style={{
              width: "56px",
              height: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <TbSettings style={{ color: "white", fontSize: "25px" }} />{" "}
          </div>
        </div>
        <div className="loginHeader">
          <h1 style={{ color: "white" }}>Trends for you</h1>
        </div>
        <div className="loginMainPost">
          <div className="postText1">
            <span>Politics Trendings</span>
          </div>
          <div>
            <span className="loginPostName">@name</span>
          </div>
          <div>
            <span className="loginPostNmbr">696969k</span>
          </div>
        </div>
        <div className="loginMainPost">
          <div className="postText1">
            <span>Politics Trendings</span>
          </div>
          <div>
            <span className="loginPostName">@name</span>
          </div>
          <div>
            <span className="postText1">696969k</span>
          </div>
        </div>
        <div className="loginMainPost">
          <div className="postText1">
            <span>Politics Trendings</span>
          </div>
          <div>
            <span className="loginPostName">@name</span>
          </div>
          <div>
            <span className="postText1">696969k</span>
          </div>
        </div>
        <div className="loginMainPost">
          <div className="postText1">
            <span>Politics Trendings</span>
          </div>
          <div>
            <span className="loginPostName">@name</span>
          </div>
          <div>
            <span className="postText1"> 696969k</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPost;
