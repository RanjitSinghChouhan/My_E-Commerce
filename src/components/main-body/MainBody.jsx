import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Cart from './home/shopping cart/Cart'
import { Provider } from 'react-redux'
import store from '../../redux/store'

function MainBody() {
    return (
        <Provider store={store}>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='about' element={<About />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default MainBody