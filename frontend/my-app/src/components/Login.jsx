import React from "react";
import "../styles/login.css";
import LoginLeftSidebar from "./LoginLeftSidebar";
import LoginPost from "./LoginPost";
function Login() {
  return (
    <div className="loginPageContainer">
      {" "}
      <LoginLeftSidebar />
      <LoginPost />
    </div>
  );
}

export default Login;
