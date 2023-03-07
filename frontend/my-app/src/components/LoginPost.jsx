import React from "react";
import "../styles/login.css";
import { IoIosSearch } from "react-icons/io";
import { RiSettings3Line } from "react-icons/ri";

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
        <div className="loginPostMain"></div>
      </div>
    </>
  );
}

export default LoginPost;
