import React from "react";
import "../styles/login.css";
function LoginBox() {
  return (
    <div className="loginBoxContainer">
      <div className="loginBoxHeader">
        <span className="loginHeaderText">New To Twitter?</span>
      </div>
      <div className="loginBoxFirstText">
        <span className="loginFirstText">
          Sign up now to get your own personalized timeline!
        </span>
      </div>
      <div className="loginBoxMain">
        <div className="loginBoxChoose">
          <span>Sign up with Google</span>
        </div>
        <div className="loginBoxChoose">
          <span>Sign up with Apple</span>
        </div>
        <div className="loginBoxChoose">Create account</div>
      </div>
      <div className="loginBoxSecondText">
        <span className="loginSecondText">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </span>
      </div>
    </div>
  );
}

export default LoginBox;
