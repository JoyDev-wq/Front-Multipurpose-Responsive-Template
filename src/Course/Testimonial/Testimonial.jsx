import React from "react";
import "./Testimonial.css";
import face from "../../assets/Testimonials/face.svg";
import bubble from "../../assets/Testimonials/bubble.png";
import dots from "../../assets/Testimonials/dots.svg";
import capsule from "../../assets/Testimonials/capsule-dark.svg";
import forbes from "../../assets/Testimonials/forbes-dark.svg";
import mail from "../../assets/Testimonials/mailchimp-dark.svg";
import layar from "../../assets/Testimonials/layar-dark.svg";
import fitbit from "../../assets/Testimonials/fitbit-dark.svg";


const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-section">
        <div className="upper-testimonial">
          <img src={bubble} alt="" className="bubble" />
          <img src={dots} alt="" className="dots" />
          <img src={face} className="face" alt="" />
          <p className="comment">
            “ The best part about Front Course is the selection. You can find a
            course for anything you want to learn! Thank you Front Course!
            You've renewed my passion for learning and my dream of becoming a
            web developer. ”
          </p>
          <div className="customer">
            <h2>Martin</h2>
            <p>Happy customer</p>
          </div>
        </div>
        <div className="lower-testimonial">
            <img src={capsule} alt="" />
            <img src={fitbit} alt="" />
            <img src={forbes} alt="" />
            <img src={mail} alt="" />
            <img src={layar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
