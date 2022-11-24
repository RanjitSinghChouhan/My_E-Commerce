import React from 'react'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SecondHeader.css'
import ReactTooltip from 'react-tooltip'
import { Link, Outlet } from 'react-router-dom'
function SecondHeader() {
    const categories = ['All Categories', `Women's Clothing`, `Men's Clothing`, 'Luggage & Bags']
    return (
        <div>
            <header className="homepage">
                <div className="container">
                    <div className="header-wrap">
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="category-form">
                            <form action="#">
                                <input type="text" placeholder="Search for product..." />
                                <select className="custom-select">
                                    {categories.map((cat, index) => { return <option value={cat} key={index}>{cat}</option> })}
                                </select>
                                <button><FontAwesomeIcon icon={faSearchengin} /></button>
                            </form>
                        </div>
                        <div className="right-login">
                            <div className="bs-links">
                                <Link><button style={{ border: 'none', backgroundColor: 'white' }}>Login </button></Link>
                                /
                                <Link to='signup'><button className="loginSignup" style={{ border: 'none', backgroundColor: 'white' }}>SignUp </button></Link>
                            </div> |
                            <div className="shop-btns">
                                <a href="wishlist.html"><FontAwesomeIcon icon={faHeart} /></a>
                                <Link to='cart'><a href="#" data-trigger="#shop_cart" data-tip='Go To Shopping Cart'><FontAwesomeIcon icon={faShoppingCart} /></a></Link>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <ReactTooltip />
        </div >
    )
}

export default SecondHeader