import React, { useEffect, useState } from 'react'
import MetaTitle from '../Components/MetaTitle'
import './Studio.css'
import AOS from 'aos'
import { motion } from 'framer-motion'
import 'aos/dist/aos.css'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp, { startAnimation } from 'react-countup'
import ImageGrid from 'react-image-grid-animator'
import Logo1 from '../Assets/Client Logos/Logo1.png'
import Logo2 from '../Assets/Client Logos/Logo2.png'
import Logo3 from '../Assets/Client Logos/Logo3.png'
import Logo4 from '../Assets/Client Logos/Logo4.png'
import Logo5 from '../Assets/Client Logos/Logo5.png'
import Logo6 from '../Assets/Client Logos/Logo6.png'
import Logo7 from '../Assets/Client Logos/Logo7.png'
import Logo8 from '../Assets/Client Logos/Logo8.png'
import Logo9 from '../Assets/Client Logos/Logo9.png'
import Logo10 from '../Assets/Client Logos/Logo10.png'
import Logo11 from '../Assets/Client Logos/Logo11.png'
import Logo12 from '../Assets/Client Logos/Logo12.png'
import Logo13 from '../Assets/Client Logos/Logo13.png'
import Logo14 from '../Assets/Client Logos/Logo14.png'
import Logo15 from '../Assets/Client Logos/Logo15.png'
import Logo16 from '../Assets/Client Logos/Logo16.png'
import Logo17 from '../Assets/Client Logos/Logo17.png'
import Logo18 from '../Assets/Client Logos/Logo18.png'
import Logo19 from '../Assets/Client Logos/Logo19.png'
import Logo20 from '../Assets/Client Logos/Logo20.png'
import Logo21 from '../Assets/Client Logos/Logo21.png'
import Logo22 from '../Assets/Client Logos/Logo22.png'
import Logo23 from '../Assets/Client Logos/Logo23.png'
import Logo24 from '../Assets/Client Logos/Logo24.png'
import Logo25 from '../Assets/Client Logos/Logo25.png'
import Logo26 from '../Assets/Client Logos/Logo26.png'
import Logo27 from '../Assets/Client Logos/Logo27.png'
import Logo28 from '../Assets/Client Logos/Logo28.png'
import Logo29 from '../Assets/Client Logos/Logo29.png'
import Logo30 from '../Assets/Client Logos/Logo30.png'
import Logo31 from '../Assets/Client Logos/Logo31.png'
import Logo32 from '../Assets/Client Logos/Logo32.png'
import Logo33 from '../Assets/Client Logos/Logo33.png'
import Logo34 from '../Assets/Client Logos/Logo34.png'
import Logo35 from '../Assets/Client Logos/Logo35.png'
import Logo36 from '../Assets/Client Logos/Logo36.png'
import Logo37 from '../Assets/Client Logos/Logo37.png'
import Logo38 from '../Assets/Client Logos/Logo38.png'
import Logo39 from '../Assets/Client Logos/Logo39.png'
import Logo40 from '../Assets/Client Logos/Logo40.png'

// teams
import Team3 from '../Assets/Team Photos/Hemkant Tripathi (1080x1080px).jpg'
import Team2 from '../Assets/Team Photos/Ayush Nagpal (1080x1080px).jpg'
import Team1 from '../Assets/Team Photos/Hitesh Kumar (1080x1080px).jpg'
import Team4 from '../Assets/Team Photos/Narendra Joshi (1080x1080px).JPG'
import Team5 from '../Assets/Team Photos/Shohna Dwivedi (1080x1080px).JPG'
import Team6 from '../Assets/Team Photos/Arun Samrah (1080x1080px).jpg'

// services

import Service1 from '../Assets/Services /Design.png'
import Service2 from '../Assets/Services /Production.png'
import Service3 from '../Assets/Services /Technology.png'

// splat group

import Group1 from '../Assets/Splat Group Logos/Splat_studio.png'
import Group2 from '../Assets/Splat Group Logos/Tangio_Yellow.png'
import Group3 from '../Assets/Splat Group Logos/TOC logo_V02.png'
import Group4 from '../Assets/Splat Group Logos/Howwl Design Logo White.png'

const Studio = () => {
  const snapshotData = [
    {
      title: 'Year Founded',
      content: 2014,
    },
    {
      title: 'Years Of Collective Team Experience',
      content: 200,
    },
    {
      title: 'Tonnes Of Data Flow',
      content: 3000,
    },
    {
      title: 'Workhours',
      content: 6000,
    },
    {
      title: 'Spatial Design Projects',
      content: 5,
    },
    {
      title: 'Live Events & Projection Shows',
      content: 55,
    },
    {
      title: 'Experiential Technology Projects',
      content: 50,
    },
    {
      title: 'Virtual Events',
      content: 10,
    },
    {
      title: 'Visual Effects Films & Projects',
      content: 18,
    },
    {
      title: 'Documentary & Films',
      content: 75,
    },
    {
      title: 'National & International Recognition',
      content: 6,
    },
    {
      title: 'Audio Described Films',
      content: 35,
    },
  ]

  const ServicesData = [
    {
      title: 'DESIGN',
      img: Service1,
      content: [
        'Space',
        'Experience',
        'Entertainment',
      ],
    },
    {
      title: 'PRODUCTION',
      img: Service2,
      content: [
        'Festivals',
        'Films',
        'Videos',
        'Events',
      ],
    },
    {
      title: 'TECHNOLOGY',
      img: Service3,
      content: [
        'Augmented & Virtual Reality',
        'Immersive & Interactive',
        '3D Projection Mapping',
      ],
    },
  ]

  const ClientsData = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
    Logo16,
    Logo17,
    Logo18,
    Logo19,
    Logo20,
    Logo21,
    Logo22,
    Logo23,
    Logo24,
    Logo25,
    Logo26,
    Logo27,
    Logo28,
    Logo29,
    Logo30,
    Logo31,
    Logo32,
    Logo33,
    Logo34,
    Logo35,
    Logo36,
    Logo37,
    Logo38,
    Logo39,
    Logo40,
  ]

  const ClientCarouselData = [
    [
      Logo1,
      Logo2,
      Logo3,
      Logo4,
      Logo5,
      Logo6,
      Logo7,
      Logo8,
      Logo9,
      Logo10,
      Logo11,
      Logo12,
      Logo13,
      Logo14,
    ],
    [
      Logo17,
      Logo18,
      Logo19,
      Logo20,
      Logo21,
      Logo22,
      Logo23,
      Logo24,
      Logo25,
      Logo26,
      Logo27,
      Logo28,
      Logo29,
      Logo30,
    ],
    [
      Logo33,
      Logo34,
      Logo35,
      Logo36,
      Logo37,
      Logo38,
      Logo39,
      Logo40,
      Logo15,
      Logo16,
      Logo31,
      Logo32,
    ],
  ]

  const TeamsData = [
    {
      name: 'Hitesh Kumar',
      Designation: 'Managing Director & Creative Director, Splat Studio',
      img: Team1,
    },
    {
      name: 'Hemkant Tripathi',
      Designation: 'Director & CTO, Splat Studio',
      img: Team3,
    },
    {
      name: 'Shobhna Dwivedi',
      Designation: 'Chief Financial Officer, Splat Studio',
      img: Team5,
    },
    {
      name: 'Narendra Joshi',
      Designation: 'CEO, TOC Combine Pvt. Ltd',
      img: Team4,
    },
    {
      name: 'Ayush Nagpal',
      Designation: 'Director, Tangio Brand Solutions Pvt. Ltd',
      img: Team2,
    },
    {
      name: 'Arun Samrah',
      Designation: 'Director, Howwl Design',
      img: Team6,
    },
  ]

  const [focus, setFocus] = React.useState(false)
  const [carousel, setCarousel] = useState(0)

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <MetaTitle title='Splat Studio | Studio' />
      <motion.div
        className='container studio'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <div className='studio-header'>
          <div className='container-center studio-header-center'>
            <h1>INNOVATORS : EXPERIENCE DESIGNERS : STORYTELLERS</h1>
            <h3>
              Creators of unforgettable experiences by combining technology with
              spaces
            </h3>
            <p
              data-aos='zoom-in'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='600'
            >
              It all starts with the name. You hear something go splat and feel
              it fall three dimensionally flat before you see it. The art we
              make is like that. It's inside your head before its outside.
              Stories bring people together. And that’s exactly what we want.
              Connect people with never before experiences
            </p>
            <p
              data-aos='zoom-in'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='600'
            >
              We are a multi-disciplinary <span>New Media Design Studio</span>,
              and our service offerings remain core to our mission - design to
              make your idea/concept/content sing through well-informed content
              strategy, research-backed design, and forward-thinking development
              that excludes no one.
               <span style={{marginLeft:'0.2rem'}}>
                This is where everything comes together, from concept to
                delivery. All under one roof
              </span>
              .
            </p>
            <p
              data-aos='zoom-in'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='600'
            >
              Behind the complex technology and artistic wizardry all we are
              really doing with our work is making sure you are on an emotional
              journey, a sentimental journey, a warm and fuzzy place you're not
              quite sure how to describe, except in the most basic childlike
              way, <span>Splat</span>.
            </p>
          </div>
        </div>
        <div className='container-center studio-center'>
          {/* <div className='studio-about'>
            <h1>ABOUT SPLAT</h1>
            <p
              data-aos='zoom-in'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='600'
            >
              We are a group of <span> Creatives </span>and{' '}
              <span>Tech Enthusiasts</span> turned <span></span> with a power to
              narrate your vision. We are a multi-disciplinary{' '}
              <span>New Media Design Studio</span> and have been in the{' '}
              <span>Digital, Spatial, Visual, Audio</span> design business since
              the nascent days of the web. Our service offerings remain core to
              our mission - designed to make your idea/concept/content sing
              through well-informed content strategy, research-backed design,
              and forward-thinking development that excludes no one.
              <br />
              With an integrated workflow from Idea-Concept-Design-Solution
              we’ll help you craft your message.
            </p>
          </div> */}
        </div>
        <div className='studio-snapshot-wrapper'>
          <div className='studio-snapshot-container'>
            <h1 className='studio-title'>STUDIO SNAPSHOT</h1>
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setFocus(true)
                }
              }}
            >
              <div className='studio-snapshots'>
                {snapshotData.map((item, index) => {
                  return (
                    <article
                      className='snapshot mobile-snapshot'
                      key={index}
                      data-aos='zoom-in'
                      data-aos-easing='ease-out-cubic'
                      data-aos-duration='600'
                    >
                      <h5>{item.title}</h5>
                      <h1>{item.content}</h1>
                    </article>
                  )
                })}
                <article className='snapshot desktop-snapshot'>
                  <h5>Year Founded</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={2014}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Years Of Collective Team Experience</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1>
                    <CountUp
                      start={focus ? 0 : null}
                      end={200}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Tonnes of Data Flow</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={3000}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Workhours</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={6000}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Spatial Design Projects</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={5}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Live Events & Projection Shows</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1>
                    <CountUp
                      start={focus ? 0 : null}
                      end={55}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Experential Technology Projects</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1>
                    <CountUp
                      start={focus ? 0 : null}
                      end={50}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Virtual Events</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={10}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Visual Effects Films & Projects</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1>
                    <CountUp
                      start={focus ? 0 : null}
                      end={18}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Documentary & Films</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={75}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>National & International Recognitions</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1>
                    <CountUp
                      start={focus ? 0 : null}
                      end={6}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
                <article className='snapshot desktop-snapshot'>
                  <h5>Audio Described Films</h5>
                  {/* <h1>{item.content}</h1> */}
                  <h1 className='first' style={{ marginTop: '2rem' }}>
                    <CountUp
                      start={focus ? 0 : null}
                      end={35}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} /> +
                        </div>
                      )}
                    </CountUp>
                  </h1>
                </article>
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className='services-wrapper'>
          <div className='services-container'>
            <h1>SERVICES</h1>
            <div
              className='services'
              data-aos='fade-up'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='1000'
            >
              {/* {ServicesData.map((item, index) => {
              return (
                <article className='service' key={index}>
                  <h2>{item.title}</h2>
                  {item.content.map((content, index) => {
                    return <h4 key={index}>{content}</h4>
                  })}
                </article>
              )
            })} */}
              {ServicesData.map((item, index) => {
                return (
                  <article
                    className='service'
                    key={index}
                    // data-aos='fade-up'
                    // data-aos-easing='ease-out-cubic'
                    // data-aos-duration='1000'
                  >
                    <div className='service-title'>
                      <h2>{item.title}</h2>
                      <img src={item.img} alt='' />
                    </div>
                    <div className='service-content'>
                      {item.content.map((content, index) => {
                        return <h3 key={index}>{content}</h3>
                      })}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
        <div className='clients-wrapper'>
          <div className='clients-container'>
            <h1>CLIENTS</h1>
            {/* <div className='clients-carousel'>
            <div className='clients'>
              {ClientCarouselData[carousel].map((item) => {
                return <img src={item} alt='' />
              })}
            </div>
          </div> */}
            <div className='clients'>
              {ClientsData.map((item, index) => {
                return (
                  <img
                    src={item}
                    key={index}
                    alt=''
                    data-aos='zoom-in-up'
                    data-aos-easing='ease-out-cubic'
                    data-aos-duration='600'
                  />
                )
              })}{' '}
              {/* <ImageGrid
              images={ClientsData}
              visibleCount={30}
              interval={2000}
              animationItemcount={3}
              transitionType={'SCALE_AND_FADE'}
              transitionDuration={1000}
              isActive={true}
            />  */}
            </div>
          </div>
        </div>
        <div className='teams-wrapper'>
          <div className='teams-container'>
            <h1>BOARD</h1>
            <div className='teams'>
              {TeamsData.map((item, index) => {
                return (
                  <article
                    className='team'
                    data-aos='zoom-in'
                    data-aos-easing='ease-out-cubic'
                    data-aos-duration='600'
                  >
                    <img src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                    <h3>{item.Designation}</h3>
                  </article>
                )
              })}
              {/* <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article>
            <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article>
            <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article>
            <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article>
            <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article>
            <article className='team'>
              <img src={Team1} alt='team' />
              <h2>Hemkant Tripathi</h2>
              <h2>Co-Founder</h2>
            </article> */}
            </div>
          </div>
        </div>
        <div className='groups-container'>
          <div className='groups-center'>
            <h1>And we have more ...</h1>
            <div className='groups'>
              <a href='/'>
                {' '}
                <img src={Group1} alt='' className='group-img group-first' />
              </a>
              <a href='https://www.howwldesign.com'>
                {' '}
                <img src={Group4} alt='' className='group-img group-second' />
              </a>
              <a href='https://tangio.in'>
                {' '}
                <img src={Group2} alt='' className='group-img group-third' />
              </a>
              <a href='https://toccombine.in'>
                <img src={Group3} alt='' className='group-img group-fourth' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Studio
