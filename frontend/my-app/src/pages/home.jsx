import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
import Post from "../components/Post";
import WriteMessage from "../components/WriteMessage";

function home() {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        <WriteMessage />
        {/* <Post /> */}
      </div>
    </>
  );
}

export default home;
