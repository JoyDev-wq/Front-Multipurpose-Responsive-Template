import React from "react";
import "./ContactPage.css";
import right from "../../assets/right.svg";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-left">
        <h1 className="upper-heading">
          Thousands of experts around the world ready to help you.
        </h1>
        <p className="para">
          See why leading organizations choose Front Course for Business as
          their destination for employee learning.
        </p>
        <div className="learn-more">
          <h3 className="lower-heading">Learn more about:</h3>
          <ul className="">
            <li>
              <img src={right} alt="" />
              <p>Unlimited access to the top 3,500+ courses</p>
            </li>
            <li>
              <img src={right} alt="" />
              <p>
                Fresh content taught by 1,300+ experts – for any learning style
              </p>
            </li>
            <li>
              <img src={right} alt="" />
              <p>
                Actionable learning insights <span>Beta</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-page-right">
        <h2>
          Try it free for 7 days<span> starting at $59</span>
        </h2>
        <form className="form" action="">
          <div className="input first-name">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="first-name" name="First name"/>
          </div>
          <div className="input last-name">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last Name" name="last-name"/>
          </div>
          <div className="input email">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="email@site.com" name="email"/>
          </div>
          <div className="input password">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="8+ characters required" name="password"/>
          </div>
          <div className="input con-password">
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder="8+ characters required" name="con-password"/>
          </div>
          <div className="sign-up">
            <p>
              Already have an account? <span>Log In</span>
            </p>
            <button>Sign up now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
