import React from "react";
import "../App.css";
import SideBar from "../components/sidebar";
function home({ children }) {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
      </div>
      {children}
    </>
  );
}

export default home;
