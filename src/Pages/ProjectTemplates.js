import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'

import './ProjectTemplate.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import WorkData from '../Data/WorkData'

const ProjectTemplates = () => {
  const pills = ['Live Event & Projection Shows', 'Testing', 'Testing2']
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const filteredData = WorkData.filter((item) => item.slug === id)
    console.log(filteredData)
    setData(filteredData[0])
  }, [])

  return (
    <div className='container projects-container'>
      <div className='container-center projects-center'>
        <Link to='/work'>
          <BsChevronLeft className='back-btn' />
        </Link>
        {data && (
          <>
            <h1>{data.title}</h1>
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
              <div className='project-content'>
                <p>{data.description}</p>
                <h4>Client: {data.client}</h4>
                <h4>Location: {data.location}</h4>
                <h4 className='tags'>
                  Tags:{' '}
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
                </h4>
              </div>
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
  )
}

export default ProjectTemplates
