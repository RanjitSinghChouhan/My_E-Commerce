import React from 'react'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './SecondHeader.css'
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
                                <a href="#" data-bs-toggle="modal" data-bs-target="#login">Login </a>
                                /
                                <a href="#" data-bs-toggle="modal" data-bs-target="#signup">SignUp </a>
                            </div> |
                            <div className="shop-btns">
                                <a href="wishlist.html"><FontAwesomeIcon icon={faHeart} /></a>
                                <a href="#" data-trigger="#shop_cart"><FontAwesomeIcon icon={faShoppingBag} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default SecondHeader