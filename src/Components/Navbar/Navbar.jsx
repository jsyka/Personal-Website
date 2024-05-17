import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <nav className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>
          <Link to='/Personal-Website' className='nav-text'>home</Link>
        </li>
        <li>
          <Link to='/about' className='nav-text'>about</Link>
        </li>
        <li>
          <Link to='projects' className='nav-text'>projects</Link>
        </li>
        <li>
          <Link to='/resume' className='nav-text'>resume</Link>
        </li>
      </ul>
      {/* <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div> */}
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </nav>
  );
};

export default Navbar;