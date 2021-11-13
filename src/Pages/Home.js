import React from 'react'
import './Home.css'
import Video from '../Assets/bg2.mp4'
import MetaTitle from '../Components/MetaTitle'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Home' />
      <motion.div
        className='container home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <video autoPlay muted loop id='myVideo'>
          <source src={Video} type='video/mp4' />
        </video>
        <div className='gradient'></div>
        <div className='container-center home-center'>
          <h1 className='hero-title'>Home</h1>
        </div>
      </motion.div>
    </>
  )
}

export default Home
