import React from "react";
import "../styles/newMessage.css";
import { useState } from "react";

function NewMessage() {
  //   const [isShowMessage, setIsShowMessage] = useState(false);

  const handleClick = () => {};
  return (
    <>
      <div className="newMessageContainer">
        <div className="newMessageMain">
          <h1 className="firstText">Select a message</h1>
          <p className="secondText">
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
          <button onClick={handleClick} className="newMessageBtn">
            <span className="newMessageCategoryTexts">New Message</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewMessage;
