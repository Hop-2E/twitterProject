import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
// import Post from "../components/Post";
import WriteMessage from "../components/WriteMessage";
import Search from "../components/Search";

function home() {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        <WriteMessage />
        {/* <WriteMessage /> */}
        {/* <Post /> */}
        <Search />
      </div>
    </>
  );
}

export default home;
