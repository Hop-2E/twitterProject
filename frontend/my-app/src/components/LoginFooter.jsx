import React from "react";
import "../styles/login.css";
function loginFooter({ visible, setVisible, ovisible, setOVisible }) {
  console.log(visible, "aj");
  return (
    <>
      <div className="loginFooter">
        <div className="footerMain">
          <div className="footerTextContainer">
            <div className="footerMainText">
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Don’t miss what’s happening
              </span>
            </div>
            <div className="footerMain2Text">
              <span
                style={{
                  color: "white",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  fontSize: "13px",
                }}
              >
                People on Twitter are the first to know.
              </span>
            </div>
          </div>
          <div className="loginFooterbtnContainer">
            <button
              className="loginFooterFirstBtn"
              onClick={() => setVisible(!visible)}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Log in
              </span>
            </button>
            <button
              className="loginFooterSecondBtn"
              onClick={() => setOVisible(!ovisible)}
            >
              <span
                style={{
                  color: "black",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default loginFooter;
