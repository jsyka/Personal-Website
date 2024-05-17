import "./Home.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/gitHub.png";
import devpost from "../../assets/devPost.png";
import stars from "../../assets/stars.png";
import clouds from "../../assets/clouds.png";
import MyRoom from "./myroom";

const App = ({ theme }) => {
  return (
    <>
      <div className='container'>
        <img className="bg" src={theme == "light" ? clouds : stars} />
        <MyRoom theme={theme} />
        <div className="body-text">
          <h1 className="intro">welcome to my room</h1>
          <br />
          <h2 className="message">
            hover your mouse around the room & explore
          </h2>
          <br />
          <div className="socials">
            <Link to="https://www.linkedin.com/in/jiaowenjia/">
              <img className="link-icon" src={linkedIn} />
            </Link>
            <Link to="https://github.com/jsyka">
              <img className="link-icon" src={github} />
            </Link>
            <Link to="https://github.com/jsyka">
              <img className="link-icon" src={devpost} />
            </Link>
          </div>
        </div>
        <text className="bottom-text">
          Jessica Jiao 2024 . this website was made with react
        </text>
      </div>
    </>
  );
};

export default App;
