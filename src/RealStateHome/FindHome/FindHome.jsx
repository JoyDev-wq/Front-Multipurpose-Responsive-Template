import React from "react";
import "./FindHome.css";
import search from "../../assets/RealStateImages/find-svgrepo-com.svg";
import price_tag from "../../assets/RealStateImages/price-tag-svgrepo-com.svg";
import page_3 from "../../assets/RealStateImages/page-3.jpg";

const FindHome = () => {
  return (
    <div className="find-home">
      <div className="fh-content">
        <div className="fh-container">
          <h1 className="heading">
            Front helps you make better property decisions
          </h1>
          <p className="para">
            Front has England's largest collection of street and suburb reviews,
            empowering you to find the right area for you to move to. With tens
            of thousands of local community topics and discussions, find the
            answers to all your questions about an area, or ask the locals.
          </p>
          <div className="fh-card">
            <div className="card">
              <img src={search} alt="" className="img-tag" />
              <h3>Find homes for sale</h3>
              <div className="p-l">
                <p>Over 1 million+ homes for sale available on the website.</p>
                <a className="links">Properties for sale</a>
              </div>
            </div>
            <div className="card">
              <img src={search} alt="" className="img-tag" />
              <h3>Find rental properties</h3>
              <div className="p-l">
                <p>
                  Fina a home or apartment with 35+ filters and custom keyword
                  search.
                </p>
                <a className="links">Properties for rent</a>
              </div>
            </div>
            <div className="card">
              <img src={price_tag} alt="" className="img-tag" />
              <h3>Sell properties</h3>
              <div className="p-l">
                <p>
                  Wanting to find a sold property price or see what sold on the
                  weekend?
                </p>
                <a className="links">Sell properties </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src={page_3} alt="" />
        </div>
      </div>

      <div className="boxes">
        <div className="box">
          <p className="title">--Valuation methods</p>
          <p className="result">500,000</p>
          <p className="para">
            Our valuation methods are based on more than 500,000 real
            transactions.
          </p>
        </div>
        <div className="box">
          <p className="title">--Coverage</p>
          <p className="result">75%</p>
          <p className="para">
            This represents over 75% of the UK property sales over the past 10 years.
          </p>
        </div>
        <div className="box">
          <p className="title">--Advanced algorithm</p>
          <p className="result">125,000</p>
          <p className="para">
            Our algorithms are updated by data from over 125,000 property sales every year
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindHome;
