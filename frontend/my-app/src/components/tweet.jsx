import React from "react";
import "../styles/tweet.css";
function tweet({ data }) {
  return (
    <>
      <div className="tweetContainer">
        <div className="tweetHeader">
          <div>
            <img src={data.image} className="tweetPicture"></img>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <p className="username">{data.name}</p>
              <p className="tag">@{data.username}</p>
              <p className="tag">· {data.time}</p>
            </div>

            <div className="textDiv">
              <p className="texts">{data.description} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tweet;
