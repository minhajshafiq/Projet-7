import React, { useState } from 'react';
import Slider from 'react-slick';
//import './Slider.scss';

const SliderComponent = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        {pictures.map((picture, index) => (
          <img
            src={picture}
            key={index}
            className={activeIndex === index ? 'slider_img active' : 'slider_img'}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
