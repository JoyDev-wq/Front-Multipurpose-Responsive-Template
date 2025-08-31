import "./Demos.css";
import demo_img_1 from "../../assets/demo-img-1.jpg";
import demo_img_2 from "../../assets/demo-img-2.jpg";
import demo_img_3 from "../../assets/demo-img-3.jpg";
import demo_img_4 from "../../assets/demo-img-4.jpg";
import demo_img_5 from "../../assets/demo-img-5.jpg";
import right_arrow from "../../assets/arrow-out-up-right-stroke-square.png";
import dots from '../../assets/dots-horizontal-rounded.png'
import { useNavigate } from "react-router";

const Demos = () => {
  const navigate = useNavigate()
  return (
    <div className="demo">
      <div className="demo-heading">
        <p>Made for everyone, build anything with multiple pre-built demos</p>
      </div>
      {/* First demo */}
      <div className="demo-projects">
        <div className="text-section">
          <p className="pages">59 Pages</p>
          <p className="heading">Main Demo</p>
          <p className="para">
            Front's main demo comes with 16 landing pages, including over 40
            commonly used pages that can be combined with another 6 pre-built
            demos.
          </p>
          <div className="button">
            <p>Preview Main Demo </p>
            <img src={right_arrow} alt="" />
          </div>
        </div>
        <div className="img-section">
          <div className="upper-img">
            <div className="site">
              <img src={dots} alt="" />
              <p>www.htmlstream.com/front/</p>
            </div>
             {/* <hr /> */}
            <img src={demo_img_1} alt="" />
          </div>
          <div className="shadow">
          </div>
        </div>
      </div>
      {/* E-commerce demo */}
      <div className="demo-projects">
        <div className="text-section">
          <p className="pages">10 Pages</p>
          <p className="heading">E-commerce Demo</p>
          <p className="para">
            Customize the appearance of products, lists, components, and snippets, but also cart, checkout, and other E-commerce pages.
          </p>
          <div className="button">
            <p>Preview Shop Demo </p>
            <img src={right_arrow} alt="" />
          </div>
        </div>
        <div className="img-section">
          <div className="upper-img">
            <div className="site">
              <img src={dots} alt="" />
              <p>www.htmlstream.com/front/</p>
            </div>
             {/* <hr /> */}
            <img src={demo_img_2} alt="" />
          </div>
          <div className="shadowSecond">
          </div>
        </div>
      </div>
      {/* Jobs demo */}
      <div className="demo-projects">
        <div className="text-section">
          <p className="pages">9 Pages</p>
          <p className="heading">Job Demo</p>
          <p className="para">
            Demonstrate your job positions with more dynamic and interactive elements of Front to quickly put together a more professional looking page.
          </p>
          <div className="button">
            <p>Preview Main Demo </p>
            <img src={right_arrow} alt="" />
          </div>
        </div>
        <div className="img-section">
          <div className="upper-img">
            <div className="site">
              <img src={dots} alt="" />
              <p>www.htmlstream.com/front/</p>
            </div>
             {/* <hr /> */}
            <img src={demo_img_3} alt="" />
          </div>
          <div className="shadowThird">

          </div>
        </div>
      </div>
      {/* Real State demo */}
      <div className="demo-projects">
        <div className="text-section">
          <p className="pages">5 Pages</p>
          <p className="heading">Real State Demo</p>
          <p className="para">
            Please your visitors with eye-catching and exciting real estate listings. Different options and settings to manage your site.
          </p>
          <div className="button">
            <p>Preview Real State Demo </p>
            <img src={right_arrow} alt="" />
          </div>
        </div>
        <div className="img-section">
          <div className="upper-img">
            <div className="site">
              <img src={dots} alt="" />
              <p>www.htmlstream.com/front/</p>
            </div>
             {/* <hr /> */}
            <img src={demo_img_4} alt="" />
          </div>
          <div className="shadow">

          </div>
        </div>
      </div>
      {/* Courses Demo */}
      <div className="demo-projects">
        <div className="text-section">
          <p className="pages">4 Pages</p>
          <p className="heading">Courses Demo</p>
          <p className="para">
            Build a deep, solid understanding in education platform with Front Course demo. An online learning and teaching demo.
          </p>
          <div className="button">
            <p onClick={()=>navigate("/courses")}>Preview Course Demo</p>
            <img src={right_arrow} alt="" />
          </div>
        </div>
        <div className="img-section">
          <div className="upper-img">
            <div className="site">
              <img src={dots} alt="" />
              <p>www.htmlstream.com/front/</p>
            </div>
             {/* <hr /> */}
            <img src={demo_img_5} alt="" />
          </div>
          <div className="shadow">
          </div>
        </div>
      </div>

    </div>
  );
};

export default Demos;
