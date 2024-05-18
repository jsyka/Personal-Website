import React from "react";
import cam from "./assets/cam.png";
import game from "./assets/game.png";
import cd from "./assets/cd.png";
import tv from "./assets/tv.png";
import wind from "./assets/desktop.png";
import "./extrastuff.css";
import { useState } from "react";

const ExtraStuff = () => {
  const [isCamVisible, setIsCamVisible] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [isTvVisible, setIsTvVisible] = useState(false);
  const [isCdVisible, setIsCdVisible] = useState(false);

  const handleCamHover = () => {
    isCamVisible ? setIsCamVisible(false) : setIsCamVisible(true);
  };
  const handleGameHover = () => {
    isGameVisible ? setIsGameVisible(false) : setIsGameVisible(true);
  };
  const handleTvHover = () => {
    isTvVisible ? setIsTvVisible(false) : setIsTvVisible(true);
  };
  const handleCdHover = () => {
    isCdVisible ? setIsCdVisible(false) : setIsCdVisible(true);
  };

  return (
    <>
      <div className="icon-container">
        <img
          src={cam}
          className="icons"
          onMouseEnter={handleCamHover}
          onMouseLeave={handleCamHover}
        />
        <img
          src={game}
          className="icons"
          onMouseEnter={handleGameHover}
          onMouseLeave={handleGameHover}
        />
        <img
          src={tv}
          className="icons"
          onMouseEnter={handleTvHover}
          onMouseLeave={handleTvHover}
        />
        <img
          src={cd}
          className="icons"
          onMouseEnter={handleCdHover}
          onMouseLeave={handleCdHover}
        />
      </div>
      <div className="info">
        {isCamVisible ? (
          <div className="blurb">
            {/* <img className='wind' src={wind}/> */}
            <h1>I LOVE PHOTOGRAPHY!</h1>
          </div>
        ) : null}
        {isGameVisible ? (
          <div className="blurb">
            {/* <img className='wind' src={wind}/> */}
            <h1>VIDEO GAMES</h1>
          </div>
        ) : null}
        {isTvVisible ? (
          <div className="blurb">
            {/* <img className='wind' src={wind}/> */}
            <h1>FAV TV SHOWS/MOVIES!</h1>
          </div>
        ) : null}
        {isCdVisible ? (
          <div className="blurb">
            {/* <img className='wind' src={wind}/> */}
            <h1>I LOVE MUSIC</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ExtraStuff;
