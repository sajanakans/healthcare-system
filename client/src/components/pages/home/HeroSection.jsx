import React from 'react'
// import { Button } from '@mui/material';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HeroBg from '../../../assets/images/dashboard-bg1.jpg'
import '../../../styles/heroSection.css'

function HeroSection() {
  return (
    <div className='hero-container ' >
      <img src={HeroBg} alt="Hero Background" className='bg-img'/>
      <div className="text-container">
        <h1>Revitalize Your Smile, Renew Your Confidence.</h1>
        {/* <Button className='find-btn'>
          Find a doctor
          <KeyboardDoubleArrowRightIcon/>
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection
