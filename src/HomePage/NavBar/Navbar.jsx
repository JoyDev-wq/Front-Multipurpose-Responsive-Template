import React, { useState } from "react";
import "./NavBar.css";
import front_logo from "../../assets/front-logo.svg";
import menu from "../../assets/menu.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const Navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function showMwenuBar() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="nav-bar">
      <div className="front-logo">
        <img src={front_logo} alt="" onClick={()=>Navigate("/")}/>
      </div>
      <div className="front-links">
        <ul className="openMenu">
          <li>
            <a href="">Landing</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Accounts</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Protfolio</a>
          </li>
          <li>
            <button>Buy now</button>
          </li>
          <li className="menu" onClick={() => showMwenuBar()}>
            <img src={menu} alt="" />
          </li>
        </ul>

        <ul className={`closedMenu ${showMenu ? "show" : ""}`}>
          {/* <li className='close' onClick={()=>showMwenuBar()}><img src={close} alt="" /></li> */}
          <li>
            <a href="">Landing</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Accounts</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Protfolio</a>
          </li>
          <li>
            <button>Buy now</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
