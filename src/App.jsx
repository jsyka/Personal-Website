import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Body/Home";
import About from "./Components/pages/About/About";
import Projects from './Components/pages/Projects/Projects';
import Resume from './Components/pages/Resume/Resume';
import { Route, Routes } from "react-router-dom";


const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes className='contents'>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;