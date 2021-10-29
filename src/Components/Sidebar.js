import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = ({ toggleOpen, setToggleOpen }) => {
  return (
    <aside className={`${toggleOpen ? 'sidebar active' : 'sidebar'}`}>
      <div className='sidebar-center'>
        <ul className='sidebar-links'>
          <li>
            <Link to='/' onClick={() => setToggleOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/work' onClick={() => setToggleOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to='/studio' onClick={() => setToggleOpen(false)}>
              Studio
            </Link>
          </li>
          <li>
            <Link to='/reels' onClick={() => setToggleOpen(false)}>
              Reels
            </Link>
          </li>
          <li>
            <Link to='/careers' onClick={() => setToggleOpen(false)}>
              Careers
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => setToggleOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
