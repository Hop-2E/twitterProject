import React from "react";
import "../styles/search.css";
function FollowBox() {
  return (
    <div className="followBoxContainer">
      <div className="followBoxImg">
        <img
          style={{ width: "48px", height: "48px", borderRadius: "10px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxia80e4V9Tj1PEk1H7kkui8kZNAnkhxKlXA&usqp=CAU"
          alt=""
        />
      </div>
      <div className="nameAndFollow">
        <div className="nameContainer">
          <div className="name">
            <span className="whiteText">MrGoku</span>
          </div>
          <p className="greyText">@MrGoku</p>
        </div>
        <button className="followBtn">Follow</button>
      </div>
    </div>
  );
}

export default FollowBox;
