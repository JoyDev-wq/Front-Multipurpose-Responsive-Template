import React from "react";
import home_image from "../../assets/homesection-1.svg";
import play_image from "../../assets/play.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img className="hero-right" src={home_image} alt="" />
        <div className="hero-left">
          <h1>Unclock your skills.</h1>
          <p>
            With our platform, you can quantify your skills, grow in your role
            and stay relevant on critical topics
          </p>
          <div className="click-btn">
            <button>Start a free trial</button>
            <div className="play">
              <div className="img">
                <img src={play_image} alt="" />
              </div>
              <p>How it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
