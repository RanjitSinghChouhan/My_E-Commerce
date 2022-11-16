import React, { useRef } from 'react';
import CommonList from './CommonList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faBandAid, faDiamond, faMobilePhone, faBed, faPlug, faBasketball, faHeadphones, faPlantWilt, faStopwatch, faLightbulb, faAngleRight, faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './ThirdHeader.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function ThirdHeader() {
    // let [showAllDepartments, setShowAllDepartments] = useState(false);
    let [allDepartmentsClass, setAllDepartmentClass] = useState('do-not-show');
    let isShow = useRef(false);
    const handleAllDepartments = () => {
        // setShowAllDepartments(showAllDepartments = !showAllDepartments);
        isShow.current = !isShow.current
        // showAllDepartments = !showAllDepartments;
        setAllDepartmentClass(allDepartmentsClass = isShow.current ? 'category-menu' : 'do-not-show')
    }
    return (
        <div className="container">
            <div className="navbar-wrap">
                <nav className="navbar">
                    <div className="header-category">
                        <a href="#" className="cat-toggle">
                            <FontAwesomeIcon icon={faSliders} /> <div>All Departments</div>
                            <FontAwesomeIcon icon={faAngleDown} onClick={handleAllDepartments} />
                        </a>
                        <ul className={allDepartmentsClass}>
                            <li><a href="#"><FontAwesomeIcon icon={faBandAid} />Health and Beauty </a>
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faMobilePhone} />Smartphone &amp; Table</a>
                                <CommonList />
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faBandAid} />Automotive &amp; Motorcycle </a>
                                <CommonList />
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faBed} />Furniture
                                <span>30%</span></a>
                                <CommonList />
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faBasketball} />Sport &amp; Outdoors</a>
                                <CommonList />
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faPlug} />Electronics</a>
                                <CommonList />
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faDiamond} />Bags &amp; shoe</a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faDiamond} />Accessories</a>
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faHeadphones} />entanglement</a>
                                <CommonList />
                            </li>
                            <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faPlantWilt} />Outdoor and Nature</a>
                                <CommonList />
                            </li>
                            <li>
                                <ul className="more_slide_open">
                                    <li><a href="#"><FontAwesomeIcon icon={faBandAid} />Health
                                        Product<span>-20%</span></a></li>
                                    <li className="menu-item-has-children"><a href="#"><FontAwesomeIcon icon={faStopwatch} />Western
                                        woman</a>
                                        <CommonList />
                                    </li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLightbulb} />Industrial Product</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="more-categories">
                                All Categories
                                <FontAwesomeIcon icon={faAngleRight} />
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" >
                        <div className="hamburger-toggle">
                            <div className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </button>
                    <div className="navbar-collapse" id="navbar-content">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to='/'>HOME</NavLink>
                            <NavLink className="nav-link" to='about'>ABOUT</NavLink>
                            <NavLink className="nav-link" to='blog'>BLOG</NavLink>
                            <NavLink className="nav-link" to='contact'>CONTACT</NavLink>
                        </div>
                    </div>
                    <div className="header-support">
                        <FontAwesomeIcon icon={faPhone} className='call-us' />
                        <div className="text">
                            CALL US 24/7
                            <span className='call-us' style={{ display: 'block' }}>+11 222 333 444</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default ThirdHeader