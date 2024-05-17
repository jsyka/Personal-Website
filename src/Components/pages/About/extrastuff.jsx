import React from 'react';
import cam from './assets/cam.png';
import game from './assets/game.png';
import cd from './assets/cd.png';
import tv from './assets/tv.png';
import wind from './assets/desktop.png';
import './extrastuff.css'
import { useState } from 'react';


const ExtraStuff = () => {
  const [isCamVisible, setIsCamVisible] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [isTvVisible, setIsTvVisible] = useState(false);
  const [isCdVisible, setIsCdVisible] = useState(false);

  const handleCamHover = () => {
    setIsCamVisible(!isCamVisible);
  };
  const handleGameHover = () => {
    setIsGameVisible(!isGameVisible);
  };
  const handleTvHover = () => {
    setIsTvVisible(!isTvVisible);
  };
  const handleCdHover = () => {
    setIsCdVisible(!isCdVisible);
  };

  return (
    <>
    <div className='icon-container'>
      <img src={cam} className='icons'
      onMouseEnter={handleCamHover}
      onMouseLeave={handleCamHover}/>
      <img src={game} className='icons'
      onMouseEnter={handleGameHover}
      onMouseLeave={handleGameHover}/>
      <img src={tv} className='icons'
      onMouseEnter={handleTvHover}
      onMouseLeave={handleTvHover}/>
      <img src={cd} className='icons'
      onMouseEnter={handleCdHover}
      onMouseLeave={handleCdHover}/>
    </div>
    <div className='info'>
    {isCamVisible ? (
          <div className="blurb">
            {/* <img className='wind' src={wind}/> */}
            <h1>I love taking Photos!</h1>
            <br/>
            <p>
            🪲 Your Bug Bite Companion! 📸 Upload bug bite
              images for AI analysis. 🔍 Identify the bug and get care advice.
              🌿 Learn about the insects and their ecological roles. 💡 Promote
              awareness and appreciation for our environment.
            </p>
          </div>
        ) : null}
    </div>
    </>
  )
}

export default ExtraStuff
