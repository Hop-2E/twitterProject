import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import SideBar from "../components/sidebar";

import Post from "../components/Post";
import WriteMessage from "../components/WriteMessage";

import Header from "../components/Header";
import Login from "../components/Login";
import Tweet from "../components/tweet";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import RightSideBarHome from "../components/rigthSideBarHome";
import { sendRequest } from "../utils/axios-req";

// const getPosts = async () => {
//   try {
//     const { data } = await axios.get("http://localhost:8000/posts");

//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    sendRequest({ method: "GET", url: "posts" }).then(({ data }) => {
      console.log(data, "this is data");
      setData(data);
    });
  }, []);



function home() {

  return (
    <>
      <div className="homeContainer">
        <SideBar />


        {/* <WriteMessage /> */}

        {/* <Post /> */}

        <div className="mainContentHome">
          <div>
            <div className="homeContentHeader">
              <div className="pageNameDiv">
                <p className="pageNameHomeContainer">Home</p>
              </div>
              <div className="fypHome">
                <div className="fypHomeTextsDiv">
                  <span className="fypHomeTexts">For you</span>
                </div>
                <div className="fypHomeTextsDiv">
                  <span className="fypHomeTexts">Following</span>
                </div>
              </div>
            </div>
          </div>

          <div className="homeTweet">
            <div className="homeTweetHeader">
              <div className="homeTweetHeaderHeader">
                <div className="homeTweetHeaderHeaderPic"></div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="homeTweetHeaderHeaderInput"
                  placeholder="What's happening?"
                  style={{
                    color: "white",
                    fontSize: "30px",
                  }}
                />
              </div>
              <div className="homeTweetBottom">
                <div className="homeTweetBottomIconsDiv">
                  <div className="iconDiv">
                    <CiImageOn className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <HiOutlineGif className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    <BiPoll className="iconHomeTweetBottom" />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <BsEmojiSmile
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "17px", marginBottom: "2px" }}
                    />
                  </div>
                  <div className="iconDiv">
                    {" "}
                    <TbCalendarTime
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "19px", marginBottom: "2px" }}
                    />
                  </div>
                  <div className="iconDiv">
                    <HiOutlineLocationMarker
                      className="iconHomeTweetBottom"
                      style={{ fontSize: "19px", marginBottom: "1px" }}
                    />
                  </div>
                </div>
                <div className="homeTweetButtonDiv">
                  <button className="homeTweetButton">Tweet</button>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            {data &&
              data.map((data) => {
                return <Tweet data={data} />;
              })}
          </div>
        </div>

        <div className="homeRightSiderBar">
          <RightSideBarHome />
        </div>
      </div>
    </>
  );
};

export default Home;
