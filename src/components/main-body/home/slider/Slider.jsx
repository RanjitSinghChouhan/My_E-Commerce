import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import slider_img from '../../../../assets/images/slider/slider_img.jpg'
import './Slider.css'
function Slider() {
    return (
        <div className="container">
            <div className="slider-wrap">
                <img className='slider-img' src={slider_img} alt='slider_image' />
                <div className="slider-bg">
                    <div className="slider-content">
                        <h4 className="title" >Limited Offer 25% Off</h4>
                        <h1 className="small-title">New Products</h1>
                        <h5 className="price">Only <span>$199.02</span></h5>
                        <a href="#" className="btn">SHOP NOW <FontAwesomeIcon icon={faAngleRight} /></a>
                    </div>
                </div>
                {/* <div className="single-slider slider-bg d-flex align-items-center" data-background="assets/images/slider/slider_img.jpg">
                        <div className="slider-content">
                            <h4 className="title" data-animation="fadeInUp" data-delay=".2s">Limited Offer 25% Off</h4>
                            <h1 className="small-title" data-animation="fadeInUp" data-delay=".4s">New Products</h1>
                            <h5 className="price" data-animation="fadeInUp" data-delay=".6s">Only <span>$199.02</span></h5>
                            <a href="#" className="btn" data-animation="fadeInUp" data-delay=".8s">SHOP NOW <i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div> */}
            </div>
        </div>
    )
}

export default Slider