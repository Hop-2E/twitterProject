import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
// import Post from "../components/Post";
// import WriteMessage from "../components/WriteMessage";
import Search from "../components/Search";
// import NewMessage from "../components/NewMessage";
import Popup from "../components/Popup";
import Header from "../components/Header";
import Login from "../components/Login";
import FollowBox from "../components/FollowBox";
function home() {
  return (
    <>
      <div className="homeContainer">
        {/* <SideBar /> */}
        {/* <WriteMessage /> */}
        {/* <Header /> */}
        {/* <Search /> */}
        {/* <SideBar />
        <NewMessage /> */}
        {/* <Popup /> */}
        <Login />
        {/* <FollowBox /> */}
      </div>
    </>
  );
}

export default home;
