import React from 'react'
import RealEstateNavBar from './RealEstateNavbar/RealEstateNavBar'
import RealEstateHome from './RealEstateHeroPage/RsHero'
import Properties from './Properties/Properties'
import FindHome from './FindHome/FindHome'
import Browseproperties from './BrowseProperty/Browseproperties'
import RsReview from './RealStateReview/RsReview'
import Footer from './Footer/Footer'

const RealEstate = () => {
  return (
    <div>
      <RealEstateNavBar/>
      <RealEstateHome/>
      <Properties/>
      <FindHome/>
      <Browseproperties/>
      <RsReview/>
      <Footer/>
    </div>
  )
}

export default RealEstate
