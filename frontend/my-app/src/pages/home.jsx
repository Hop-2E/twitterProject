import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
import WriteMessage from "../components/WriteMessage";

function home() {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        <WriteMessage />
      </div>
    </>
  );
}

export default home;
