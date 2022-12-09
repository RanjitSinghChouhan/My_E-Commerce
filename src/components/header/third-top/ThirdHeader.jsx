import React, { useRef } from 'react';
import CommonList from './CommonList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faBandAid, faDiamond, faMobilePhone, faBed, faPlug, faBasketball, faHeadphones, faPlantWilt, faStopwatch, faLightbulb, faAngleRight, faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './ThirdHeader.css'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
function ThirdHeader() {
    // let [showAllDepartments, setShowAllDepartments] = useState(false);
    let [allDepartmentsClass, setAllDepartmentClass] = useState('do-not-show');
    const [open, setOpen] = useState(false)
    let isShow = useRef(false);
    const handleAllDepartments = () => {
        // setShowAllDepartments(showAllDepartments = !showAllDepartments);
        isShow.current = !isShow.current
        // showAllDepartments = !showAllDepartments;
        setAllDepartmentClass(allDepartmentsClass = isShow.current ? 'category-menu' : 'do-not-show')
    }
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };
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
                    <button onClick={toggleDrawer(true)} className="navbar-toggler" type="button" >
                        <div className="hamburger-toggle">
                            <div className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </button>
                    <Drawer
                        anchor='right'
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                {[{ name: 'HOME', to: '/' }, { name: 'ABOUT', to: 'about' }, { name: 'BLOG', to: 'blog' }, { name: 'CONTACT', to: 'contact' }].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={<Link className="nav-link" to={text.to}>{text.name}</Link>} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
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