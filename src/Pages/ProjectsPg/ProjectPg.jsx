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
            <h3>JUL 2024 - Aug 2024</h3>
          </div>
          <div className={weaClicked ? "date-clicked" : "date-container"}>
            <h3>MAY 2024 - Aug 2024</h3>
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
            <h2>ZhongQu Technology  </h2>
            <h3>Web Development Intern</h3>
          </div>
          <div
            className={weaClicked ? "clicked" : "exp-title"}
            onClick={handleWeaClicked}
          >
            <h2>Statis Ring</h2>
            <h3>Project Researcher</h3>
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
              <h1>Web Development Intern</h1>
              <h2>ZhongQu Technology Co. Ltd.</h2>
              <h3>JUL 2024 - Aug 2024</h3>

              <ul className="bulletpt-list">
                <h3>‣ Led the development of an eCommerce website using Shopify to expand the company’s market presence to
                international clients, facilitating a 42% increase of pre-launch sign-ups and user interest.</h3>
                <h3>‣ Independently mastered Shopify’s templating language Liquid to develop the website theme and sections,
                combined with HTML and CSS.</h3>
                <h3>‣ Optimized the website to create seamless user experience for diverse international markets in collaboration with the
                development team.</h3>
              </ul>
            </div>
          ) : (
            ""
          )}
          {weaClicked ? (
            <div className="exp-det-cont">
              <h1>Project Researcher </h1>
              <h2>WEA with Statis Ring @UW </h2>
              <h3>May 2024 - Aug 2024</h3>

              <ul className="bulletpt-list">
                <h3>‣ Developed an AI adoption strategy for the company, resulting in a 24% improvement in alignment with market
                trends and enhancing strategic planning.</h3>
                <h3>‣ Conducted research on available technologies and implementation methods, offering insights for achieving specific
                outcomes requested of the client.</h3>
                <h3>‣ Presented findings and deliverables at weekly meetings with the CEO to discuss actionable insights.</h3>
                <h3>‣ Produced a comprehensive project report summarizing strategic recommendations, which were instrumental in
                shaping the client’s future AI strategy and are expected to drive a 22% improvement in project outcomes.</h3>
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
                <h3>‣ Increased community engagement by 74% in chapter initiatives using visually impactful promotional material, to
                enhance the visibility of the organization.</h3>
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
