import '../Pages/Careers.js'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import React, { useState } from 'react'

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='career'>
      <div className='career-title' onClick={() => setOpen(!open)}>
        <h2>
          {' '}
          {open ? (
            <BsChevronUp className='down-btn' onClick={() => setOpen(!open)} />
          ) : (
            <BsChevronDown
              className='down-btn'
              onClick={() => setOpen(!open)}
            />
          )}
          {item.title}
        </h2>
        <div>
          <button className='career-btn'>
            <a href={item.link}>Apply Now</a>
          </button>
        </div>
      </div>
      {open && (
        <div className='career-content'>
          <h3>Roles & Requirements</h3>
          <ul className='roles'>
            {item.description.map((content, index) => {
              return <li key={index}>{content}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Accordion
