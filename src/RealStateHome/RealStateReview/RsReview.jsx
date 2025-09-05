import React from "react";
import quote from "../../assets/RealStateImages/quote-left-svgrepo-com.svg";
import review_bg from "../../assets/RealStateImages/review.jpg";
import profile from "../../assets/RealStateImages/profile.jpg";
import right_arr from "../../assets/white-right-arrow.svg"
import "./RsReview.css";

const RsReview = () => {
  return (
    <div className="rs-review">
      <div className="rs-header">
        <h1 className="header">Reviews</h1>
        <p className="para">Over 40,000 happy customers. Be the next one.</p>
      </div>
      <div className="rs-content">
        <div className="rs-container">
          <div className="left">
            <img src={quote} alt=""  className="quote"/>
            <p className="para">
              " With Front Real Estate we can be self-reliant, like cooking for
              ourselves rather than eating out every night. You feel like part
              of the community rather than a visitor. "
            </p>
            <div className="user-profile">
              <img src={profile} alt="" className="profile"/>
              <div className="user-name">
                <h1 className="name">Christina Kray</h1>
                <p className="customer">Happy customer</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={review_bg} alt="" />
          </div>
        </div>
        <div className="reviews">
          <h1>See what other people are saying</h1>
          <p className="rating">4.85 / 5.0 <small> (2,594)</small></p>
          <div className="btn">
            <p>Read more reviews </p>
            <img src={right_arr} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsReview;
