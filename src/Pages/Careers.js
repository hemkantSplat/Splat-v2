import React, { useState } from 'react'
import './Careers.css'
import Accordion from '../Components/Accordion'
const Carrers = () => {
  return (
    <div className='container careers'>
      <div className='container-center career-center'>
        <h1>JOIN US</h1>
        <div className='career-container'>
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default Carrers
