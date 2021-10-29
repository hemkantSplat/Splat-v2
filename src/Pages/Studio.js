import React from 'react'
import './Studio.css'
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
import Logo27 from '../Assets/Client Logos/Logo27.jpg'
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

// services

import Service1 from '../Assets/Services /Design.png'
import Service2 from '../Assets/Services /Production.png'
import Service3 from '../Assets/Services /Technology.png'

const Studio = () => {
  const snapshotData = [
    {
      title: 'Year Founded',
      content: 2014,
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
  ]

  const ServicesData = [
    {
      title: 'DESIGN',
      img: Service1,
      content: [
        'Spatial Design',
        'Content Creation',
        'Motion Design',
        'Storyboarding',
        'Web Design',
        'User Experience (UX)',
      ],
    },
    {
      title: 'PRODUCTION',
      img: Service2,
      content: [
        'Live Events',
        'Projection Mapping Show',
        'Virtual Events',
        'VFX & CGI',
        'Films & post-production',
        'Audio Description',
      ],
    },
    {
      title: 'DEVELOPMENT',
      img: Service3,
      content: [
        '2D & 3D Animation',
        'Sterioscopic 3D Content',
        'AR Experiences',
        'VR Experiences',
        'Motion Graphics',
        'Interactive Applications & Web Platforms',
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
      name: 'Sobhna Dwivedi',
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
      img: Team3,
    },
  ]

  const [focus, setFocus] = React.useState(false)
  return (
    <div className='container studio'>
      <div className='studio-header'>
        <div className='container-center studio-header-center'>
          {/* <img src={Home} alt="" /> */}
          <h1>INNOVATORS : EXPERIENCE DESIGNERS : STORYTELLERS</h1>
          <h3>
            We create unforgettable experiences by combining technology with
            spaces
          </h3>
        </div>
      </div>
      <div className='container-center studio-center'>
        <div className='studio-about'>
          <h1>ABOUT SPLAT</h1>
          <p>
            We are a group of <span> Creatives </span>and{' '}
            <span>Tech Enthusiasts</span> turned <span></span> with a power to
            narrate your vision. We are a multi-disciplinary{' '}
            <span>New Media Design Studio</span> and have been in the{' '}
            <span>Digital, Spatial, Visual, Audio</span> design business since
            the nascent days of the web. Our service offerings remain core to
            our mission - designed to make your idea/concept/content sing
            through well-informed content strategy, research-backed design, and
            forward-thinking development that excludes no one.
            <br /> <br />
            With an integrated workflow from Idea-Concept-Design-Solution we’ll
            help you craft your message.
          </p>
        </div>
      </div>
      <div className='studio-snapshot-wrapper'>
        <div className='studio-snapshot-container'>
          <h1>SPLAT STUDIO SNAPSHOT</h1>
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
                  <article className='snapshot mobile-snapshot' key={index}>
                    <h5>{item.title}</h5>
                    <h1>{item.content}</h1>
                  </article>
                )
              })}
              <article className='snapshot desktop-snapshot'>
                <h5>Year Founded</h5>
                {/* <h1>{item.content}</h1> */}
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={2014}
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={5}
                    duration={2}
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
                    duration={2}
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
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={10}
                    duration={2}
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
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={75}
                    duration={2}
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
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={35}
                    duration={2}
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
                <h5>Years Of Collective Team Experience</h5>
                {/* <h1>{item.content}</h1> */}
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={200}
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={3000}
                    duration={2}
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
                <h1>
                  <CountUp
                    start={focus ? 0 : null}
                    end={6000}
                    duration={2}
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
            </div>
          </VisibilitySensor>
        </div>
      </div>
      <div className='services-wrapper'>
        <div className='services-container'>
          <h1>OUR SERVICES</h1>
          <div className='services'>
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
                <article className='service' key={index}>
                  <div className='service-title'>
                    <img src={item.img} alt='' />
                    <h2>{item.title}</h2>
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
          <h1>OUR CLIENTS</h1>

          <div className='clients'>
            {/* {ClientsData.map((item, index) => {
              return <img src={item} key={index} alt='' />
            })} */}
            <ImageGrid
              images={ClientsData}
              visibleCount={30}
              interval={2000}
              animationItemcount={3}
              transitionType={'SCALE_AND_FADE'}
              transitionDuration={1000}
              isActive={true}
            />
          </div>
        </div>
      </div>
      <div className='teams-wrapper'>
        <div className='teams-container'>
          <h1>OUR TEAM</h1>
          <div className='teams'>
            {TeamsData.map((item, index) => {
              return (
                <article className='team'>
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
          {/* <div className='employees'>
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
            <img src={Team1} alt='' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Studio
