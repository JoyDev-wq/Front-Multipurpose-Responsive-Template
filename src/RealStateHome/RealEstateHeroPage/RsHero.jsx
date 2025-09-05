import React from "react";
import search from "../../assets/search-button-svgrepo-com.svg";
import "./RsHero.css";
import hero_img from '../../assets/RealStateImages/heroSection-img.jpg';
import bg_img from '../../assets/RealStateImages/hero-img2.svg'

const RsHero = () => {
  return (
    <div className="rs-hero">
      <div className="container">
        <div className="rs-text">
          <h1>
            Discover a place you'll <span>enjoy living</span>
          </h1>
          <div className="input">
            <div className="">
              <img src={search} alt="" className="search-img"/>
              <input type="text" placeholder="Enter Location"/>
            </div>
            <button>Search</button>
          </div>
          <p className="p">Search through over 125,000 listings</p>
        </div>
        <div className="rs-img">
          <img src={bg_img} alt="" className="dots"/>
          <img src={hero_img} alt="" className="hero-img"/>
        </div>
      </div>
    </div>
  );
};

export default RsHero;
