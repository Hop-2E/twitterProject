import React from "react";
import "../styles/login.css";
import { IoMdClose } from "react-icons/io";
import twitterLogo from "../assets/twitterLogo.png";
import GoogleLogo from "../assets/googleLogo.png";
import AppleLogo from "../assets/Apple-Logo.png";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignupPopup() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const SignUp = async () => {
    try {
      await axios.post("http://localhost:8000/users/signup", {
        password: password,
        email: email,
      });
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error(error.message);
    }
  };
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
            <div className="loginPopupMainInput">
              <TextField
                className="loginPopupInput"
                id="filled-basic"
                label="Phone, email, or username"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className="loginPopupInput"
                id="filled-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "white" }}
              />
            </div>
            <div className="secondSignupPopup">
              <button className="signupPopupMainbtn" onClick={() => SignUp()}>
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
      <ToastContainer />
    </>
  );
}

export default SignupPopup;
