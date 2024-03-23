import React from 'react'
import '../../../styles/home.css'
import Navbar from '../../Navbar'
import HeroSection from './HeroSection'
import FeaturedContent from './FeaturedContent'
import Footer from '../../Footer'

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <HeroSection/>
      <FeaturedContent/>
      <Footer/>
    </div>
  )
}

export default Home
