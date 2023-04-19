import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import slider_img from '../../../../assets/images/slider/slider_img.jpg';
import './Slider.css';
function Slider() {
  return (
    <div className='container'>
      <div className='slider-wrap'>
        <img className='slider-img' src={slider_img} alt='slider_image' />
        <div className='slider-content'>
          <h4>Limited Offer 25% Off</h4>
          <h1>New Products</h1>
          <h5>
            Only <span>$199.02</span>
          </h5>
          <a href='#' className='btn'>
            SHOP NOW <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
