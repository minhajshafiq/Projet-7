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
    <div className="slider">
      <button className="slider_previous" onClick={handlePrevious}>
        <svg viewBox="0 0 50 50">
          <path d="M30.8,24.4l-0.7-0.7L20,15.6l10.1-10.1l-0.7-0.7L18.6,14l8.5-8.5l-0.7,0.7L17.2,15.4L6.1,26.5l0.7,0.7L18.6,17l-8.5,8.5L20,18.4
          L30.8,24.4z"/>
        </svg>
      </button>

      <img className="slider_image" src={images[currentIndex]} alt="" />
      <p className="slider_count">{currentIndex + 1} / {images.length}</p>
      <button className="slider_next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;
