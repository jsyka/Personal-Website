import "./HomePg.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import linkedIn from "../../assets/linkedIn.png";
import linkedInLight from '../../assets/linkedIn-white.png';
import github from "../../assets/gitHub.png";
import githubLight from '../../assets/gitHub-white.png';
import devpost from "../../assets/devPost.png";
import devpostLight from '../../assets/devPost-white.png';
import MyRoom from "../../Components/Body/myroom";
import profilePhoto from '../../assets/profilephoto.jpg';
import profile from "../../assets/photo2.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import cplusplus from "../../assets/c++.png";
import python from "../../assets/python.png";
import avatar from "../../assets/avatar.png";

const HomePg = ({ theme }) => {
  return (
    <>
      <div className='home-container'>
        <div className="room">
        <MyRoom theme={theme} />
        </div>
        <div className={`text-container ${theme}`}>
          <h2 className="greeting">Hello my name is Jessica Jiao</h2>
          <h1 className="welcome-heading">WELCOME TO MY ROOM</h1>
          <br />
          <h2 className="instructions">
            hover your mouse around the room & explore
          </h2>
          <br />
          <div className="socials">
            <Link to="https://www.linkedin.com/in/jiaowenjia/">
              <img className="link-icon" src={theme == 'light' ? linkedIn : linkedInLight} />
            </Link>
            <Link to="https://github.com/jsyka">
              <img className="link-icon" src={theme == 'light' ? github : githubLight } />
            </Link>
            <Link to="https://devpost.com/jsyka?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
              <img className="link-icon" src={theme == 'light' ? devpost : devpostLight} />
            </Link>
          </div>
          <div className="home-mid">
          <img src={avatar} className="avatar"></img>
          <div className="stats-container">
            <h2 className="">HP:</h2>
            <div className="exp-bar">
              <div className="hp-filled">.</div>
            </div>
            <h2 className="">EXP: level 19</h2>
            <div className="exp-bar">
              <div className="exp-filled">.</div>
            </div>
            <h2 className="abilities">ABILITIES</h2>
            <div className="ability-cont">
              <img className="lang" src={html} />
              <img className="lang" src={css} />
              <img className="lang" src={js} />
              <img className="lang" src={react} />
              <img className="lang" src={cplusplus} />
              <img className="lang" src={python} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomePg;
