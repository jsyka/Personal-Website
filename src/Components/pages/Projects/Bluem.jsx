import React from "react";
import bluemMock from "../../../assets/bluem-mock.png";
import "./Bluem.css";
import { Link } from "react-router-dom";
import python from '../../../assets/python.png';

const Bluem = (theme) => {
  return (
    <div className={`container-bluem ${theme}`}>
      <h2 className='built-with'>Built with:</h2>
      <div className='built-container'>
        <img className='built-lang' src={python}/>
      </div>
      <div className="img-border">
        <Link to ='https://github.com/jsyka/Bluem'>
        <img className="P-Bluem-img" src={bluemMock} />
        </Link>
      </div>
      <h1 className="P-Bluem-name">BLUEM</h1>
      <h2 className="P-Bluem-subheading">Wellness Garden Journaling App</h2>
      <text className="P-Bluem-desc">
        Your Personal Growth Companion! 🌱 Bluem is a gamified journaling app
        for positivity and self-reflection. 🌸 Journal to grow your virtual
        garden and unlock beautiful flowers. 📓 Reflect with AI-driven,
        personalized prompts. 💪 Discard negativity with the "Negativity Pebble"
        feature.
      </text>
    </div>
  );
};

export default Bluem;
