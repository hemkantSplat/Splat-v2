import React from 'react'
import './Careers.css'
import Accordion from '../Components/Accordion'
import CareersData from '../Data/CareersData'
import { AnimateSharedLayout } from 'framer-motion'
import MetaTitle from '../Components/MetaTitle'

const Carrers = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Careers' />
      <div className='container careers'>
        <div className='container-center career-center'>
          <h1>JOIN US</h1>
          <AnimateSharedLayout>
            <div className='career-container' layout>
              {CareersData.map((item, index) => {
                return <Accordion key={index} item={item} />
              })}
            </div>
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  )
}

export default Carrers
