import React, { useState } from "react";
import "./Careers.css";
import Accordion from "../Components/Accordion";
const Carrers = () => {
  return (
    <div className="container careers">
      <div className="container-center career-center">
        <h1>JOIN US</h1>
        <div className="career-container">
          <Accordion />
          <Accordion />
          <Accordion />
          {/* <div className="career">
            <div className="career-title">
              <h3>Executive Producer (Multimedia Large Scale Projects)</h3>
              <div>
                {" "}
                <button className="career-btn">Apply Now</button>
                <BsChevronDown
                  className="down-btn"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
            {open && (
              <div className="career-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                optio velit molestias perferendis nobis harum, ipsa a eaque,
                temporibus rerum, aspernatur necessitatibus aliquid. Atque unde
                accusantium soluta assumenda sapiente, explicabo labore officiis
                minima, repudiandae magnam commodi facere, ad blanditiis
                consectetur. Quaerat illo itaque possimus nesciunt rerum,
                voluptatibus corporis consequatur eos illum necessitatibus quam
                voluptatem atque. Quo doloremque optio exercitationem minima ab.
                Suscipit iste libero fuga aperiam aspernatur dolorum quibusdam
                culpa accusamus veniam possimus vel quis illo facere tempore
                autem quaerat totam deleniti doloribus harum dolore officiis
                rem, quod laudantium asperiores! Ex tenetur harum soluta eos
                veniam odit repellat rem distinctio.
              </div>
            )}
          </div>
          <div className="career">
            <div className="career-title">
              <h3>Executive Producer (Multimedia Large Scale Projects)</h3>
              <div>
                {" "}
                <button className="career-btn">Apply Now</button>
                <BsChevronDown className="down-btn" />
              </div>
            </div>
            {open && (
              <div className="career-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                optio velit molestias perferendis nobis harum, ipsa a eaque,
                temporibus rerum, aspernatur necessitatibus aliquid. Atque unde
                accusantium soluta assumenda sapiente, explicabo labore officiis
                minima, repudiandae magnam commodi facere, ad blanditiis
                consectetur. Quaerat illo itaque possimus nesciunt rerum,
                voluptatibus corporis consequatur eos illum necessitatibus quam
                voluptatem atque. Quo doloremque optio exercitationem minima ab.
                Suscipit iste libero fuga aperiam aspernatur dolorum quibusdam
                culpa accusamus veniam possimus vel quis illo facere tempore
                autem quaerat totam deleniti doloribus harum dolore officiis
                rem, quod laudantium asperiores! Ex tenetur harum soluta eos
                veniam odit repellat rem distinctio.
              </div>
            )}
          </div>
          <div className="career">
            <div className="career-title">
              <h3>Executive Producer (Multimedia Large Scale Projects)</h3>
              <div>
                {" "}
                <button className="career-btn">Apply Now</button>
                <BsChevronDown className="down-btn" />
              </div>
            </div>
            {open && (
              <div className="career-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                optio velit molestias perferendis nobis harum, ipsa a eaque,
                temporibus rerum, aspernatur necessitatibus aliquid. Atque unde
                accusantium soluta assumenda sapiente, explicabo labore officiis
                minima, repudiandae magnam commodi facere, ad blanditiis
                consectetur. Quaerat illo itaque possimus nesciunt rerum,
                voluptatibus corporis consequatur eos illum necessitatibus quam
                voluptatem atque. Quo doloremque optio exercitationem minima ab.
                Suscipit iste libero fuga aperiam aspernatur dolorum quibusdam
                culpa accusamus veniam possimus vel quis illo facere tempore
                autem quaerat totam deleniti doloribus harum dolore officiis
                rem, quod laudantium asperiores! Ex tenetur harum soluta eos
                veniam odit repellat rem distinctio.
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carrers;
