import "./App.css";
import HomePage from "./HomePage/HomePage";
import Courses from "./Course/Courses";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./HomePage/NavBar/Navbar"; 
import CoursesNavbar from "./Course/Navbar/Navbar";
import RealEstate from "./RealStateHome/RealEstate";

// import Footer from './HomePage/Footer/Footer'

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* 👇 Conditional Navbar */}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/courses" && <CoursesNavbar />}
      {location.pathname === "/courses" && <RealEstate/>}

      {/* 👇 Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/real-state" element={<RealEstate/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default Layout