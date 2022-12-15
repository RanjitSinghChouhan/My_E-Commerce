import React from 'react'
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart'
import WishListTable from './wishlist-table/WishListTable'

function WishList() {
    return (
        <div>
            <MainCart name='Wish List' />
            <WishListTable />
        </div>
    )
}

export default WishList