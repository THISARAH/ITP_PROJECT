import './slideShowCus.css'

import image1 from '../images/backQ1.jpg'
import image2 from '../images/food1.jpg'
import image3 from '../images/room1.jpg'
import image4 from '../images/pool1.jpg'
import image5 from '../images/bar1.jpg'

import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const slideShowCus = () => {
    return (
      <div>
        <Slide easing="ease" >
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
            <span>Beautiful Scenary</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
            <span>Restaurant</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
            <span>Luxury Rooms</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
             
            </div>
            <span>Pool</span>
          </div>
          
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
            <span>Bar</span>
          </div>
        </Slide>
      </div>
    )
};

export default slideShowCus;