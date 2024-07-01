import React from "react";
import "./AboutPg.css";
import profile from "../../assets/photo2.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import cplusplus from "../../assets/c++.png";
import python from "../../assets/python.png";
import avatar from "../../assets/avatar.png";

const AboutPg = ({ theme }) => {
  return (
    <>
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
              website! I hope you it's been a super fun experience and you've
              gotten to learn a little more about me.
            </h3>
          </div>
        </div>
        <div className="abt-mid">
          <h1>Outside of school and work I..</h1>
          
        </div>
      </div>
    </>
  );
};

export default AboutPg;
