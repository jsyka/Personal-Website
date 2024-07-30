import React from "react";
import "./AboutPg.css";
import profile from "../../assets/photo2.jpg";
import star from "./About-assets/star.png";
import heart from "./About-assets/heart.png";
import sparkle from "./About-assets/sparkle.png";
import planet from "./About-assets/planet.png";
// import window from './About-assets/desktop.png';

import Gallery from "./Gallery";
import ArtGallery from "./ArtGallery";

const AboutPg = ({ theme }) => {
  return (
    <>
      <img src={star} className="star" />
      <div className={`container-A ${theme}`}>
        <div className="top-A">
          <div className="photo-container">
            <img className="abt-photo" src={profile} />
          </div>
          <div className="abt-top-right">
            <h1>JESSICA JIAO</h1>
            <h2>Mechatronics Engineering Student @UW</h2>
            <h3>
              Hi! My name is Jessica, I'm going into my second year in
              Mechatronics Engineering at the Unviersity of Waterloo. I'm
              currently really into AI/Machine Learning as well as Website
              Development. Thank you for taking the time to visit my personal
              website! I hope it's been a super fun experience and you've
              gotten to learn a little more about me.
            </h3>
          </div>
        </div>
        <div className="abt-mid">
          <h1>Outside of school and work...</h1>
          <div className="abt-mid-cont">
          <Gallery/>
          </div>
          <div className="abt-mid-cont">
          <ArtGallery/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPg;
