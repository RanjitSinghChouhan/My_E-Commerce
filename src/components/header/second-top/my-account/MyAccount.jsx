import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart'
import './MyAccount.css'
import { useNavigate } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material';

function MyAccount() {
    const [isOrder, setIsOrder] = useState(true)
    const [isAddress, setIsAddress] = useState(false)
    const [isAccount, setIsAccount] = useState(false)
    const billingDetails = useSelector(state => state.billingDetails);
    const cartList = useSelector(state => state.cartList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const handleOrderPage = () => {
        setIsOrder(true);
        setIsAddress(false);
        setIsAccount(false);
    }
    const handleAddressPage = () => {
        setIsOrder(false);
        setIsAddress(true);
        setIsAccount(false);
    }
    const handleAccountPage = () => {
        setIsOrder(false);
        setIsAddress(false);
        setIsAccount(true);
    }
    const logoutHandler = () => {
            localStorage.removeItem("token");
            window.location.pathname = '/signin'
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <MainCart name='My Account' />
            <section className="user-dashboard-wrap">
                <div className="container">
                    <div className="user-dashboard-row">
                        <div className="my-dashboard-list">
                            <div className="my-dashboard-links">
                                <ul className="list-unstyled">
                                    <li><button className={isOrder ? 'active' : ''} onClick={() => handleOrderPage()}>Orders</button></li>
                                    <li><button className={isAddress ? 'active' : ''} onClick={() => handleAddressPage()}>Address</button></li>
                                    <li><button className={isAccount ? 'active' : ''} onClick={() => handleAccountPage()}>Account Details</button></li>
                                    <li><button onClick={logoutHandler}>Logout</button>
                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                            {successMsg ? <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                {successMsg}!
                                            </Alert> : <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                {errorMsg}!
                                            </Alert>}
                                        </Snackbar>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {isOrder ? <div>
                            <div className="account-order-list">
                                <div className="account-page-header">
                                    <h3>
                                        Orders Details
                                    </h3>
                                    {/* <select className="nice-select">
                                        <option selected="">Select option</option>
                                        <option>Last 30 Days</option>
                                        <option>Last 15 Days</option>
                                        <option>Last 7 Days</option>
                                        <option>Last 3 Months</option>
                                    </select> */}
                                </div>
                                {cartList.length !== 0 ? <ul className="list-unstyled">
                                    {cartList.map(list => {
                                        return <li>
                                            <div className="order-list-wrap">
                                                <div className="date">
                                                    Order On: 05-June-2022
                                                </div>
                                                <div className="order-items">
                                                    <div className="item-details">
                                                        <img src={list.image} alt="" />
                                                        <div className="text">
                                                            <h3>{list.name || list.title}</h3>
                                                            <p><strong>Quantity:</strong> {list.quantity}</p>
                                                            <p>
                                                                <strong>Order ID: #20125368237</strong>
                                                            </p>
                                                            <p>
                                                                <span className="price">Total: ${list.price * list.quantity}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="item-buttons">
                                                        <button className="btn btn-primary btn-sm">Track Order</button>
                                                        <a href="#" className="link-pink">Write Product Review</a>
                                                        <button className="btn btn-outline-dark btn-sm">Order Details</button>
                                                    </div>
                                                </div>
                                                <div className="delivery-date">
                                                    <span>Delivery accept by : 10-June-2022</span>
                                                </div>
                                                <div className="delivery-date successful">
                                                    <span>Successfully Delivered on 25-May-2022</span>
                                                </div>
                                                <div className="delivery-date cancelled">
                                                    <span>Order Canceled</span>
                                                </div>
                                            </div>
                                        </li>
                                    })} </ul> : <h1>There is no item being ordered</h1>}
                            </div>
                        </div> : isAddress ? <div>
                            <div className="address-details-list">
                                <div className="account-page-header">
                                    <h3>
                                        Address
                                    </h3>
                                </div>
                                <div className="address-detail-wrap">
                                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '5%' }}>
                                        <div>
                                            <div className="address-details">
                                                <h2>{billingDetails['First name']} {billingDetails['Last name']}</h2>
                                                <p>{billingDetails['Street Address']} {billingDetails['Town / City']} {billingDetails['Postcode / ZIP (optional)']}</p>
                                                <p>{billingDetails['District']}, {billingDetails['Country / Region']}</p>
                                                <p>Mobile: {billingDetails['Phone']}</p>
                                                <button className="btn btn-primary btn-rounded">Edit Address</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : isAccount ? <div>
                            <div className="account-details">
                                <div className="account-page-header">
                                    <h3>
                                        Account Details
                                    </h3>
                                </div>
                                <div className="address-detail-wrap">
                                    <form className="needs-validation" novalidate="">
                                        <div>
                                            <div>
                                                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="Email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <h5>Password change</h5>
                                        <div>
                                            <div>
                                                <input type="text" className="form-control" id="cc-pwd" placeholder="Current password" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="cc-name" placeholder="Current password" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="cc-number" placeholder="Current password" />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div> : <div>Logout</div>}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyAccount