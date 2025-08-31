import React, { useState } from "react";
import "./Navbar.css";
import font_logo from "../../assets/front-logo.svg";
import search_btn from "../../assets/search-button-svgrepo-com.svg";
import user from "../../assets/user-svgrepo-com.svg";
import menu from "../../assets/menu-svgrepo-com.svg";
import journal from "../../assets/journal-svgrepo-com.svg";
import down_arrow from "../../assets/down-arrow.svg";
import code from "../../assets/code-svgrepo-com.svg";
import laptop from "../../assets/laptop-alt-2-svgrepo-com.svg";
import music from "../../assets/playlist-svgrepo-com.svg";
import graph from "../../assets/graph-svgrepo-com.svg";
import bag from "../../assets/business-svgrepo-com.svg";
import design from "../../assets/figma-svgrepo-com.svg";
import right_arr from "../../assets/right-arrow.svg";
import { useNavigate } from "react-router";


const CoursesNavbar = () => {
  const Navigate = useNavigate();
  const [openCourse, setOpenCourse] = useState(false);
  const [showmenu, setShowMenu] = useState(false);
  function openCourseMenu() {
    setOpenCourse(!openCourse);
  }
  function openMenuBar() {
    setShowMenu(!showmenu);
  }
  return (
    <div className="course-navbar">
      <div className="nav-links">
        <img src={font_logo} alt="" onClick={()=>Navigate("/")}/>

        <div className="small-nav">
          <p className="links">Home</p>
          <p className="links">Courses</p>
          <div className="nav-input">
            <img src={search_btn} alt="" />
            <input type="text" placeholder="What do you want to learn?" />
          </div>
          <p className="links">Pages</p>
          <div className="button">
            <p>Get Started</p>
            <img src={user} alt="" />
          </div>
          <img
            src={menu}
            alt=""
            className="menu-btn"
            onClick={() => openMenuBar()}
          />
        </div>
      </div>

      <div className={`${showmenu ? "small-links" : "hide"} `}>
        <div className="home">
          <p>Home </p>
        </div>
        <div className="course-link">
          <p onClick={() => openCourseMenu()}>
            {" "}
            <img src={journal} alt="" className="journal" />
            Courses
          </p>
          {openCourse ? (
            <img
              src={down_arrow}
              alt=""
              onClick={() => openCourseMenu()}
              className="down-arrow"
            />
          ) : (
            <img
              src={right_arr}
              alt=""
              onClick={() => openCourseMenu()}
              className="right-arrow"
            />
          )}
        </div>{" "}
        <div className={`${openCourse ? "hide" : "sub-courses-link"}`}>
          <div className="sub-c Development">
            <p>
              <img src={code} alt="" className="icon" />
              Development
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
          <div className="sub-c Business">
            <p>
              <img src={bag} alt="" className="icon" />
              Business
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
          <div className="sub-c Finances">
            <p>
              <img src={graph} alt="" className="icon" />
              Finances & Accounting
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
          <div className="sub-c IT">
            <p>
              <img src={laptop} alt="" className="icon" />
              IT & Software
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
          <div className="sub-c Design">
            <p>
              <img src={design} alt="" className="icon" />
              Design
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
          <div className="sub-c Music">
            <p>
              <img src={music} alt="" className="icon" />
              Music
            </p>
            <img src={down_arrow} alt="" className="down-arrow" />
          </div>
        </div>
        <div className="pages">
          <p>Pages</p>
          <img src={down_arrow} alt="" className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default CoursesNavbar;
