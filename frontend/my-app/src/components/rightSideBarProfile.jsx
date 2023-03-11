import React from "react";
import "../styles/profile.css";
import RightBarFooter from "../components/rightBarFooter";
import { FiSearch } from "react-icons/fi";
import { RiMoreFill } from "react-icons/ri";
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
        <div className="rightBarProfileTrends">
          <div className="rightSideBarTrendContainer">
            <div className="loginPostContainer">
              <div className="loginPostHeader"></div>
              <div className="loginSecondHeader">
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  }}
                >
                  Trends for you
                </span>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginPostMain">
                <div>
                  <div className="loginMainFirstText">
                    <span className="greyText">
                      {" "}
                      Only on Twitter · Trending{" "}
                    </span>
                    <div className="loginMainIconContainer">
                      <RiMoreFill className="greyText" />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "566px",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "566px",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
              <div className="loginMiniFooter">
                <span className="blueText">Show more</span>
              </div>
            </div>
          </div>
        </div>
        <RightBarFooter />
      </div>
    </>
  );
}

export default rightSideBarProfile;
