import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
// import Post from "../components/Post";
// import WriteMessage from "../components/WriteMessage";

// import NewMessage from "../components/NewMessage";

import Popup from "../components/Popup";
import Header from "../components/Header";
import Login from "../components/Login";
import FollowBox from "../components/FollowBox";

// import Popup from "../components/Popup";
import FooterSignupLogin from "../components/footerSignupLogin";

function home() {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        {/* <WriteMessage /> */}
        {/* <Header /> */}
        {/* <Search /> */}

        {/* <SideBar />
        <NewMessage /> */}
        {/* <Popup /> */}
        <Login />
        {/* <FollowBox /> */}

        {/* <SideBar /> */}
        {/* <NewMessage />
        <Popup /> */}
        <FooterSignupLogin />
      </div>
    </>
  );
}

export default home;
