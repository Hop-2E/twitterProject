import React from "react";
import "../styles/login.css";
import LoginLeftSidebar from "./LoginLeftSidebar";
import LoginPost from "./LoginPost";
import LoginFooter from "./LoginFooter";
import LoginRightSidebar from "./LoginRightSidebar";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";

function Login() {
  return (
    <div className="loginPageContainer">
      {" "}
      {/* <LoginLeftSidebar />
      <LoginPost />
      <LoginRightSidebar /> */}
      <LoginFooter />
      {/* <SignupPopup /> */}
      <LoginPopup />
    </div>
  );
}

export default Login;
