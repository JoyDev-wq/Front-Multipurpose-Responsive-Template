import React from "react";
import "./Tools.css";
import bootstrap from "../../assets/bootstrap-gray.svg";
import sass from "../../assets/sass-gray.svg";
import glup from "../../assets/gulp-gray.svg";
import npm from "../../assets/npm-gray.svg";

const Tools = () => {
  return (
    <div className="tools">
      <div className="tool-text">
        <h1>Build tools and full documention</h1>
        <p>
          Components, plugins, and build tools are all thoroughly documented
          with live examples and markup for easier use and customization.
        </p>
      </div>
      <div className="code">
        <div className="code-space">
          <div>
            <p><code> $ npm install</code> <br /><span>Everything installed!</span></p>

            <p><code> $ gulp</code> <br /><span>scss watching </span><br /> <span>LiveReload started <br /> Opening localhost:3000</span></p>

            <p><code>$ that's it?!</code> <br /><span>Yup, that's it.</span></p>
          </div>
        </div>
        <p className="code-lm">
          Not comfortable diving that deep? No worries, you just use the
          compiled CSS and examples pages! <span>Learn more</span>{" "}
        </p>
      </div>
      <div className="tool-btn">
        <div className="img">
          <img src={bootstrap} alt="bootstrap" />
          <img src={sass} alt="sass" />
          <img src={glup} alt="gulp" />
          <img src={npm} alt="npm" />
        </div>
        <p className="btn">
          <a href="">Get a license for $49</a>
        </p>
      </div>
    </div>
  );
};

export default Tools;
