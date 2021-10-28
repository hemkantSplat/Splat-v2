import React from "react";
import "./ProjectTemplate.css";

const ProjectTemplates = () => {
  return (
    <div className="container projects-container">
      <div className="container-center projects-center">
        <h1>IN5: The Golden Temple Experium</h1>
        <div className="projects-detail-container">
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/pw6hzF_F4XY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="project-content">
            <p>
            A high-tech multimedia exhibition, allowing people to dive in an Immersive experience, enveloping and enlightening experiential journey into the history and beliefs of Sikhi — one of the world’s youngest religions — and its consummate soul: Harmandir Sahib (The Golden Temple), Amritsar. In order to create a spectacular and magical experience, PDA HaB contacted Splat Studio to provide creative and technical solutions for the world's first such experium on the Golden temple. PDA conceived to design and execute an experiential space at the Bramalea City Centre, Canada. The experium is one of its kinds in the world, where high tech communication solutions give multi sensory experience to the visitors.
            </p>
            {/* <p>
              We designed & produced the experiences like a unique 360°
              audiovisual immersive holographic show with revolving audience
              seating, which narrated India's Swachhata Story, Immersive LED
              zones, Interactive Dome projection, Immersive 270-degree
              projections, Holographic screen installations, a series of
              captivating sensor-based interactive projections, interactive
              games through touchless sensor-based interactions, mobile apps, a
              website and much more.
            </p> */}
            <h4>Client: Project Client</h4>
            <h4>Location: Project Location</h4>
            <h4>Tags: Project Tags</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplates;
