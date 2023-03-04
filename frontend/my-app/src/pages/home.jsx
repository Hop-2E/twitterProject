import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
// import Post from "../components/Post";
import WriteMessage from "../components/WriteMessage";
import Search from "../components/Search";

import NewMessage from "../components/NewMessage";
import Popup from "../components/Popup";
function home() {
  return (
    <>
      <div className="homeContainer">

        <SideBar />
        <WriteMessage />
        {/* <WriteMessage /> */}
        {/* <Post /> */}
        <Search />
        {/* <SideBar />
        <NewMessage /> */}
        {/* <Popup /> */}
        <Popup />
      </div>
    </>
  );
}

export default home;
