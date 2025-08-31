import React from "react";
import bottom_bg from "../../assets/contact-bg.svg";
import "./Footer.css";
import arrow_right from "../../assets/arrow-out-up-right-stroke-square.png";
import white_logo from "../../assets/logo-white.svg";
import location from "../../assets/location.png";
import phone from "../../assets/phone-incoming.png";
import user from '../../assets/user-circle.svg'
import question from '../../assets/question-circle.svg'


const Footer = () => {
  return (
    <div className="course-footer">
      <div className="course-upper-footer">
        <img src={bottom_bg} alt="" className="bottom_bg" />
        <div className="course-footer-content">
          <h1 className="header">Find the right learning path for you</h1>
          <p className="query">
            Answer a few questions and match your goals to our programs.
          </p>
          <button className="explore">Explore by category</button>
        </div>
      </div>
      <div className="course-lower-footer">
        <div className="add-links">
          <div className="address">
            <img className="logo" src={white_logo} alt="" />
            <div className="location">
              <img src={location} alt="" />
              <p> 153 Williamson Plaza, Maggieberg</p>
            </div>
            <div className="location">
              <img src={phone} alt="" />
              <p> +1 (062) 109-9222</p>
            </div>
          </div>
          <div className="links">
            <div className="Company">
              <p className="heading">Company</p>
              <ul>
                <li>About</li>
                <li>
                  Careers <span>We're hiring</span>
                </li>
                <li>Blog</li>
                <li>
                  Customers <img src={arrow_right} alt="" />{" "}
                </li>
                <li>Hire us</li>
              </ul>
            </div>
            <div className="Company">
              <p className="heading">Features</p>
              <ul>
                <li>
                  Press <img src={arrow_right} alt="" />
                </li>
                <li>Release Notes</li>
                <li>Intgrations</li>
                <li>Pricings </li>
              </ul>
            </div>
            <div className="Company">
              <p className="heading">Documentation</p>
              <ul>
                <li>Support</li>
                <li>Docs</li>
                <li>Status</li>
                <li>API Refrences </li>
                <li>Tech Requireents</li>
              </ul>
            </div>
            <div className="Company">
              <p className="heading">Resouces</p>
              <ul>
                <li><img src={question} alt="" />Help</li>
                <li><img src={user} alt="" />Your Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="divider">
        </div>

      <div className="sub-footer">
        <div className="upper-sub-footer">
          <div className="privacy-policy">
            <p>Privay & Policy</p>
            <span>/</span>
            <p>Terms</p>
            <span>/</span>
            <p>Site Map</p>
          </div>
          <div className="social-media"></div>
        </div>
        <div className="copyright">
          <p>© Front. 2021 Htmlstream. All rights reserved.</p>
        </div>
        <div className="info">
          <p>
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
