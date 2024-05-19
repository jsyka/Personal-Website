import React from "react";
import biteMock from "../../../assets/bite-mock.png";
import "./Bite.css";
import { Link } from "react-router-dom";
// import clouds from '../../../assets/clouds.png';
// import stars from '../../../assets/stars.png'

const Bluem = (theme) => {
  return (
    <div className={`container-bite ${theme}`}>
      <div className="img-border">
        <Link to='https://github.com/jsyka/Bite-GNite'>
        <img className="P-Bite-img" src={biteMock} />
        </Link>
      </div>
      <h1 className="P-Bite-name">BITE G'NITE</h1>
      <h2 className="P-Bite-subheading">Wellness Garden Journaling App</h2>
      <text className="P-Bite-desc">
        🪲 Your Bug Bite Companion! 📸 Upload bug bite images for AI analysis.
        🔍 Identify the bug and get care advice. 🌿 Learn about the insects and
        their ecological roles. 💡 Promote awareness and appreciation for our
        environment.
      </text>
    </div>
  );
};

export default Bluem;
