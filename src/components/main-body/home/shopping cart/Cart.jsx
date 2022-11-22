import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import brdscrbImg from '../../../../assets/images/breadcrumbs_img.png';
import './Cart.css';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { removeCartProduct, increaseQuantity, decreaseQuantity, loadCartTotals } from '../../../../redux/products/productsAction';

function Cart() {
    const headers = ["", 'Product', 'Price', 'Quantity', 'Total'];
    const cartList = useSelector(state => state.cartList);
    const cartTotal = useSelector(state => state.cartTotal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCartTotals())
    }, [dispatch(loadCartTotals())])
    let total = 0
    cartTotal.map(item => total += item.cost)
    return (
        <div>
            <section className="breadcrumbs-wrapper">
                <div className="container">
                    <div className='row'>
                        <h1>Cart</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <Link to='/' className="breadcrumb-item"><li >Home</li></Link>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </nav>
                        <Outlet />
                    </div>
                    <div className="img">
                        <img src={brdscrbImg} alt="" />
                    </div>
                </div>
            </section>
            <div className="cart-table">
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            {headers.map((header, index) => { return <th key={index}><span>{header}</span></th> })}
                        </tr>
                    </thead>
                    <tbody className="theme-body">
                        {cartList.map((product, index) => {
                            return <tr key={index}>
                                <td>
                                    <div className="item-product">
                                        <span className="img-wrap"><img src={product.image} alt="" /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-product">
                                        <span><strong>{product.name}</strong></span>
                                    </div>
                                </td>
                                <td><strong>{product.price}</strong></td>
                                <td>
                                    <div className="quantity">
                                        <button onClick={() => dispatch(decreaseQuantity(product.id))} className="minus-btn" type="button" name="button">
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input type="text" name="name" value={product.quantity} />
                                        <button onClick={() => dispatch(increaseQuantity(product.id))} className="plus-btn" type="button" name="button">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </td>
                                <td className="text-nowrap"><strong>{product.price * product.quantity}</strong> <button onClick={() => dispatch(removeCartProduct(product.id))} className="cart-delete"><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="cart-checkout-section">
                <div className="coupon">
                    <h3>Coupon Discount</h3>
                    <p>Enter your coupon code if you have one.</p>
                    <div>
                        <input type="text" className="form-control" name="name" placeholder="Coupon code" />
                    </div>
                    <div>
                        <button className="btn btn-dark">Apply Coupon</button>
                    </div>
                </div>
                <div>
                    <div className="cart-totals">
                        <div className="order-list">
                            <ul className="list-unstyled">
                                {cartTotal.map(item => {
                                    return <li key={item.id}>
                                        <span>{item.name}</span>
                                        <span>${item.cost}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="total-count">
                            <span>Total</span>
                            <span className="txt-pink">${total}</span>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart