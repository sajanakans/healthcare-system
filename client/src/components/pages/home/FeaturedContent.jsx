import React from 'react'
import FeaturedImg from '../../../assets/images/featured-img.jpg'
import '../../../styles/featuredContent.css';

function FeaturedContent() {
  return (
    <div className="featured-container">
      <div className="row">
        <div className="left-container centered-img">
          <img src={FeaturedImg} alt="" className="left-image"/>
        </div>
        <div className="right-container">
          <div className="image-text-container">
            <h1>Single Visit Dentistry with 30-Years Experience</h1>
            <div className='para'>
              <p>Proin magna urna, vulputate sed ex non, ultricies rutrum enim. Nunc vel ullamcorper erat. Aenean lobortis neque quis turpis posuere viverra. Phasellus ut urna non nulla dictum efficitur vel quis dui.</p>
              <p>Donec ante sapien, dignissim at consequat quis, blandit non justo. Maecenas feugiat purus sit amet libero interdum, et rhoncus ipsum egestas. Donec varius libero eu mollis hendrerit.Nullam et imperdiet purus, vitae euismod eros. Maecenas lacinia aliquam sapien vel volutpat. Aenean dictum, lorem eu imperdiet commodo, mi nulla feugiat sapien, sed pharetra massa nulla vel eros. Morbi dignissim pulvinar lobortis. Sed libero felis, aliquam ut convallis vitae, facilisis eu urna.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="left-container">
          <div className="video-text-container">
            <h1>Ezmo Dental Clinic - Company Profile Video</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere tincidunt elit, nec pellentesque massa ullamcorper nec. Cras nunc dolor, consectetur in quam a, ornare ultrices orci. Cras at nunc ultricies, vulputate leo ut, tristique sem. Suspendisse finibus magna velit, ut eleifend nisi feugiat at. Vestibulum ac sagittis libero. Donec neque risus, facilisis sed elementum ut, scelerisque sed lorem. Donec fringilla dui ex, in tempus neque tincidunt quis. Nullam fringilla ac magna vitae auctor. Pellentesque rutrum aliquet massa. Praesent nec dui eu felis aliquet fermentum id eget mi. Nam libero mauris, finibus ac diam sollicitudin, cursus suscipit turpis.</p>
          </div>
        </div>
        <div className="right-container">
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/-hVy_jxeMeA"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default FeaturedContent
