import React from 'react'
import Logo from '../Assets/Logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = ({ setToggleOpen, toggleOpen }) => {
  return (
    <nav>
      <div className='nav-center'>
        <NavLink to='/'>
          {' '}
          <img src={Logo} alt='logo' className='logo' />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink
              className='nav-link'
              activeStyle={{ color: '#ee7739' }}
              to='/work'
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              activeStyle={{ color: '#ee7739' }}
              to='/studio'
            >
              Studio
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              activeStyle={{ color: '#ee7739' }}
              to='/reels'
            >
              Reels
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              activeStyle={{ color: '#ee7739' }}
              to='/careers'
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              activeStyle={{ color: '#ee7739' }}
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <GiHamburgerMenu
          className='toggle'
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    </nav>
  )
}

export default Navbar
