import React from "react";
import "../styles/newMessage.css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
function Popup() {
  return (
    <div className="popupContainer">
      <div className="mainBox">
        <div className="mainBoxHeader">
          <div className="popupClose">
            <IoIosClose
              style={{ height: "50px", width: "50px", color: "white" }}
            />
          </div>
          <div className="popupText">
            <h1 style={{ color: "white ", fontFamily: "ont-family: inherit" }}>
              New Message
            </h1>
          </div>
          <button className="popupBtn">Next</button>
        </div>
        <div className="popupSearchContainer">
          <div className="popupSearch">
            <AiOutlineSearch
              style={{ height: "20px", width: "20px", color: "white" }}
            />
          </div>
          <input
            className="poputInput"
            placeholder="Search people"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
