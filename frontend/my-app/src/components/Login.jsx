import React from "react";
import "../styles/login.css";
import LoginLeftSidebar from "./LoginLeftSidebar";
import LoginPost from "./LoginPost";
import LoginFooter from "./LoginFooter";
import LoginRightSidebar from "./LoginRightSidebar";
import SignupPopup from "./SignupPopup";
import LoginPopup from "./LoginPopup";
import { useState } from "react";

function Login() {
  const [visible, setVisible] = useState(false);
  const [ovisible, setOVisible] = useState(false);
  return (
    <div className="loginPageContainer">
      <LoginLeftSidebar />
      <LoginPost />
      <LoginRightSidebar />
      <LoginFooter
        visible={visible}
        setVisible={setVisible}
        ovisible={ovisible}
        setOVisible={setOVisible}
        style={{ zIndex: "100" }}
      />
      <div className="loginDiv" style={{ display: visible ? "block" : "none" }}>
        <LoginPopup />
      </div>
      <div
        className="loginDiv"
        style={{ display: ovisible ? "block" : "none" }}
      >
        <SignupPopup />
      </div>
    </div>
  );
}

export default Login;
