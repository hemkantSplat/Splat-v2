import React, { useState } from 'react'
import './Contact.css'
import GoogleMapReact from 'google-map-react'
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from 'react-icons/all'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import { Icon } from 'leaflet'
// import * as parkData from './data.json'

// export const icon = new Icon({
//   iconUrl: '/skateboarding.svg',
//   iconSize: [25, 25],
// })

const Contact = () => {
  const [state, setState] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 5,
  })
  // const [activePark, setActivePark] = React.useState(null)
  return (
    <div className='container contacts'>
      <div className='container-center contact-center'>
        <div className='contact-header'>
          <div className='map'>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBF__Dw5DHXqeU7BIHnm9teptNNzuIGZOI',
              }}
              defaultCenter={state.center}
              defaultZoom={state.zoom}
            ></GoogleMapReact>
          </div>
          <div className='contact-info'>
            <p>
              <span>Office Address:</span> Splat Studio, Behind Triveni
              Commercial Complex, B-103, Fourth, Khirki Ext Rd, Panchsheel
              Vihar, Sheikh Sarai Village, Malviya Nagar, New Delhi, Delhi
              110017
            </p>
            <p>
              <span>Contact Number:</span> +91 98712 19992, +91 98106 09992
            </p>
          </div>
        </div>
        <div className='contact-mail-info'>
          <div className='mail-info'>
            <h4>General Information</h4>
            <p>info@splatstudio.in</p>
          </div>
          <div className='mail-info'>
            <h4>New Business</h4>
            <p>biz@splatstudio.in</p>
          </div>
          <div className='mail-info'>
            <h4>Job Enquiry</h4>
            <p> jobs.splatstudio@gmail.com</p>
          </div>
        </div>
        <div className='social-icons-container'>
          <a
            href='https://www.instagram.com/splat.studio/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram className='icon' />
          </a>
          <a
            href='https://www.facebook.com/SplatStudio.in'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF className='icon' />
          </a>

          <a
            href='https://www.linkedin.com/company/splat-studio'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='icon' />
          </a>
          <a
            href='https://twitter.com/studiosplat'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter className='icon' />
          </a>

          <a
            href='https://www.youtube.com/user/Splatoscope'
            target='_blank'
            rel='noreferrer'
          >
            <FaYoutube className='icon' />
          </a>
          <a
            href='https://www.youtube.com/user/Splatoscope'
            target='_blank'
            rel='noreferrer'
          >
            <FaVimeoV className='icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
