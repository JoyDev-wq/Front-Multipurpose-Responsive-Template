import React from "react";
import img1 from "../../assets/Slider images/img1.jpg";
import "./C.css";
import book from "../../assets/book.svg";
import clock from "../../assets/clock.svg";
import { CourseDetails } from "../../Courses";

const C = () => {
  return (
    <div className="courses">
      <div className="course-collection">
        <div className="courses-heading">
          <h1>Featured courses</h1>
          <p>Discover your perfect program in our courses.</p>
        </div>
        <div className="courses-card">
          {CourseDetails.map((courseD) => {
            return (
              <div className="course-card-1" key={courseD.id}>
                <div
                  className="upper-card"
                  style={{
                    backgroundImage: `url(${courseD.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="badge">Bestseller</p>
                  <div className="">
                    <div className="stars">
                      <p>
                        4.91 &nbsp;<span>(1.5k+ reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lower-card">
                  <div className="heading">
                    <p>{courseD.category}</p>
                    <h1>{courseD.title}</h1>
                  </div>
                  <div className="user-details">
                    <img className="avatar" src={book} alt="" />
                    <div className="b-c">
                      <div className="book">
                        <img src={book} alt="" />
                        <p> &nbsp; {courseD.lessions} </p>
                      </div>
                      <div className="space">/</div>
                      <div className="clock">
                        <img src={clock} alt="" />
                        <p> &nbsp;{courseD.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <div className="discount">
                      <small>{courseD.price}</small>
                      <p>{courseD.discount}</p>
                    </div>
                    <button>Preview</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a href="" className="see-more">
          See all courses
        </a>
      </div>
    </div>
  );
};

export default C;
