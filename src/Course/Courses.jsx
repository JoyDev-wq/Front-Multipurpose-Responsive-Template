import React from 'react'
// import CoursesNavbar from "./Navbar/Navbar"
import HeroSection from './HeroSection/HeroSection'
import Programs from './Programs/Programs'
import C from './C/C'
import Testimonial from './Testimonial/Testimonial'
import ContactPage from './ContactPage/ContactPage'
import Footer from './Footer/Footer'
const Courses = () => {
  return (
    <div>
      {/* <CoursesNavbar/> */}
      <HeroSection/>
      <Programs/>
      <C/>
      <Testimonial/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default Courses
