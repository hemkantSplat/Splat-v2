import '../Pages/Careers.js'
import { BsChevronRight } from 'react-icons/bs'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='career' layout>
      <div className='career-title' onClick={() => setOpen(!open)} layout>
        <h2>
            <BsChevronRight className='down-btn' onClick={() => setOpen(!open)} />
          {item?.name}
        </h2>
        <div>
          <button className='career-btn'>
            <a target="_blank" href={item.link}>Apply Now</a>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className='career-content'
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>Roles & Requirements</h3>
            <ul className='roles'>
              {item?.roles?.map((content, index) => {
                return (
                  <li key={index}>
                    <span>- </span>
                    {content}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
