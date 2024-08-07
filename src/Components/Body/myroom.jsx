import "./myroom.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import profile from '../../assets/profilephoto.jpg'

//room
import roomDay from "./Room-assets/room-day.png";
import roomDayShade from "./Room-assets/room-day-shade.png";
import roomNightShade from "./Room-assets/room-night-shade.png";
import roomNight from "./Room-assets/room-night.png";
//lamp
import lampDay from "./Room-assets/lamp-day.png";
import lampNight from "./Room-assets/lamp-night.png";
import lampOn from "./Room-assets/lamp-on.png";
import lampDayOn from "./Room-assets/lamp-day-on.png";
//posters
import postersDay from "./Room-assets/posters-day.png";
import postersNight from "./Room-assets/posters-night.png";
//printers
import printerDayOut from "./Room-assets/printer-day-out.png";
import printerDayIn from "./Room-assets/printer-day-in.png";
import printerNightOut from "./Room-assets/printer-night-out.png";
import printerNightIn from "./Room-assets/printer-night-in.png";
//shades
import shadeDayOpen from "./Room-assets/shade-day-open.png";
import shadeDayClosed from "./Room-assets/shade-day-closed.png";
import shadeNightOpen from "./Room-assets/shade-night-open.png";
import shadeNightClosed from "./Room-assets/shade-night-closed.png";
//bed
import bedDayAwake from "./Room-assets/bed-day-awake.png";
import bedDayAsleep from "./Room-assets/bed-day-asleep.png";
import bedNightAwake from "./Room-assets/bed-night-awake.png";
import bedNightAsleep from "./Room-assets/bed-night-asleep.png";
import awakeDayShade from "./Room-assets/bed-day-awake-shade.png";
import awakeNightShade from "./Room-assets/bed-night-awake-shade.png";
import asleepDayShade from "./Room-assets/bed-day-asleep-shade.png";
import asleepNightShade from "./Room-assets/bed-night-asleep-shade.png";

const MyRoom = ({ theme }) => {
  const [lampIsHovered, setLampIsHovered] = useState(false);
  const [postersIsHovered, setPostersIsHovered] = useState(false);
  const [bedIsHovered, setBedIsHovered] = useState(false);
  const [PrinterIsHovered, setPrinterIsHovered] = useState(false);
  const [shadeIsHovered, setShadeIsHovered] =useState(false);

  const [lampIsClicked, setLampIsClicked] = useState(false);
  const [shadeIsClicked, setShadeIsClicked] = useState(false);


  const handleShadeMouseEnter =() =>{
    setShadeIsHovered(true);
  }
  const handleShadeMouseLeave =() => {
    setShadeIsHovered(false);
  }
  const handleLampMouseEnter = () => {
    setLampIsHovered(true);
    console.log("lamp hovered");
  };
  const handleLampMouseLeave = () => {
    setLampIsHovered(false);
    console.log("no longer hovered");
  };
  const handlePostersMouseEnter = () => {
    setPostersIsHovered(true);
  };
  const handlePostersMouseLeave = () => {
    setPostersIsHovered(false);
  };
  const handleBedMouseEnter = () => {
    setBedIsHovered(true);
  };
  const handleBedMouseLeave = () => {
    setBedIsHovered(false);
  };
  const handlePrinterMouseEnter = () => {
    setPrinterIsHovered(true);
  };
  const handlePrinterMouseLeave = () => {
    setPrinterIsHovered(false);
  };

  const toggleLamp = () => {
    lampIsClicked ? setLampIsClicked(false) : setLampIsClicked(true);
  };
  const toggleShade = () => {
    shadeIsClicked ? setShadeIsClicked(false) : setShadeIsClicked(true);
  };

  return (
    <>
      <div className={''}>
        <img
          src={
            theme === "dark" && shadeIsClicked
              ? roomNightShade
              : shadeIsClicked
              ? roomDayShade
              : theme === "light"
              ? roomDay
              : roomNight
          }
          alt=""
          className="roomimg"
        />
        <Link to="/Personal-Website/work">
          <img
            src={theme == "light" ? postersDay : postersNight}
            onMouseEnter={handlePostersMouseEnter}
            onMouseLeave={handlePostersMouseLeave}
            alt=""
            className={postersIsHovered ? "posters-hovered" : "posters"}
          />
        </Link>
        <Link to="/Personal-Website/about">
          <img
            src={
              theme === "light" && bedIsHovered && shadeIsClicked
                ? awakeDayShade
                : theme === "light" && shadeIsClicked
                ? asleepDayShade
                : theme === "light" && bedIsHovered
                ? bedDayAwake
                : theme === "light"
                ? bedDayAsleep
                : bedIsHovered && shadeIsClicked
                ? awakeNightShade
                : shadeIsClicked
                ? asleepNightShade
                : bedIsHovered
                ? bedNightAwake
                : bedNightAsleep
            }
            onMouseEnter={handleBedMouseEnter}
            onMouseLeave={handleBedMouseLeave}
            alt=""
            className={bedIsHovered ? "bed-hovered" : "bed"}
          />
        </Link>
        <img
          src={
            theme === "dark" && lampIsClicked
              ? lampOn
              : lampIsClicked
              ? lampDayOn
              : theme === "light"
              ? lampDay
              : lampNight
          }
          onClick={toggleLamp}
          onMouseEnter={handleLampMouseEnter}
          onMouseLeave={handleLampMouseLeave}
          alt=""
          className={lampIsHovered ? "lamp-hovered" : "lamp"}
        />
        <img
          src={
            theme === "dark" && shadeIsClicked
              ? shadeNightClosed
              : shadeIsClicked
              ? shadeDayClosed
              : theme === "light"
              ? shadeDayOpen
              : shadeNightOpen
          }
          onMouseEnter={handleShadeMouseEnter}
            onMouseLeave={handleShadeMouseLeave}
          onClick={toggleShade}
          className="shade"
        />
        <Link to="/Personal-Website/resume">
          <img
            src={
              theme === "light" && PrinterIsHovered
                ? printerDayOut
                : theme === "dark" && PrinterIsHovered
                ? printerNightOut
                : theme === "light"
                ? printerDayIn
                : printerNightIn
            }
            onMouseEnter={handlePrinterMouseEnter}
            onMouseLeave={handlePrinterMouseLeave}
            alt=""
            className={PrinterIsHovered ? "printer-hovered" : "printer"}
          />
        </Link>
      </div>
      {bedIsHovered? <><div className="myroom-about-popup" onMouseEnter={handleBedMouseEnter} onMouseLeave={handleBedMouseLeave}>
        <h1>oh hello there!</h1>
        <img className="room-profile"src={profile}/>
        <h3>Welcome to my personal website!</h3>
        <h3>Look around to learn more about me!</h3>
        
      </div><div className="bed-popup">Visit About Me</div></>: <div></div>}
      {lampIsHovered? <div className="lamp-popup">toggle lamp</div>:<div></div>}
      {shadeIsHovered? <div className="shade-popup">toggle blinds</div>:<div></div>}
      {postersIsHovered? <div className="posters-popup">visit project gallery</div>: <div></div>}
      {PrinterIsHovered? <div className="printer-popup">read my resume</div>: <div></div>}
    </>
  );
};

export default MyRoom;
