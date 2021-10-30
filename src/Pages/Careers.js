import React from 'react'
import './Careers.css'
import Accordion from '../Components/Accordion'
import CareersData from '../Data/CareersData'

const Carrers = () => {
  return (
    <div className='container careers'>
      <div className='container-center career-center'>
        <h1>JOIN US</h1>
        <div className='career-container'>
          {CareersData.map((item, index) => {
            return <Accordion key={index} item={item} />
          })}
          {/* <Accordion />
          <Accordion />
          <Accordion /> */}
        </div>
      </div>
    </div>
  )
}

export default Carrers
