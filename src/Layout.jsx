import "./App.css";
import HomePage from "./HomePage/HomePage";
import Courses from "./Course/Courses";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./HomePage/NavBar/Navbar"; 
import CoursesNavbar from "./Course/Navbar/Navbar";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* 👇 Conditional Navbar */}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/courses" && <CoursesNavbar />}

      {/* 👇 Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default Layout