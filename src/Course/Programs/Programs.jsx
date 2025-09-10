import React from "react";
import "./Programs.css";
import bg_img from "../../assets/bg-im.svg";
import { programs } from "../../Programs";

const Programs = () => {
  return (
    <div className="programs">
      <img src={bg_img} alt=""  className="bg-img"/>
      <div className="program-content">
        <div className="heading">
          <h1>Check out our newest and most popular programs</h1>
          <a>See all programs</a>
        </div>
        <div className="program">
          {programs.map((program) => {
            return(
                <div
              key={program.id}
              className="program-cards"
              style={{
                backgroundImage: `url(${program.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="program-1">
                <p className="tool">{program.tool}</p>
                <h1>{program.title}</h1>
              </div>
              <p className="read-now">Read now</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;
