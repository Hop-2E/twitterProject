import React from "react";
import Sidebar from "../components/sidebar";
import NewMessage from "../components/NewMessage";
import WriteMessage from "../components/WriteMessage";
import "../styles/message.css";

function Messages() {
  return (
    <div className="messageContainer">
      <Sidebar />
      <WriteMessage />
      <NewMessage />
    </div>
  );
}

export default Messages;
