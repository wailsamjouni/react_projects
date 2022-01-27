import React, { useState } from 'react';
import { data } from '../data/images';
import "../components/Slider.css";
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';

function Slider({array}) {
  const [currentindex, setCurentindex] = useState(0);
  const numberOfImages = array.length; 

  const clickLeft = () => {
    setCurentindex(currentindex === 0 ? numberOfImages - 1 : currentindex - 1);
  }

  const clickRight = () => {
    setCurentindex(currentindex < numberOfImages - 1 ? currentindex + 1 : 0);
  }

  return (
  <div className='slide__container'>
    <h1>Image <span>Carousel</span></h1>
    <BsArrowLeftSquareFill color='orangered' className='left__arrow' onClick={clickLeft}/>
    <BsArrowRightSquareFill color='black' className='right__arrow' onClick={clickRight}/>
      {data.map((image,index) => {
        return(
            <div className={currentindex === index ? "active" : ""}>
              {currentindex === index && <img className='img__container' key={index} src={image.image} />}
            </div>
        )
      }

      )}
  </div>
  );
}

export default Slider;