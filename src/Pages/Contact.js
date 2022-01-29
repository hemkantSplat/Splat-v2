import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import GoogleMapReact from 'google-map-react'
import MetaTitle from '../Components/MetaTitle'
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from 'react-icons/all'
import 'leaflet/dist/leaflet.css'
import Logo from '../Assets/Favicon for map.png'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

export const icon = new Icon({
  iconUrl: Logo,
  iconSize: [42, 42],
})

const Contact = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Contact' />
      <motion.div
        className='container contacts'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <div className='container-center contact-center'>
          <h1 className='contact-title'>CONTACT US</h1>
          <div className='contact-header'>
            <div className='map'>
              {/* <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBF__Dw5DHXqeU7BIHnm9teptNNzuIGZOI',
              }}
              defaultCenter={state.center}
              defaultZoom={state.zoom}
            ></GoogleMapReact> */}
              <Map center={[28.535757045681663, 77.22385410829155]} zoom={15}>
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[28.535757045681663, 77.22385410829155]}
                  icon={icon}
                />
                {/* <Popup position={[28.535757045681663, 77.22385410829155]}>
                <div>
                  <h5>Splat Studio</h5>
                </div>
              </Popup> */}
              </Map>
            </div>
            <div className='contact'>
              <div className='contact-info'>
                <p>
                  <span>DELHI STUDIO:</span> Splat Studio, Behind Triveni
                  Commercial Complex, B-103, Fourth, Khirki Ext Rd, Panchsheel
                  Vihar, Sheikh Sarai Village, Malviya Nagar, New Delhi, Delhi
                  110017
                </p>
                {/* <p>
                <span>Contact Number:</span> +91 98712 19992, +91 98106 09992
              </p> */}
              </div>
              <div className='contact-info'>
                <p>
                  <span>BENGALURU STUDIO:</span> Splat Studio, #7, Second Floor,
                  SJR Commercial Complex, Near Gear Innovative School, Gear
                  Road, Devara Bisanahalli, Bengaluru 560035.
                </p>
                <p>
                  <span>CONTACT NUMBER:</span> +91 9650787318
                </p>
              </div>
            </div>
          </div>
          <div className='contact-mail-info'>
            <div className='mail-info'>
              <h4>GENERAL INFORMATION</h4>
              <p>info@splatstudio.in</p>
            </div>
            <div className='mail-info'>
              <h4>NEW BUSINESS</h4>
              <p>biz@splatstudio.in</p>
            </div>
            <div className='mail-info'>
              <h4>JOB ENQUIRY</h4>
              <p> jobs.splatstudio@gmail.com</p>
            </div>
          </div>
          <div className='social-icons-wrapper'>
            <h4>Witness the Creativity at Splat</h4>
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
                <FaLinkedinIn className='icon' />
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
                href='https://vimeo.com/user12066933'
                target='_blank'
                rel='noreferrer'
              >
                <FaVimeoV className='icon' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact
