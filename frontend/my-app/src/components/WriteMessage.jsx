import React from "react";
import "../styles/writeMessage.css";
import { FiSettings } from "react-icons/fi";
import { RiMailAddLine } from "react-icons/ri";
function WriteMessage() {
  return (
    <>
      <div className="writeMessageContainer">
        <div className="messageHeader">
          <span className="writeMessageCategoryTexts">Message</span>
          <div className="writeMessageIconContainer">
            <FiSettings className="writeMessageIcon" />
            <RiMailAddLine className="writeMessageIcon" />
          </div>
        </div>
        <div className="messageMain">
          <h1 className="firstText">Welcome to your inbox!</h1>
          <p className="secondText">
            Drop a line, share Tweets and more with private conversations
            between you and others on Twitter.{" "}
          </p>
          <button className="writeMessageBtn">
            <span className="writeMessageCategoryTexts">Write a message</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default WriteMessage;
