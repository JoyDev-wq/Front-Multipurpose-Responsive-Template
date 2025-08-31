import React from "react";
// import Navbar from "../Course/Navbar/Navbar";
import Demos from "./Demos/Demos";
import Documentation from "./Documentation/Documentation"
import HeroSection from "./HeroSection/HeroSection"
import Tools from "./Tools/Tools"
import Footer from "./Footer/Footer"


const HomePage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <Demos/>
      <Documentation/>
      <Tools />
      <Footer />
    </div>
  );
};

export default HomePage;
