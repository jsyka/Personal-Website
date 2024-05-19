import React, { useEffect, useState } from "react";
import "./Projects.css";
import star from "../../pages/About/assets/star.png";
import heart from "../../pages/About/assets/heart.png";
import sparkle from "../../pages/About/assets/sparkle.png";
import planet from "../../pages/About/assets/planet.png";
import projectsDay from "../Projects/Project-assets/projects-day.png";
import projectsNight from "../Projects/Project-assets/projects-night.png";
import bluemLogo from "./Project-assets/bluem-logo.png";
import biteLogo from "./Project-assets/bite-logo.png";
import roboLogo from "./Project-assets/robo-logo.png";
import jaktLogo from "./Project-assets/jakt-logo.png";
import winDow from "./Project-assets/window.png";
import bluem from "./Project-assets/bluem.png";
import bite from "./Project-assets/bite.png";
import robo from "./Project-assets/robo.png";
import jakt from './Project-assets/jakt.png';
import stars from './Project-assets/stars.png';
import clouds from './Project-assets/clouds.png';
import Bluem from "./Bluem";
import Bite from './Bite';

const Projects = (theme) => {
  const [isBluemVisible, setIsBluemVisible] = useState(false);
  const [isBiteVisible, setIsBiteVisible] = useState(false);
  const [isRoboVisible, setIsRoboVisible] = useState(false);
  const [isJaktVisible, setIsJackVisible] = useState(false);

  const handleBluemHover = () => {
    setIsBluemVisible(!isBluemVisible);
  };
  const handleBiteHover = () => {
    setIsBiteVisible(!isBiteVisible);
  };
  const handleRoboHover = () => {
    setIsRoboVisible(!isRoboVisible);
  };
  const handleJaktHover = () => {
    setIsJackVisible(!isJaktVisible);
  };

  return (
    <div className={`container-P ${theme}`}>
      <div className="container-pr">
    <Bluem/>
    </div>
    <Bite />
{/*   
      <h1 className="title"></h1>
      <div className="project-container">
        <img
          className="bluem"
          src={bluemLogo}
          onMouseEnter={handleBluemHover}
          onMouseLeave={handleBluemHover}
        />
        <img
          className="bite"
          src={biteLogo}
          onMouseEnter={handleBiteHover}
          onMouseLeave={handleBiteHover}
        />
        <img
          className="bite"
          src={roboLogo}
          onMouseEnter={handleRoboHover}
          onMouseLeave={handleRoboHover}
        />
        <img
          className="bite"
          src={jaktLogo}
          onMouseEnter={handleJaktHover}
          onMouseLeave={handleJaktHover}
        />
        {isBiteVisible ? (
          <div className="window">
            <img className="window-img" src={bite} />
            <br />
            <br />
            <h1>Bite GoodNite</h1>
            <p>
            🪲 Your Bug Bite Companion! 📸 Upload bug bite
              images for AI analysis. 🔍 Identify the bug and get care advice.
              🌿 Learn about the insects and their ecological roles. 💡 Promote
              awareness and appreciation for our environment.
            </p>
          </div>
        ) : null}
        {isBluemVisible ? (
          <div className="window">
            <img className="window-img" src={bluem} />
            <br />
            <br />
            <h1>Bluem</h1>
            <p>
              Your Personal Growth Companion! 🌱 Bluem is a gamified journaling
              app for positivity and self-reflection. 🌸 Journal to grow your
              virtual garden and unlock beautiful flowers. 📓 Reflect with
              AI-driven, personalized prompts. 💪 Discard negativity with the
              "Negativity Pebble" feature.
            </p>
          </div>
        ) : null}
        {isRoboVisible ? (
          <div className="window">
            <img className="window-img" src={robo} />
            <br />
            <br />
            <h1>RoboVendor</h1>
            <p>
              🤖 Vending Made Fun! 🎨 Scan a color to choose your
              product. 📡 Ultrasonic sensor detects nearby customers. 💳 Touch
              sensor handles payments. 💡 Built by a team of 4 using RobotC and
              an EV3 robot!
            </p>
          </div>
        ) : null}
        {isJaktVisible ? (
          <div className="window">
            <img className="window-img" src={jakt} />
            <br />
            <br />
            <h1>SuperJakt</h1>
            <p>
              🏠 The Ultimate Dorm Solution! 📚 Four-in-one
              furniture: desk, nightstand, chair, and laundry hamper. 🔄 Easily
              converts to maximize space and efficiency. ✨ Balances studies and
              relaxation seamlessly. 🛠 Built from brainstorming, sketches,
              prototypes, and 3D models to minimize dorm space.
            </p>
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Projects;
