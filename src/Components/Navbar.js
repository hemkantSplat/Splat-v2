import React from 'react'
import Logo from '../Assets/Logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

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
              className='nav-link flip-animate-1'
              activeStyle={{ borderBottom: '1px solid #ee7739' }}
              to='/work'
            >
              <span data-hover='Work'>Work</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link flip-animate-1'
              activeStyle={{ borderBottom: '1px solid #ee7739' }}
              to='/studio'
            >
              <span data-hover='Studio'> Studio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link flip-animate-1'
              activeStyle={{ borderBottom: '1px solid #ee7739' }}
              to='/reels'
            >
              <span data-hover='Reels'>Reels</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link flip-animate-1'
              activeStyle={{ borderBottom: '1px solid #ee7739' }}
              to='/careers'
            >
              <span data-hover='Careers'>Careers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link flip-animate-1'
              activeStyle={{ borderBottom: '1px solid #ee7739' }}
              to='/contact'
            >
              <span data-hover='Contact'>Contact</span>
            </NavLink>
          </li>
        </ul>
        {toggleOpen ? (
          <IoCloseSharp
            className='toggle'
            onClick={() => setToggleOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            className='toggle'
            onClick={() => setToggleOpen(true)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
