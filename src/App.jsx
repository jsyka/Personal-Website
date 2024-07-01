import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Body/Home";
import About from "./Components/pages/About/About";
import Projects from './Components/pages/Projects/Projects';
import Resume from './Components/pages/Resume/Resume';
import { Route, Routes } from "react-router-dom";
import stars from './assets/stars.png';
import clouds from './assets/clouds.png';
import HomePg from "./Pages/HomePg/HomePg";
import AboutPg from "./Pages/AboutPg/AboutPg";
import ProjectPg from "./Pages/ProjectsPg/ProjectPg";
import './App.css';

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);



  
  return (
    <div className={`container ${theme}`}>

      <img className="bg" src={theme == "light" ? clouds : stars} />
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes className='contents'>
        <Route path="/Personal-Website" element={<HomePg theme={theme} setTheme={setTheme} />} />
        <Route path="/Personal-Website/about" element={<AboutPg />} />
        <Route path="/Personal-Website/projects" element={<ProjectPg />} />
        <Route path="/Personal-Website/resume" element={<Resume />} />
      </Routes>

    </div>
  );
};

export default App;