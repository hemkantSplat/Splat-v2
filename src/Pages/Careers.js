import React, {useState, useEffect} from 'react'
import './Careers.css'
import { motion } from 'framer-motion'
import Accordion from '../Components/Accordion'
// import CareersData from '../Data/CareersData'
import { AnimateSharedLayout } from 'framer-motion'
import MetaTitle from '../Components/MetaTitle'
import sanityClient from "../Client"


const Carrers = () => {
const [careersData, setCareersData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "careers"]{
        name,
        roles,
        link,
    }`
      )
      .then((data) => {   
        setCareersData(data.sort((a, b) => a.number - b.number));
      })
      .catch(console.error);
  }, []);
  



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
            <div className='career-container'>
              {careersData?.map((item, index) => {
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
