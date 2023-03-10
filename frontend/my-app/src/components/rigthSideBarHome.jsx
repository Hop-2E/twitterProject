import React, { useState } from "react";
import RightBarFooter from "../components/rightBarFooter";
import { FiSearch } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiSettings3Line } from "react-icons/ri";
import { RiMoreFill } from "react-icons/ri";
import "../App.css";

function RightSideBarHome() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="rigthSideBarHomeContainer">

        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "7%",
            position: "fixed",
          }}
        >
          <input
            type="text"
            name=""
            id=""
            className="rigthSideBarHomeInput"
            placeholder="Search Twitter"
            style={{ position: "fixed" }}
          />
        </div>


        <input
          type="text"
          name=""
          id=""
          className="rigthSideBarHomeInput"
          placeholder="Search Twitter"
        />
        {show && <></>}

        <FiSearch className="iconInput" />
        <div className="rightSideBarTrendContainer">

          {/* sdsd */}
          <div className="loginPostContainer1">
            <div className="loginSecondHeader1">

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

            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cur) => (
              <div className="loginPostMain1">
                <div>
                  <div className="loginMainFirst1Text">
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
                      width: "90%",
                    }}
                  >
                    <span className="whiteText">#ガルパ高校卒業式</span>
                  </div>
                  <div
                    style={{
                      height: "16px",
                      width: "90%",
                    }}
                  >
                    <span className="greyText">6969k Tweets</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* /sdsd */}

            <div className="loginPostMain">
              <div>
                <div className="loginMainFirstText">
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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
                  <span className="greyText"> Only on Twitter · Trending </span>
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

export default RightSideBarHome;
