import React, { useState } from 'react';
import "./SlideShow.scss";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="slider">
      <div className='slider_overlay'>
        <div className='slider_controls'>
          <div className="slider_previous" onClick={handlePrevious}>
            <svg className='arrow left' viewBox="0 0 24 24">
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          </div>

          <div className="slider_count">{currentIndex + 1}/{images.length}</div>
              
          <div className="slider_next" onClick={handleNext}>
            <svg className='arrow right' viewBox="0 0 24 24">
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          </div>
        </div>
      </div>
      <img className="slider_image" src={images[currentIndex]} alt="" />
    </div>
  );
};

export default Slider;
