import '../Pages/Careers.js'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import React, { useState } from 'react'

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='career'>
      <div className='career-title' onClick={() => setOpen(!open)}>
        <h3>
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
        </h3>
        <div>
          <button className='career-btn'>
            <a href={item.link}>Apply Now</a>
          </button>
        </div>
      </div>
      {open && <div className='career-content'>{item.description}</div>}
    </div>
  )
}

export default Accordion
