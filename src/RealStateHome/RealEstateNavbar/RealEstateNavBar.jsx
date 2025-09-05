import React from "react";
import "./RealEstateNavBar.css";
import logo from "../../../public/front-logo.svg";
import down_arrow from "../../assets/down-arrow.svg";
import menu from "../../assets/menu.png";

const RealEstateNavBar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // function showMwenuBar() {
  //   setShowMenu(!showMenu);
  // }
  return (
    <div className="real-state">
      <div className="rs-logo">
        <img src={logo} alt="" />
      </div>
      <div className="rs-links">
        <ul>
          <li className="home">Home</li>
          <li>
            Listings <img src={down_arrow} alt="" />
          </li>
          <li>Property Overview</li>
          <li className="btn">Start Selling</li>
          <li className="menu" onClick={() => showMwenuBar()}>
            <img src={menu} alt="" />
          </li>
        </ul>
        {/* <ul className={`closedMenu ${showMenu ? "show" : ""}`}>
          {/* <li className='close' onClick={()=>showMwenuBar()}><img src={close} alt="" /></li> */}
          {/* <li>
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
        </ul> } */}

      </div>
    </div>
  );
};

export default RealEstateNavBar;
