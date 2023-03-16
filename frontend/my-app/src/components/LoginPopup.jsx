import React from "react";
import "../styles/login.css";
import { IoMdClose } from "react-icons/io";
import twitterLogo from "../assets/twitterLogo.png";
import GoogleLogo from "../assets/googleLogo.png";
import AppleLogo from "../assets/Apple-Logo.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
function LoginPopup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/users/login", {
        email: email,
        password: password,
      });
      // console.log(res, "this");
      //   console.log(res.data.data._id);
      // window.localStorage.setItem("token", JSON.stringify(res.data.data.token));
      window.localStorage.setItem("id", JSON.stringify(res.data.data.name));
      window.localStorage.setItem("email", JSON.stringify(res.data.data.email));
      // console.log(res, "ahah");
      window.location.replace("/home");
      console.log(res.data.data.name, "ahahha");
      // localStorage.setItem("token");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
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
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "white", border: "0.5px solid gray" }}
              />
              <TextField
                className="loginPopupInput"
                id="filled-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  color: "white",
                  border: "0.5px solid gray",
                }}
              />
            </div>
            <div className="loginPopupFooterBtnContainer ">
              <button className="loginPopupFooterBtn" onClick={() => Login()}>
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
