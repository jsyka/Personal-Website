import React, { useState } from "react";
import "./ProjectPg.css";
import Bluem from "./Project-assets/bluem.png";
import Bite from './Project-assets/bite.png';
import Banana from './Project-assets/banana.png'
const ProjectPg = () => {
  const [weaClicked, setWeaClicked] = useState(true);
  const [jackClicked, setJackClicked] = useState(false);
  const [freelanceClicked, setFreelanceClicked] = useState(false);
  const [zqClicked, setZqClicked] = useState(true);

  const handleZqClicked = () => {
    setWeaClicked(false);
    setJackClicked(false);
    setFreelanceClicked(false);
    setZqClicked(true);
  };
  const handleWeaClicked = () => {
    setWeaClicked(true);
    setJackClicked(false);
    setFreelanceClicked(false);
    setZqClicked(false);
  };

  const handleJackClicked = () => {
    setWeaClicked(false);
    setJackClicked(true);
    setFreelanceClicked(false);
    setZqClicked(false);
  };

  const handleFreelanceClicked = () => {
    setWeaClicked(false);
    setJackClicked(false);
    setFreelanceClicked(true);
    setZqClicked(false);
  };

  return (
    <div className="project-page">
      <h1>Experience</h1>
      <div className="exp-container">
        <div className="dates">
          {/* <div className={zqClicked ? "date-clicked" : "date-container"}>
            <h3>JUL 2024 - Ongoing</h3>
          </div> */}
          <div className={weaClicked ? "date-clicked" : "date-container"}>
            <h3>MAY 2024 - Ongoing</h3>
          </div>
          <div className={jackClicked ? "date-clicked" : "date-container"}>
            <h3>JUN 2021 - JUN 2023</h3>
          </div>
          <div className={freelanceClicked ? "date-clicked" : "date-container"}>
            <h3>JUL 2020 - Ongoing</h3>
          </div>
        </div>
        <div className="sidebar">
          {/* <div
            className={zqClicked ? "clicked" : "exp-title"}
            onClick={handleZqClicked}
          >
            <h2>ZhongQu Beijing Technology</h2>
            <h3>Project Intern</h3>
          </div> */}
          <div
            className={weaClicked ? "clicked" : "exp-title"}
            onClick={handleWeaClicked}
          >
            <h2>WE Accelerate</h2>
            <h3>Project Intern</h3>
          </div>
          <div
            className={jackClicked ? "clicked" : "exp-title"}
            onClick={handleJackClicked}
          >
            <h2>Jack.org</h2>
            <h3>Graphic Designer</h3>
          </div>
          <div
            className={freelanceClicked ? "clicked" : "exp-title"}
            onClick={handleFreelanceClicked}
          >
            <h2>Freelance</h2>
            <h3>Digital Media Artist</h3>
          </div>
        </div>
        <div className="exp-details">
          {weaClicked ? (
            <div className="exp-det-cont">
              <h1>Project: AI Integration with Wearable Tech</h1>
              <h2>Statis Ring with WEA @ UW</h2>
              <h3>May 2024 - Ongoing</h3>

              <ul className="bulletpt-list">
                <h3>➼ this page is a work in progress</h3>
                <h3>➼ WIP</h3>
              </ul>
            </div>
          ) : (
            ""
          )}
          {jackClicked ? (
            <div className="exp-det-cont">
              <h1>Graphic Designer</h1>
              <h2>Jack.org Chapter @JFSS</h2>
              <h3>Jun 2021 - Jun 2023</h3>

              <ul className="bulletpt-list">
                <h3>➼ this page is a work in progress</h3>
                <h3>➼ WIP</h3>
              </ul>
            </div>
          ) : (
            ""
          )}
          {freelanceClicked ? (
            <div className="exp-det-cont">
              <h1>Freelance Digital Media Artist</h1>
              <h2>Self-Employed</h2>
              <h3>Jul 2020 - Ongoing</h3>

              <ul className="bulletpt-list">
                <h3>➼ this page is a work in progress</h3>
                <h3>➼ WIP</h3>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <h1>Projects</h1>
      <div className="proj-container">
        <div className="proj-card">
            <img className="proj-img" src={Bluem}></img>
          <h1>Bluem</h1>
          <h3 className="proj-blurb"> Your Personal Growth Companion! 🌱  🌸 Journal to grow your virtual
        garden and unlock beautiful flowers. 📓 Reflect with AI-driven,
        personalized prompts. 💪 Discard negativity with the "Negativity Pebble"
        feature.</h3>
        </div>
        <div className="proj-card">
            <img className="proj-img" src={Bite}></img>
          <h1>BiteGnite</h1>
          <h3 className="proj-blurb">🪲 Your Bug Bite Companion! 📸 Upload bug bite images for AI analysis.
        🔍 Identify the bug and get care advice. 🌿 Learn about the insects and
        their ecological roles. 💡 Promote awareness and appreciation for our
        environment.</h3>
        </div>
        <div className="proj-card">
            <img className="proj-img" src={Banana}></img>
          <h1>BananaBox</h1>
          <h3>blah</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPg;
