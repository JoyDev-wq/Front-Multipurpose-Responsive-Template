import React from "react";
import "./Footer.css";
import stars from "../../assets/original-image.svg";
import document from "../../assets/document.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import white_logo from "../../assets/logo-white.svg";
import location from "../../assets/location.png";
import phone from "../../assets/phone-incoming.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="review">
          <img src={stars} alt="" />
          <p>
            <span>4.80 out of 5 starts</span>
          </p>
          <p>from 81 reviews</p>
        </div>
        <div className="avatar">
          <AvatarGroup
            className="AvatarGroup"
            max={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              className="Avatar"
              alt="Remy Sharp"
              src="https://i.pravatar.cc/150?img=1"
            />
            <Avatar
              className="Avatar"
              alt="Travis Howard"
              src="https://i.pravatar.cc/150?img=2"
            />
            <Avatar
              className="Avatar"
              alt="Cindy Baker"
              src="https://i.pravatar.cc/150?img=3"
            />
          </AvatarGroup>
          <p>
            Over <span>1k+</span> support questions have been closed
          </p>
        </div>
        <div className="review">
          <img src={document} alt="" />
          <p>
            <span>5k+</span> Front copies have
          </p>
          <p>been purchased</p>
        </div>
      </div>
      <div className="lower-footer">
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
                <li>Customers </li>
                <li>Hire us</li>
              </ul>
            </div>
            <div className="Company">
              <p className="heading">Features</p>
              <ul>
                <li>Press</li>
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
                <li>Help</li>
                <li>Your Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
