import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Cart from './home/shopping cart/Cart'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Checkout from './home/shopping cart/checkout/Checkout'
import CartTable from './home/shopping cart/cart-table/CartTable'
import MainCart from './home/shopping cart/cart-main-banner/MainCart'

function MainBody() {
    return (
        <Provider store={store}>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='cart' element={<Cart />} >
                        <Route index element={<CartTable />} />
                        <Route path="checkout" element={<Checkout />} />
                    </Route>
                    <Route path='about' element={<About />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default MainBody