import React from "react";
import "../styles/profile.css";
import RightBarFooter from "../components/rightBarFooter";
import { FiSearch } from "react-icons/fi";
function rightSideBarProfile() {
  return (
    <>
      <div className="rightBarContainer">
        <div className="inputDivRightBar">
          <input
            type="text"
            name=""
            id=""
            className="rightBarInput"
            placeholder="Search Twitter"
          />
        </div>

        <FiSearch className="searchRightBar" />
        <div className="rightBarProfilePhotos"></div>
        <div className="rightBarProfileRecom">
          <div className="recomHeader">
            <p className="recomTexts">You might like</p>
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
        <div className="rightBarProfileTrends"></div>
        <RightBarFooter />
      </div>
    </>
  );
}

export default rightSideBarProfile;
