import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import MainCart from './cart-main-banner/MainCart';
import CartTable from './cart-table/CartTable';
import './Cart.css';
import Checkout from './checkout/Checkout';

function Cart() {
    return (
        <div>
            <MainCart />
            <Outlet />
        </div>
    )
}

export default Cart