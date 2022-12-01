import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SecondHeader.css'
import ReactTooltip from 'react-tooltip'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductList } from '../../../redux/products/productsAction'
function SecondHeader() {
    const categories = ['All Categories', `Women's Clothing`, `Men's Clothing`, 'Luggage & Bags'];
    const [term, setTerm] = useState();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products);
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loadProductList(term))
    }
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
                            <form onSubmit={submitHandler}>
                                <input type="text" placeholder="Search for product..." value={term} onChange={(e) => setTerm(e.target.value)} />
                                <select className="custom-select">
                                    {categories.map((cat, index) => { return <option value={cat} key={index}>{cat}</option> })}
                                </select>
                                <button type='submit'><FontAwesomeIcon icon={faSearchengin} /></button>
                            </form>
                        </div>
                        <div className='search-dropdown'>
                            {productList.filter(item => {
                                const searchTerm = term && term.toLowerCase();
                                const name = item.name.toLowerCase();
                                return searchTerm && name.search(searchTerm) !== -1 && name !== searchTerm
                            }).map(item => { return <div onClick={() => setTerm(item.name.toLowerCase())}>{item.name.toLowerCase()}</div> })}
                        </div>
                        <div className="right-login">
                            <div className="bs-links">
                                <Link to='signup'><button className="loginSignup" style={{ border: 'none', backgroundColor: 'white' }}>Login </button></Link>
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