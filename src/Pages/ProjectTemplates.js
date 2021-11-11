import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './ProjectTemplate.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import WorkData from '../Data/WorkData'
import MetaTitle from '../Components/MetaTitle'

const ProjectTemplates = () => {
  const pills = ['Live Event & Projection Shows', 'Testing', 'Testing2']
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const filteredData = WorkData.filter((item) => item.slug === id)
    console.log(filteredData)
    setData(filteredData[0])
  }, [])

  const ContainerVariant = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { ease: 'easeIn', staggerChildren: 0.1 },
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

  return (
    <>
      <MetaTitle title={`Splat Studio | ${data.title}`} />
      <div className='container projects-container'>
        <div className='container-center projects-center'>
          <Link to='/work'>
            <BsChevronLeft className='back-btn' />
          </Link>
          {data && (
            <>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeIn', delay: 0.05, duration: 0.2 }}
              >
                {data.title}
              </motion.h1>
              <div className='projects-detail-container'>
                <iframe
                  width='100%'
                  height='400px'
                  src={data.video}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <motion.div
                  className='project-content'
                  variants={ContainerVariant}
                  initial='initial'
                  animate='show'
                >
                  <motion.p variants={ItemVariant}>{data.description}</motion.p>
                  <motion.h4 variants={ItemVariant} className='heading'>
                    <span>Client: </span>
                    <span>{data.client}</span>
                  </motion.h4>
                  <motion.h4 variants={ItemVariant} className='location'>
                    <span>Location: </span>
                    <span>{data.location}</span>
                  </motion.h4>
                  <motion.h4 className='tags' variants={ItemVariant}>
                    <span>Tags: </span>
                    <span>
                      {' '}
                      <Stack
                        className='pills'
                        direction='row'
                        spacing={1}
                        style={{ flexWrap: 'wrap' }}
                      >
                        {data.tags &&
                          data.tags.map((item) => {
                            return <Chip label={item} className='tag' />
                          })}
                      </Stack>
                    </span>
                  </motion.h4>
                </motion.div>
              </div>
            </>
          )}

          {/* <h1>IN5: The Golden Temple Experium</h1>
        <div className='projects-detail-container'>
          <iframe
            width='100%'
            height='400px'
            src='https://www.youtube.com/embed/pw6hzF_F4XY'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <div className='project-content'>
            <p>
              A high-tech multimedia exhibition, allowing people to dive in an
              Immersive experience, enveloping and enlightening experiential
              journey into the history and beliefs of Sikhi — one of the world’s
              youngest religions — and its consummate soul: Harmandir Sahib (The
              Golden Temple), Amritsar. In order to create a spectacular and
              magical experience, PDA HaB contacted Splat Studio to provide
              creative and technical solutions for the world's first such
              experium on the Golden temple. PDA conceived to design and execute
              an experiential space at the Bramalea City Centre, Canada. The
              experium is one of its kinds in the world, where high tech
              communication solutions give multi sensory experience to the
              visitors.
            </p>
            <h4>Client: Project Client</h4>
            <h4>Location: Project Location</h4>
            <h4 className='tags'>
              Tags:{' '}
              <Stack
                className='pills'
                direction='row'
                spacing={1}
                style={{ flexWrap: 'wrap' }}
              >
                {pills.map((item) => {
                  return <Chip label={item} className='tag' />
                })}
              </Stack>
            </h4>
          </div>
        </div> */}
        </div>
      </div>
    </>
  )
}

export default ProjectTemplates
