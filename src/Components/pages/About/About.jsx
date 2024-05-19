import React from "react";
import "./About.css";
import star from "../../pages/About/assets/star.png";
import heart from "../../pages/About/assets/heart.png";
import sparkle from "../../pages/About/assets/sparkle.png";
import planet from "../../pages/About/assets/planet.png";
import me from "../../pages/About/assets/photo.jpg";
import goose from "../../pages/About/assets/goose.png";
import deskTop from "./assets/desktop.png";
import avatar from "./assets/avatar.png";
import ExtraStuff from "./extrastuff";
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import js from '../../../assets/js.png';
import react from '../../../assets/react.png';
import cplusplus from '../../../assets/c++.png';
import python from '../../../assets/python.png';

const About = ({ theme }) => {
  return (
    <>
      <div className={`container-A ${theme}`}>
        <div className="img-container">
          <img className="me" src={avatar} />
        </div>
        <div className="text-container">
          {/* <img className="goose" src={goose} /> */}
          <img className="doodle-heart" src={heart} />
          <img className="doodle-sparkle" src={sparkle} />
          <img className="doodle-star" src={star} />
          <img className="doodle-planet" src={planet} />
          <h1 className="name">JESSICA JIAO</h1>
          <h2 className="description">
            I am a second year Mechatronics Engineering Student at the
            University of Waterloo
          </h2>
          <div className="info-container">
            <h2 className="prompt">HP:</h2>
            <div className="bar">
              <div className="filled">.</div>
            </div>
            <h2 className="prompt">EXP: level 19</h2>
            <div className="bar">
              <div className="filled-exp">.</div>
            </div>
            <h2 className="prompt">ABILITIES</h2>
            <div className='ability-box'>
              <img className='lang-icon' src={html}/>
              <img className='lang-icon' src={css}/>
              <img className='lang-icon' src={js}/>
              <img className='lang-icon' src={react}/>
              <img className='lang-icon' src={cplusplus}/>
              <img className='lang-icon' src={python}/>
            </div>
          </div>
        </div>
        {/* <div className="stuff">
          <ExtraStuff />
        </div> */}
      </div>
    </>
  );
};

export default About;
