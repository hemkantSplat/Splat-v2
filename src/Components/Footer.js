import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [state, setState] = useState();

  const location = useLocation();

  useEffect(() => {
    setState(location.pathname === "/contact");
  }, [location.pathname]);

  return (
    <footer style={{ position: state ? "absolute" : "fixed" }}>
      <div className="container-center footer-center">
        {/* <div className='footer-links'>
          <h5>
            <a href='/copyright'>COPYRIGHT</a>
          </h5>
        </div> */}
        <div className="footer-name">
          <h4>
            <a href="/copyright">
              &copy; Splat Media Pvt Ltd {new Date().getFullYear()}
            </a>
          </h4>
        </div>
        <div className="footer-social-links">
          <a
            href="https://www.instagram.com/splat.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/SplatStudio.in"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="footer-icon" />
          </a>

          <a
            href="https://www.linkedin.com/company/splat-studio"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/studiosplat"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="footer-icon" />
          </a>

          <a
            href="https://www.youtube.com/user/Splatoscope"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="footer-icon" />
          </a>
          <a
            href="https://vimeo.com/user12066933"
            target="_blank"
            rel="noreferrer"
          >
            <FaVimeoV className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
