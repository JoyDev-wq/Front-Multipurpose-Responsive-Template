import React from "react";
import "./Properties.css";
import shower from "../../assets/RealStateImages/shower-svgrepo-com.svg";
import measure from "../../assets/RealStateImages/square-ruler-scale-tool-education-measurement-svgrepo-com.svg";
import bed from "../../assets/RealStateImages/bed-svgrepo-com.svg";
import right from "../../assets/RealStateImages/right-arrow-svgrepo-com-3.svg"
import { properties} from "../../RealEstate";

const Properties = () => {
  return (
    <div className="properties">
      <h1 className="heading">New Propertise on Front</h1>
      <div className="card-container">
        {properties.map((data) => (
          <div key={data.id}>
            <div className="card">
              <img src={data.img} alt="" className="img" />
              <div className="card-content">
                <p>FOR SALE</p>
                <div className="card-title">
                  <p className="title">{data.title}</p>
                  <p className="price">{data.price}</p>
                </div>
                <div className="card-types">
                  <div className="bed">
                    <img src={bed} alt="" className="sml-img" />
                    <p>{data.bed}</p>
                  </div>
                  <div className="bath">
                    <img src={shower} alt="" className="sml-img" />
                    <p>{data.bath}</p>
                  </div>
                  <div className="sqft">
                    <img src={measure} alt="" className="sml-img" />
                    <p>{data.measurement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <p className="view-more">View all properties for sale <img src={right} alt="" /></p>

    </div>
  );
};

export default Properties;
