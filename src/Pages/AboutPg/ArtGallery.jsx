import React from 'react'
import './Gallery.css'
import jean from './About-assets/art/jean.jpg';
import wabisabi from './About-assets/art/wabisabi.png';
import mona from './About-assets/art/mona.jpg'
import mountains from './About-assets/art/mountains.jpg'

const ArtGallery = () => {
  return (
    <div>
      <div className="gallery">
            <h2>I love drawing and art</h2>
            <div className='photorow1'>
            <img  className='photo-v'src={jean}/>
            <img  className='photo-v'src={wabisabi}/>
            <img  className='photo-v'src={mona}/>
            <img  className='photo-v'src={mountains}/>
            </div>
            <div className='photorow2'>
            <img  className='photo-v'src={''}/>
            <img  className='photo-v'src={''}/>
            <img  className='photo-v'src={''}/>
            <img  className='photo-v'src={''}/>
            </div>
          </div>
    </div>
  )
}

export default ArtGallery
