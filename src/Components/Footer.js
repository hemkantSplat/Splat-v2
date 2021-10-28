import React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from 'react-icons/all'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='container-center footer-center'>
        <div className='footer-links'>
          <h5>
            <a href='/copyright'>Copyright</a>
          </h5>
          {/* <h5>
            <a href='/disclaimer'>Disclaimer</a>
          </h5> */}
        </div>
        <div className='footer-name'>
          <h4>&copy; Splat Media Pvt Ltd 2021</h4>
        </div>
        <div className='footer-social-links'>
          <a
            href='https://www.instagram.com/splat.studio/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram className='footer-icon' />
          </a>
          <a
            href='https://www.facebook.com/SplatStudio.in'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF className='footer-icon' />
          </a>

          <a
            href='https://www.linkedin.com/company/splat-studio'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='footer-icon' />
          </a>
          <a
            href='https://twitter.com/studiosplat'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter className='footer-icon' />
          </a>

          <a
            href='https://www.youtube.com/user/Splatoscope'
            target='_blank'
            rel='noreferrer'
          >
            <FaYoutube className='footer-icon' />
          </a>
          <a
            href='https://www.youtube.com/user/Splatoscope'
            target='_blank'
            rel='noreferrer'
          >
            <FaVimeoV className='footer-icon' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
