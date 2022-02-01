import React from 'react'
import './Home.css'
import Video from '../Assets/Video.mp4'
import MetaTitle from '../Components/MetaTitle'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Home' />
      <motion.div
        style={{ overFlow: 'hidden', width:'100%', minHeight:'100vh' }}
        // className='container home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        {/* <div id='video1'>
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              inset: '0px',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                margin: 'auto',
                position: 'absolute',
                zIndex: 1,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                visibility: 'visible',
                opacity: 1,
                width: '100vw',
                height: 'auto',
              }}
            >
              <source src={Video} type='video/mp4' />
            </video>
          </div>
        </div> */}
        {/* <div id='video2'>
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              top: '0px',
              left: '0px',
              bottom: '0px',
              right: '0px',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundColor: 'transparent',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundImage: 'none',
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                margin: 'auto',
                position: 'absolute',
                zIndex: 1,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                visibility: 'visible',
                opacity: 1,
                width: 'auto',
                height: '502px',
                borderRadius: '50%',
              }}
            >
              <source
                src='https://monopo.co.jp/wp-content/themes/monopo/video/circle4.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div> */}
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          playsInline
          data-wf-ignore='true'
          data-object-fit='cover'
        >
          <source src={Video} type='video/mp4' data-wf-ignore='true' />
        </video>
        {/* <video autoPlay muted loop id='myVideo2'>
          <source
            src='https://monopo.co.jp/wp-content/themes/monopo/video/circle4.mp4'
            type='video/mp4'
          />
        </video> */}
        {/* <div className='gradient'></div> */}
        <div
          // className='container-center home-center'
          style={{position: 'absolute',
          width:'100%',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
zIndex: '99'}}
        >
          <div className='hero-title' style={{ overFlow: 'hidden' }}>
            <h1>
              We weave magic into <br />
              the stories
            </h1>
            <h3>
              Experience Centres, Museums, Shows or Films, <br /> we
              thrill,surprise and amaze audiences
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home
