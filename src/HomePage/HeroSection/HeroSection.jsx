import React from "react";
import "./HeroSection.css";
import hero_img from "../../assets/hero-img-1.png";
import hero_img_2 from "../../assets/hero-img-2.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="heading">Build as frameworks from the ground up</p>
        <p className="para">
          Bring your idea to life in no time. The website solution for all your
          needs. For UX designers, entrepreneurs, product managers, marketers,
          and anyone.
        </p>
        <div className="hero-img">
          <img className="img1" src={hero_img} alt="" />
          <img className="img2" src={hero_img_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
