import React, { useState } from "react";
import "./ProjectPg.css";
import Bluem from "./Project-assets/bluem.png";
import Bite from './Project-assets/bite.png';
import Banana from './Project-assets/banana.png'
const ProjectPg = () => {
  const [weaClicked, setWeaClicked] = useState(true);
  const [jackClicked, setJackClicked] = useState(false);
  const [freelanceClicked, setFreelanceClicked] = useState(false);
  const [zqClicked, setZqClicked] = useState(false);

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
        <div className="datessidebar">
        <div className="dates">
          <div className={zqClicked ? "date-clicked" : "date-container"}>
            <h3>JUL 2024 - Ongoing</h3>
          </div>
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
          <div
            className={zqClicked ? "clicked" : "exp-title"}
            onClick={handleZqClicked}
          >
            <h2>ZhongQu (Beijing) Technology  </h2>
            <h3>Front-End Development Intern</h3>
          </div>
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
        </div>
        <div className="exp-details">
        {zqClicked ? (
            <div className="exp-det-cont">
              <h1>Front-End Development Intern</h1>
              <h2>ZhongQu (Beijing) Technology Co. Ltd.</h2>
              <h3>JUL 2024 - Ongoing</h3>

              <ul className="bulletpt-list">
                <h3>‣ Played a significant role in expanding the company’s presence to the international market by creating an eCommerce website with Shopify </h3>
                <h3>‣ Self-learned Shopify’s Liquid language to meet customize and develop the website theme</h3>
                <h3>‣ Helped translate documents and sheets from Chinese to English to be used for company software</h3>
              </ul>
            </div>
          ) : (
            ""
          )}
          {weaClicked ? (
            <div className="exp-det-cont">
              <h1>Project: AI Integration with Wearable Tech</h1>
              <h2>Statis Ring with WEA @UW</h2>
              <h3>May 2024 - Ongoing</h3>

              <ul className="bulletpt-list">
                <h3>‣ Researched and provided recommendations toward an overal AI implementation strategy for Statis Ring's wearable technology</h3>
                <h3>‣ Implemented natural language processing in a AI smart assistant prototype</h3>
                <h3>‣ Created and managed resources and databases in Microsoft Azure</h3>
                <h3>‣ Completed AZ-900 and AI-900 Microsoft certifications</h3>
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
                <h3>‣ Designed logos, graphics, and illustrations for merchandise to foster unity within the organisation</h3>
                <h3>‣ Produced visually impactful promotion material to enhance the visibility and recognition of the organisation,
                resulting in 75% increased community engagement in chapter initiatives</h3>
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
                <h3>‣ Generated over $1000 in commissions by creang visually capvang book covers and digital painngs for various
                novels and publicaons</h3>
                <h3>‣ Managed a social media network of over 13 thousand followers (@cjymkyn on Instagram)</h3>
                <h3>‣ Developed digital artwork ulised as exclusive assets within an NFT project to exercise digital proficiency and
                entrepreneurial spirit</h3>
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
          <h3 className="proj-blurb"> 🪴 A gamified journaling app allowing users to cultivate a virtual garden. <br/><br/>
Integrated with ChatGPT API for personalised prompts, to implement AI-driven user interaction
</h3>
        </div>
        <div className="proj-card">
            <img className="proj-img" src={Bite}></img>
          <h1>BiteGnite</h1>
          <h3 className="proj-blurb">🪲 An interactive and educational web app with an image-based bug bite identifier. <br/> <br/>
Features an AI classification model developed with Python and Scikit Learn
</h3>
        </div>
        <div className="proj-card">
            <img className="proj-img" src={Banana}></img>
          <h1>BananaBox</h1>
          <h3>coming soon...</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPg;
