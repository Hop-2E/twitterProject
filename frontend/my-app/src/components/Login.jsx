import React from "react";
import LoginSidebar from "./LoginSidebar";
import "../styles/login.css";
import LoginBox from "./LoginBox";
import LoginPost from "./LoginPost";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginSideBarContainer">
        <LoginSidebar />
      </div>
      <div className="loginPost">
        <LoginPost />
      </div>
      <div className="loginSideBarTwo">
        <LoginBox />
      </div>
      <div className="loginFooter">
        <div className="loginFooterMain">
          <div className="firstFooterMain">
            <span style={{ fontSize: "25px", color: "white" }}>
              Don’t miss what’s happening
            </span>
            <span style={{ color: "white", fontSize1: "15px" }}>
              People on Twitter are the first to know.
            </span>
          </div>
          <div className="secondFooterMain">
            <button className="loginBtnONe">
              <span style={{ color: "white", fontWeight: "bold" }}>Log In</span>
            </button>
            <button className="loginBtnTwo">
              <span style={{ color: "black", fontWeight: "bold" }}>
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
