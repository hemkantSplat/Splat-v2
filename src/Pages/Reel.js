import React, { useState, useRef, useEffect } from 'react'
import './Reel.css'
import { FaTimes } from 'react-icons/fa'
// import Hero from '../Assets/Reels/Spatial Design Showreel.jpg'
import ReelsData from '../Data/ReelsData'

const Reel = () => {
  const [data, setData] = useState('')
  const [active, setActive] = useState(false)

  const node = useRef()

  const Click = (e) => {
    console.log(e.currentTarget.dataset.id)
    setActive(true)
    setData(e.currentTarget.dataset.id)
  }

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setActive(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div className='container reels'>
      <div className='container-center'>
        <div className='reels-title'>
          <h1>SHOWREELS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            exercitationem vero optio neque quia quam!
          </p>
        </div>
      </div>
      <div className='container-center reels-center'>
        {ReelsData.map((item, index) => {
          return (
            <div
              key={index}
              class='show-reels'
              data-id={item.url}
              onClick={(e) => Click(e)}
            >
              <img src={item.thumbnail} alt='' />
              <div class='title'>{item.name}</div>
            </div>
          )
        })}
        {/* <div
          class='show-reels'
          value='1'
          data-id='https://www.youtube.com/embed/-oFeFsxnQrE'
          onClick={(e) => Click(e)}
        >
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div>
        <div
          class='show-reels'
          data-id='https://www.youtube.com/embed/5fWX4HkPfmE'
          onClick={(e) => Click(e)}
        >
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div>
        <div
          class='show-reels'
          data-id='https://www.youtube.com/embed/0ZV6gVQFWYs'
          onClick={(e) => Click(e)}
        >
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div>
        <div class='show-reels' data-id=''>
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div>
        <div class='show-reels' data-id=''>
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div>
        <div class='show-reels' data-id=''>
          <img src={Hero} alt='' />
          <div class='title'>VFX and CGI</div>
        </div> */}
      </div>
      <div
        className={`${active ? 'modal-show-reel active' : 'modal-show-reel'}`}
      >
        <div className='modal-content'>
          <button className='close' onClick={() => setActive(false)}>
            <FaTimes />
          </button>
          <iframe
            ref={node}
            className='frame'
            title='YouTube video player'
            frameBorder='0'
            src={data}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Reel
