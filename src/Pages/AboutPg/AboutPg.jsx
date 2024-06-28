import React from "react";
import "./AboutPg.css";
const AboutPg = ({ theme }) => {
  return (
    <>
      <div className={`container-A ${theme}`}>
        <div className="img-container">
          <img className="me" src={''} />
        </div>
        <div className="text-container">
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
              <img className='lang-icon' src={''}/>
              <img className='lang-icon' src={''}/>
              <img className='lang-icon' src={''}/>
              <img className='lang-icon' src={''}/>
              <img className='lang-icon' src={''}/>
              <img className='lang-icon' src={''}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPg;
