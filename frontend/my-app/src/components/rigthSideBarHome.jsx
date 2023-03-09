import React from "react";
import RightBarFooter from "../components/rightBarFooter";
import { FiSearch } from "react-icons/fi";
import "../App.css";
function rightSideBarHome() {
  return (
    <>
      <div className="rigthSideBarHomeContainer">
        <input
          type="text"
          name=""
          id=""
          className="rigthSideBarHomeInput"
          placeholder="Search Twitter"
        />
        <FiSearch className="iconInput" />
        <div className="rightSideBarTrendContainer"></div>
        <div className="rightSideBarProfileRecom">
          <div className="recomHeader">
            <p className="recomText">Who to follow</p>
          </div>
          <div className="profileRecom">
            <div>
              <div className="oneAcc">
                <div className="profilePicRecom"></div>
                <div className="profileNameRecom">
                  <p className="name">Dulguun0601</p>
                  <p className="tag">@dulgnP</p>
                </div>
                <button className="followButtonRecom">Follow</button>
              </div>
              <div className="oneAcc">
                <div className="profilePicRecom"></div>
                <div className="profileNameRecom">
                  <p className="name">Dulguun0601</p>
                  <p className="tag">@dulgnP</p>
                </div>
                <button className="followButtonRecom">Follow</button>
              </div>
              <div className="oneAcc">
                <div className="profilePicRecom"></div>
                <div className="profileNameRecom">
                  <p className="name">Dulguun0601</p>
                  <p className="tag">@dulgnP</p>
                </div>
                <button className="followButtonRecom">Follow</button>
              </div>
            </div>
          </div>
          <div className="showMore">
            <p className="showMoreText">Show more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default rightSideBarHome;
