import React from "react";
import "../styles/login.css";
import GoogleLogo from "../assets/googleLogo.png";
import AppleLogo from "../assets/Apple-Logo.png";

function LoginRightSidebar() {
  return (
    <>
      <div className="LoginRightSideBarContainer">
        <div className="LoginRightSidebarHeader">
          <span
            style={{
              color: "white",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            New to Twitter?
          </span>
        </div>
        <div className="LoginRightSidebarSecondHeader">
          <span className="rightSideBarGreytext">
            Sign up now to get your own personalized timeline!
          </span>
        </div>
        <div className="LoginRightSideBarMain">
          <button className="LoginRightSideBarMainbtn ">
            <div className="rightSidebarBtnContainer">
              <img className="loginRightSidebarImg" src={GoogleLogo} alt="" />
              <span className="rightSidebarText">Sign up with Google</span>
            </div>
          </button>
          <button className="LoginRightSideBarMainbtn">
            <div className="rightSidebarBtnContainer">
              <img className="loginRightSidebarImg" src={AppleLogo} alt="" />
              <span className="rightSidebarText">Sign up with Apple</span>
            </div>
          </button>
          <button className="LoginRightSideBarMainbtn">
            <span className="rightSidebarText">Create account</span>
          </button>
        </div>
        <div className="loginRightSidebarFooter">
          <span className="greyText">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </span>
        </div>
      </div>
    </>
  );
}

export default LoginRightSidebar;
