import React from 'react'
import './Gallery.css'
import aurora from './About-assets/aurora.jpg';
import icon from './About-assets/icon.jpg';
import orchid from './About-assets/orchid.jpg';
import plants from './About-assets/plants.jpg';
import fast from './About-assets/fast.jpg';
import mall from './About-assets/mall.jpg';
import bike from './About-assets/bike.jpg';
import beachvie from './About-assets/beachvie.jpg'
import eclipse from './About-assets/eclipse.jpg';
import cafe from './About-assets/cafe.jpg'

const Gallery = () => {
  return (
    <div className='what'>
      <div className="gallery">
            <h2>I love documenting experiences</h2>
            <div className='photorow1'>
            <img  className='photo-v'src={aurora}/>
            <img  className='photo-v'src={icon}/>
            <img  className='photo-v'src={mall}/>
            <img  className='photo-v'src={cafe}/>
            </div>
            <div className='photorow2'>
            <img  className='photo-v'src={eclipse}/>
            <img  className='photo-v'src={fast}/>
            <img  className='photo-v'src={plants}/>
            <img  className='photo-v'src={bike}/>
            </div>
          </div>
    </div>
  )
}

export default Gallery
