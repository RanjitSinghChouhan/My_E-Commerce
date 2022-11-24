import React from 'react'
import { Outlet } from 'react-router-dom';
import MainCart from './cart-main-banner/MainCart';
import './Cart.css';

function Cart() {
    return (
        <div>
            <MainCart name='Cart' />
            <Outlet />
        </div>
    )
}

export default Cart