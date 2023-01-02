import React from 'react'
import './Loader.css'
import { motion } from 'framer-motion'
import Logo from '../Assets/Logo.png'

const Loader = () => {
  return (
    <div id='load' class='s1 s2'>
      <motion.div
        class='circle tra20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
      >
        <svg class='base' width='500' height='500' viewBox='0 0 500 500'>
          <path
            class='c1 JWsFAGOO_0'
            stroke='#fff'
            stroke-width='2'
            fill='none'
            d='M2,250A248,248 0,1,1 498,250A248,248 0,1,1 2,250'
          />
          <path
            class='c2 JWsFAGOO_1'
            stroke='#fff'
            stroke-width='2'
            fill='none'
            d='M2,250A248,248 0,1,1 498,250A248,248 0,1,1 2,250'
          />
        </svg>
        <p class='logos js-blur tra30 on'>
          <picture>
            <source
              srcset='https://monopo.co.jp/wp-content/themes/monopo/img/webp/logo_monopo.png.webp'
              type='image/webp'
              alt='monopo'
            />
            <img
              src='https://monopo.co.jp/wp-content/themes/monopo/img/orgs/logo_monopo.png'
              alt='アダルト'
            />
          </picture>
        </p>
      </motion.div>
    </div>
  )
}

export default Loader
