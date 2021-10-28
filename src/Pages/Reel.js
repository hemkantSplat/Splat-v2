import React, {useState} from "react";
import "./Reel.css" 
import {FaTimes} from "react-icons/fa"
import Hero from "../Assets/Reels/Spatial Design Showreel.jpg"


const Reel = () => {
const [data, setData] = useState("")
const [active, setActive] = useState(false)

const Click = (e) => {
console.log(e.currentTarget.dataset.id)
setActive(true)
setData(e.currentTarget.dataset.id)
}


  return (
    <div className="container reels">
      <div className="container-center reels-center">
        <div class="show-reels" value="1" data-id="https://www.youtube.com/embed/-oFeFsxnQrE"  onClick={(e) => Click(e)}>
          <img src={Hero}  alt="" />
          <div class="title">VFX and CGI</div>
        </div>
        <div class="show-reels" data-id="https://www.youtube.com/embed/5fWX4HkPfmE" onClick={(e) => Click(e)}>
          <img src={Hero} alt="" />
          <div class="title">VFX and CGI</div>
        </div>
        <div class="show-reels" data-id="https://www.youtube.com/embed/0ZV6gVQFWYs" onClick={(e) => Click(e)}>
          <img src={Hero} alt="" />
          <div class="title">VFX and CGI</div>
        </div>
        <div class="show-reels" data-id="">
          <img src={Hero} alt="" />
          <div class="title">VFX and CGI</div>
        </div>
        <div class="show-reels" data-id="">
          <img src={Hero} alt="" />
          <div class="title">VFX and CGI</div>
        </div>
        <div class="show-reels" data-id="">
          <img src={Hero} alt="" />
          <div class="title">VFX and CGI</div>
        </div>
      </div>
      <div className={`${active ? 'modal-show-reel active' : 'modal-show-reel'}`}>
        <div className="modal-content">
          <button className="close" onClick={() => setActive(false)}><FaTimes /></button>
          <iframe
            className="frame"
            title="YouTube video player"
            frameBorder="0"
            src={data}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reel;
