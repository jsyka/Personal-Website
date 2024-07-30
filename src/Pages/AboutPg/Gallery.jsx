import React from "react";
import "./Gallery.css";
import aurora from "./About-assets/aurora.jpg";
import icon from "./About-assets/icon.jpg";
import orchid from "./About-assets/orchid.jpg";
import plants from "./About-assets/plants.jpg";
import fast from "./About-assets/fast.jpg";
import mall from "./About-assets/mall.jpg";
import bike from "./About-assets/bike.jpg";
import beachvie from "./About-assets/beachvie.jpg";
import eclipse from "./About-assets/eclipse.jpg";
import cafe from "./About-assets/cafe.jpg";
import boat from './About-assets/boat.jpg';
import buildngs from './About-assets/buildings.jpg';
import field from './About-assets/field.jpg';
import peaches from './About-assets/peaches.jpg';
import plane from './About-assets/plane.jpg';
import road from './About-assets/road.jpg';

const Gallery = () => {
  return (
    <div className="what">
      
      <div className="gallery">
        <h2>I love documenting experiences</h2>
        <div className="gallery-container">
        <div className="column">
          <div className="photo">
            <img src={beachvie} />
          </div>
          <div className="photo">
            <img src={road} />
          </div>
          <div className="photo">
            <img src={orchid} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={buildngs} />
          </div>
          <div className="photo">
            <img src={peaches} />
          </div>
          <div className="photo">
            <img src={boat} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={plane} />
          </div>
          <div className="photo">
            <img src={icon} />
          </div>
          <div className="photo">
            <img src={field} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
