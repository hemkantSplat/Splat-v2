import '../Pages/Careers.js'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import React, { useState } from 'react'

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='career'>
      <div className='career-title'>
        <h3>{item.title}</h3>
        <div>
          <button className='career-btn'>
            <a href={item.link}>Apply Now</a>
          </button>
          {open ? (
            <BsChevronUp className='down-btn' onClick={() => setOpen(!open)} />
          ) : (
            <BsChevronDown
              className='down-btn'
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>
      {open && <div className='career-content'>{item.description}</div>}
    </div>
  )
}

export default Accordion
