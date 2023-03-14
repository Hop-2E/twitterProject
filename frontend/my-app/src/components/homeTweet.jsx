import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import React from "react";
import "../styles/tweet.css";
function HomeTweet({ visible }) {
  const [description, setDescription] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [time, setTime] = useState();
  const createPost = async () => {
    await axios.post("http://localhost:8000/posts", {
      description: description,
      username: username,
      name: name,
      image: image,
      time: time,
    });
    window.location.reload();
  };
  return (
    <>
      <div
        className="background"
        style={{
          display: visible ? "block" : "none",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.173)",
          position: "absolute",
          zIndex: "1000",
        }}
      >
        <div
          className="containerHomeTweet"
          style={{
            backgroundColor: "black",
            width: "620px",
            height: "300px",
            position: "absolute",
            right: "430px",
            top: "50px",
            zIndex: "1001",
            borderRadius: "20px",
          }}
        >
          <div
            className="homeContainer"
            style={{ height: "300px", borderRadius: "20px" }}
          >
            {/* <WriteMessage /> */}
            {/* <Post /> */}
            <div
              className="mainContentHome"
              style={{ height: "300px", borderRadius: "20px" }}
            >
              <div className="homeTweet" style={{ height: "200px" }}>
                <div className="homeTweetHeader">
                  <div className="homeTweetHeaderHeader">
                    <div
                      className="homeTweetHeaderHeaderPic"
                      style={{
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    ></div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="homeTweetHeaderHeaderInput"
                      placeholder="What's happening?"
                      style={{
                        color: "white",
                        fontSize: "30px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setDescription(e.target.value)}
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
                      <button
                        className="homeTweetButton"
                        // onClick={() => CreatePost()}
                        onClick={() => createPost()}
                      >
                        Tweet
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className="texts"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      marginRight: "10px",
                    }}
                  >
                    Name :
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input"
                    style={{
                      marginTop: "5px",
                      backgroundColor: "rgba(128, 128, 128, 0.484)",
                      border: "1px solid transparent",
                      height: "30px",
                      width: "250px",
                      marginBottom: "5px",
                      borderRadius: "10px",
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <span
                    className="texts"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      marginRight: "10px",
                    }}
                  >
                    Username :
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input"
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                      backgroundColor: "rgba(128, 128, 128, 0.484)",
                      border: "1px solid transparent",
                      height: "30px",
                      width: "250px",
                      marginBottom: "5px",
                      borderRadius: "10px",
                    }}
                  />
                  <br />
                  <span
                    className="texts"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      marginRight: "10px",
                    }}
                  >
                    Time :
                  </span>
                  <input
                    type="month"
                    name=""
                    id=""
                    className="input"
                    onChange={(e) => setTime(e.target.value)}
                    style={{
                      backgroundColor: "rgba(128, 128, 128, 0.484)",
                      border: "1px solid transparent",
                      height: "30px",
                      width: "250px",
                      marginBottom: "5px",
                      borderRadius: "10px",
                    }}
                  />
                  <br />
                  <span
                    className="texts"
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      marginRight: "10px",
                    }}
                  >
                    Image :
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input"
                    onChange={(e) => setImage(e.target.value)}
                    style={{
                      backgroundColor: "rgba(128, 128, 128, 0.484)",
                      border: "1px solid transparent",
                      height: "30px",
                      width: "250px",
                      marginBottom: "5px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTweet;
