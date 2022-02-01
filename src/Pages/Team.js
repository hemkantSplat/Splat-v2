import React,{useEffect} from 'react';
import "./Team.css"
import MetaTitle from '../Components/MetaTitle'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TeamsData from '../Data/TeamsData';

const Team = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

const ContainerVariant = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.5, staggerChildren: 0.35 },
  },
}

const ItemVariant = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn' },
  },
}
  return (
    <>
      <MetaTitle title='Splat Studio | Reels' />
      <motion.div
        className='container team-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <div className='container-center'>
          <div className='team-title'>
            <h1>MEET THE SPLATTERS</h1>
            <p>
              Our multi-disciplinary team is tight-knit, experienced, and
              passionate about doing the work that matters.
              <br /> We are strategists, storytellers, problem solvers,
              creatives, technical experts, and all around kind people.
            </p>
          </div>
        </div>
        <motion.div
          className='container-center team-center'
          variants={ContainerVariant}
          initial='initial'
          animate='show'
        >
          {TeamsData.map((item, index) => {
            return (
              <motion.div
                key={index}
                class='show-team-reels'
                variants={ItemVariant}
                data-aos='zoom-in'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='600'
              >
                {/* <div className="team-wrap">
<div className="bg-container">
  <div className="bg-wrap">

  </div>
</div>
                </div> */}
                <div className='show-team-reels-img'>
                  <img src={item.thumbnail} alt='' />
                </div>
                <div class='team-title'>{item.name}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
};

export default Team;
