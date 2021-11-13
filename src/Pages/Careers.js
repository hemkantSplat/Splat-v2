import React from 'react'
import './Careers.css'
import { motion } from 'framer-motion'
import Accordion from '../Components/Accordion'
import CareersData from '../Data/CareersData'
import { AnimateSharedLayout } from 'framer-motion'
import MetaTitle from '../Components/MetaTitle'

const Carrers = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Careers' />
      <motion.div
        className='container careers'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
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
      </motion.div>
    </>
  )
}

export default Carrers
