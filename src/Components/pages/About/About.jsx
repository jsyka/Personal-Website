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

const About = () => {
  return (
    <>
      <div className="container">
        <img className="me" src={avatar} />
        <div className="text-container">
          {/* <img className="goose" src={goose} />
        <img className="doodle-mid" src={heart} />
        <img className="doodle-bottom" src={sparkle} />
        <img className="doodle-top" src={star} />
        <img className="doodle-mid2" src={planet} /> */}
          <h1 className="text">My Name is Jessica Jiao</h1>
          <h2 className="description">
            I am a second year Mechatronics Engineering Student at the
            University of Waterloo
          </h2>
        </div>
        <div className="stuff">
          <ExtraStuff />
        </div>
      </div>
    </>
  );
};

export default About;
