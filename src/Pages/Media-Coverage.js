import React from "react";
import { MediaCoverageData } from "../Data/MediaCoverage";
import "./Media-Coverage.css";
import InfluenceRama from "../Assets/Influence of Ram.jpg";

const MediaCoverage = () => {
  return (
    <div className="container media-coverage">
      <h1 className="media-heading">Media Coverage</h1>
      <div className="media-image-container">
        <img src={InfluenceRama} alt="InfluenceRama" className="media-image" />
        <div className="media-image-content">
          <p className="media-image-description">
            Bhubaneswar (Odisha) [India], January 15: The 18th Pravasi Bharatiya
            Diwas, organized by Government of India at Bhubaneshwar recently,
            celebrated the invaluable contributions of the Indian diaspora to
            India's growth and global influence. Inaugurated by Prime Minister
            Narendra Modi, the event attracted thousands of attendees, offering
            a grand platform to showcase India's cultural heritage and its
            connections with the world.
          </p>
          <p className="media-image-description">
            Among the many showcases, one that captivated audiences was the
            "Vishwaroop Ram" exhibition by the Indian Council for Cultural
            Relations (ICCR). It depicts the influence of the Story of Lord Ram
            across various countries. Distinguished by its grandeur, cultural
            depth, and digital experience, the exhibition was the most visited
            attraction at the event and was praised by the visitors for its
            curatorial depth, and the modern design.
          </p>
        </div>
      </div>
      <div className="media-content">
        <h2 className="">News Articles</h2>
        <div className="media-Links">
          {MediaCoverageData.map((media, index) => (
            <div>
              <a
                href={media.URL}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="media-link"
              >
                {media.partner}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
