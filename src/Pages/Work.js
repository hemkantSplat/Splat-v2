import React, { useState, useEffect } from 'react'
import './Work.css'
import { Link } from 'react-router-dom'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Hero from '../Assets/projects/Hero MotoCorp 10 years celebration Projection Mapping, 2021.png'
import IN5 from '../Assets/projects/IN5 Golden Temple Experium 2019.png'
import Swachta from '../Assets/projects/Rashtriya Swachhta Kendra Experience Centre 2020.png'
import Diwas from '../Assets/projects/Rajasthan Diwas Projection Mapping Show 2016.png'
import Lakme from '../Assets/projects/Lakme Fashion Week, Projection Mapping for Rohit Bal 2016.png'
import Mysuru from '../Assets/projects/Mysuru Townhall Projection Mapping Show 2018.png'
import WorkData from '../Data/WorkData'
import { motion } from 'framer-motion'
import MetaTitle from '../Components/MetaTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Work = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(WorkData)
  const [selected, setSelected] = useState(0)

  const filters = [
    'All Projects',
    'Spatial Design',
    'Live Events & Projection Shows',
    'Experential Technology',
    'Virtual Events',
    'Visual Effects',
    '2D & 3D Animation',
    'Documentary & Films',
  ]

  const handleFilter = (item, index) => {
    setSelected(index)
    if (item === 'All Projects') {
      setData(WorkData)
    } else {
      const filter = WorkData.filter((i) => i.category === item)
      setData(filter)
    }
  }

  const ContainerVariant = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5, staggerChildren: 0.35 },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeOut',
      },
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
    exit: {
      opacity: 0,
    },
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <MetaTitle title='Splat Studio | Work' />
      <div className='container work'>
        <div className='container-center work-center'>
          <div className='mobile-filter-container'>
            <button className='filter-btn' onClick={() => setOpen(!open)}>
              FILTER BY{' '}
              {open ? (
                <BsChevronUp className='filter-down' />
              ) : (
                <BsChevronDown className='filter-down' />
              )}
            </button>
            <div
              className={`${
                open ? 'mobile-filters active-filter' : 'mobile-filters'
              }`}
            >
              {filters.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      index === selected
                        ? 'mobile-filter mobile-filter-active'
                        : 'mobile-filter'
                    }`}
                    onClick={() => {
                      handleFilter(item, index)
                      setOpen(false)
                    }}
                  >
                    {item}
                  </button>
                )
              })}
              {/* <button className='mobile-filter'>All</button>
            <button className='mobile-filter'>Spatial Design</button>
            <button className='mobile-filter'>
              Live Events & Projection Shows
            </button>
            <button className='mobile-filter'>Experiential Technology</button>
            <button className='mobile-filter'>Virtual Events</button>
            <button className='mobile-filter'>Visual Effects</button>
            <button className='mobile-filter'>2D & 3D Animation</button>
            <button className='mobile-filter'>Documentary and Films</button> */}
            </div>
          </div>
          <div className='filter-container'>
            <h4>FILTER BY</h4>
            <div className='filters'>
              {filters.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      index === selected ? 'filter filter-active' : 'filter'
                    }`}
                    onClick={() => handleFilter(item, index)}
                  >
                    {item}
                  </button>
                )
              })}
              {/* <button className='filter'>All</button>
            <button className='filter'>Spatial Design</button>
            <button className='filter'>Live Events & Projection Shows</button>
            <button className='filter'>Experiential Technology</button>
            <button className='filter'>Virtual Events</button>
            <button className='filter'>Visual Effects</button>
            <button className='filter'>2D & 3D Animation</button>
            <button className='filter'>Documentary and Films</button> */}
            </div>
          </div>
          <div></div>
          <motion.div
            className='projects'
            variants={ContainerVariant}
            initial='initial'
            animate='show'
            exit='exit'
          >
            {data.map((item, index) => {
              return (
                <motion.article
                  className='project'
                  variants={ItemVariant}
                  data-aos='zoom-in'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='600'
                >
                  <Link to={`/work/${item.slug}`} className='work-image'>
                    {' '}
                    <img src={item.thumbnail} alt={item.title} />
                  </Link>
                  <h2>
                    <Link to={`/work/${item.slug}`} className='flip-animate'>
                      <span data-hover={item.title}>{item.title}</span>
                    </Link>
                  </h2>
                </motion.article>
              )
            })}
            {/* <article className='project'>
            <Link to='/work/Hero'>
              <img src={Hero} alt='' />
              <h2>
                Hero MotoCorp 10 years celebration Projection Mapping, 2021
              </h2>
            </Link>
          </article>
          <article className='project'>
            <Link to='/'>
              <img src={Swachta} alt='' />
              <h2>Rashtriya Swachhta Kendra Experience Centre 2020</h2>
            </Link>
          </article>
          <article className='project'>
            <Link to='/'>
              <img src={IN5} alt='' />
              <h2>IN5 Golden Temple Experium 2019</h2>
            </Link>
          </article>
          <article className='project'>
            <Link to='/'>
              <img src={Mysuru} alt='' />
              <h2>Mysuru Townhall Projection Mapping Show 2018</h2>
            </Link>
          </article>
          <article className='project'>
            <Link to='/'>
              <img src={Lakme} alt='' />
              <h2>Lakme Fashion Week, Projection Mapping for Rohit Bal 2016</h2>
            </Link>
          </article>
          <article className='project'>
            <Link to='/'>
              <img src={Diwas} alt='' />
              <h2>Rajasthan Diwas Projection Mapping Show 2016</h2>
            </Link>
          </article> */}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Work
