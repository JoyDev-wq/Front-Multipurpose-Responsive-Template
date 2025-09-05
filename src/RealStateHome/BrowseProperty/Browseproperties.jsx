import React from "react";
import "./Browseproperties.css";
import bp_1 from "../../assets/RealStateImages/browse-property-1.jpg";
import { browse_property } from "../../RealEstate";

const Browseproperties = () => {
  return (
    <div className="browse-property">
      <div className="bp-header">
        <h1 className="header">Browse properties by city in the UK</h1>
        <p className="para">
          Take a deep dive and browse original neighborhood photos, drone
          footage, resident reviews and local insights to see if the homes for
          sale are right for you.
        </p>
      </div>
      <div className="browse-location">
        <div className="browse-btn">
          <button className="sale">For sale</button>
          <button className="rent">For rent</button>
        </div>
        <div className="locations">
          {browse_property.map((data) => (
            <div key={data.id} className="">
              <div className="location-box">
                <img src={data.img} alt="" />
                <div className="dark-bg" />

                <div className="box-detail">
                  <div className="badge">{data.offers}</div>
                  <div className="location-name">
                    <h2>{data.location}</h2>
                    <p>Prices from {data.Price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browseproperties;
