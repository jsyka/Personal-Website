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
        </div>
      </div>
    </>
  );
};

export default HomePg;
