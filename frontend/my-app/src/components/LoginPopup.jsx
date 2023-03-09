import React from "react";
import "../styles/login.css";
import { IoMdClose } from "react-icons/io";
import twitterLogo from "../assets/twitterLogo.png";
import GoogleLogo from "../assets/googleLogo.png";
import AppleLogo from "../assets/Apple-Logo.png";
import TextField from "@mui/material/TextField";

function LoginPopup() {
  return (
    <>
      <div className="loginPopupContainer">
        <div className="loginPopupHeader">
          <div className="loginPopupIcon">
            <IoMdClose style={{ color: "white", fontSize: "24px" }} />
          </div>
          <img className="twitterLogoSidebar" src={twitterLogo} alt="" />
        </div>
        <div className="loginPopupMainContainer">
          <div className="loginPopupMain">
            <span
              style={{
                color: "white",
                fontSize: "35px",
                fontFamily: " Verdana, Geneva, Tahoma , sans-serif",
              }}
            >
              Join Twitter today
            </span>
            <div className="loginPopup">
              <button className="loginPopupMainbtn ">
                <div className="loginPopupBtnContainer">
                  <img className="loginPopupImg" src={GoogleLogo} alt="" />
                  <span className="loginPopupText">Sign up with Google</span>
                </div>
              </button>
            </div>
            <div
              style={{
                color: "white",
                fontFamily: " Verdana, Geneva, Tahoma , sans-serif",
                fontSize: "15px",
              }}
            >
              or
            </div>
            <div className="loginPopupMainInput">
              <TextField
                className="loginPopupInput"
                id="filled-basic"
                label="Phone, email, or username"
                variant="filled"
              />
              <TextField
                className="loginPopupInput"
                id="filled-basic"
                label="Password"
                variant="filled"
              />
            </div>
            <div className="loginPopupFooterBtnContainer ">
              <button className="loginPopupFooterBtn">
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Login
                </span>
              </button>
            </div>
            <div className="loginPopupFooterBtnContainer ">
              <button className="loginPopup2FooterBtn">
                <span className="whiteText">Forgot password?</span>
              </button>
            </div>
            <div className="loginPopupMiniFooter">
              <span className="greyText">Don't have an account?</span>
              <span className="blueText">Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
