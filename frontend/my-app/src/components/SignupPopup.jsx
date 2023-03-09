import React from "react";
import "../styles/login.css";
import { IoMdClose } from "react-icons/io";
import twitterLogo from "../assets/twitterLogo.png";
import GoogleLogo from "../assets/googleLogo.png";
import AppleLogo from "../assets/Apple-Logo.png";

function SignupPopup() {
  return (
    <>
      <div className="signupPopupContainer">
        <div className="signupPopupHeader">
          <div className="signupPopupIcon">
            <IoMdClose style={{ color: "white", fontSize: "24px" }} />
          </div>
          <img className="twitterLogoSidebar" src={twitterLogo} alt="" />
        </div>
        <div className="signupPopupMainContainer">
          <div className="signupPopupMain">
            <span
              style={{
                color: "white",
                fontSize: "35px",
                fontFamily: " Verdana, Geneva, Tahoma , sans-serif",
              }}
            >
              Join Twitter today
            </span>
            <div className="signupPopup">
              <button className="signupPopupMainbtn ">
                <div className="signupPopupBtnContainer">
                  <img className="signupPopupImg" src={GoogleLogo} alt="" />
                  <span className="signupPopupText">Sign up with Google</span>
                </div>
              </button>
              <button className="signupPopupMainbtn">
                <div className="signupPopupBtnContainer">
                  <img className="signupPopupImg" src={AppleLogo} alt="" />
                  <span className="signupPopupText">Sign up with Apple</span>
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
            <div className="secondSignupPopup">
              <button className="signupPopupMainbtn">
                <span className="signupPopupText">Create account</span>
              </button>
            </div>
            <div className="signupPopupMiniFooter">
              <span className="greyText">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </span>
            </div>

            <div className="signupPopupFooter">
              <span className="greyText">Have an account already?</span>
              <span className="blueText">Log in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPopup;
