import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import hamburger from "../../assets/hamburger.png";
import hamburger_white from "../../assets/hamburger-light.png";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggle_menu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/Personal-Website" className="ham-text">
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt=""
          className="logo"
        />
      </Link>

      <div className={isOpen ? "ham-open" : "closed"}>
        <ul className="ham-links">
          <li>
            <Link
              onClick={toggle_menu}
              to="/Personal-Website"
              className="ham-text"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle_menu}
              to="/Personal-Website/about"
              className="ham-text"
            >
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle_menu}
              to="/Personal-Website/work"
              className="ham-text"
            >
              work
            </Link>
          </li>
          <li>
            <Link
              onClick={toggle_menu}
              to="/Personal-Website/resume"
              className="ham-text"
            >
              <p>resume</p>
            </Link>
          </li>
        </ul>
      </div>
      <img
        className="hamburger"
        src={isOpen || theme == "dark" ? hamburger_white : hamburger}
        onClick={toggle_menu}
      />
      <ul className={"topbar"}>
        <li>
          <Link to="/Personal-Website" className="nav-text">
            home
          </Link>
        </li>
        <li>
          <Link to="/Personal-Website/about" className="nav-text">
            about
          </Link>
        </li>
        <li>
          <Link to="/Personal-Website/work" className="nav-text">
            work
          </Link>
        </li>
        <li>
          <a href="public\Jessica Jiao Resume - Software.pdf" download>
            resume
          </a>
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
