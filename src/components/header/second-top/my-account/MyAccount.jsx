import React, { useState } from 'react'
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart'
import './MyAccount.css'

function MyAccount() {
    const [isOrder, setIsOrder] = useState(true)
    const [isAddress, setIsAddress] = useState(false)
    const [isAccount, setIsAccount] = useState(false)
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
    return (
        <div>
            <MainCart name='My Account' />
            <section className="user-dashboard-wrap">
                <div className="container">
                    <div className="user-dashboard-row" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="my-dashboard-list">
                            <div className="my-dashboard-links">
                                <ul className="list-unstyled">
                                    <li><button onClick={() => handleOrderPage()}>Orders</button></li>
                                    <li><button onClick={() => handleAddressPage()}>Address</button></li>
                                    <li><button onClick={() => handleAccountPage()}>Account Details</button></li>
                                    <li><button>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                        {isOrder ? <div>
                            <div className="account-order-list">
                                <div className="account-page-header">
                                    <h3>
                                        Orders Details
                                    </h3>
                                    <select className="nice-select">
                                        <option selected="">Select option</option>
                                        <option>Last 30 Days</option>
                                        <option>Last 15 Days</option>
                                        <option>Last 7 Days</option>
                                        <option>Last 3 Months</option>
                                    </select>
                                </div>
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="order-list-wrap">
                                            <div className="date">
                                                Order On: 05-June-2022
                                            </div>
                                            <div className="order-items">
                                                <div className="item-details">
                                                    <img src="assets/images/category/category_img_1.png" alt="" />
                                                    <div className="text">
                                                        <h3>New color Lipstick</h3>
                                                        <p><strong>Colour:</strong> Red</p>
                                                        <p><strong>Quantity:</strong> 01</p>
                                                        <p>
                                                            <strong>Order ID: #20125368237</strong>
                                                            <span className="price">Total: $120</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="item-buttons">
                                                    <a href="#" className="btn btn-primary btn-sm">Track Order</a>
                                                    <a href="my-orders.html" className="btn btn-outline-dark btn-sm">Order Details</a>
                                                </div>
                                            </div>
                                            <div className="delivery-date">
                                                <span>Delivery accept by : 10-June-2022</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="order-list-wrap">
                                            <div className="date">
                                                Order On: 05-June-2022
                                            </div>
                                            <div className="order-items">
                                                <div className="item-details">
                                                    <img src="assets/images/category/category_img_1.png" alt="" />
                                                    <div className="text">
                                                        <h3>New color Lipstick</h3>
                                                        <p><strong>Colour:</strong> Red</p>
                                                        <p><strong>Quantity:</strong> 01</p>
                                                        <p>
                                                            <strong>Order ID: #20125368237</strong>
                                                            <span>Total: $120</span>
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="item-buttons">
                                                    <a href="#" className="link-pink">Write Product Review</a>
                                                    <a href="my-orders.html" className="btn btn-outline-dark btn-sm">Order Details</a>
                                                </div>
                                            </div>
                                            <div className="delivery-date successful">
                                                <span>Successfully Delivered on 25-May-2022</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="order-list-wrap">
                                            <div className="date">
                                                Order On: 05-June-2022
                                            </div>
                                            <div className="order-items">
                                                <div className="item-details">
                                                    <img src="assets/images/category/category_img_1.png" alt="" />
                                                    <div className="text">
                                                        <h3>New color Lipstick</h3>
                                                        <p><strong>Colour:</strong> Red</p>
                                                        <p><strong>Quantity:</strong> 01</p>
                                                        <p>
                                                            <strong>Order ID: #20125368237</strong>
                                                            <span>Total: $120</span>
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="item-buttons">
                                                    <a href="#" className="btn btn-primary btn-sm">Track Order</a>
                                                    <a href="my-orders.html" className="btn btn-outline-dark btn-sm">Order Details</a>
                                                </div>
                                            </div>
                                            <div className="delivery-date cancelled">
                                                <span>Order Canceled</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> : isAddress ? <div>
                            <div className="account-order-list">
                                <div className="account-page-header">
                                    <h3>
                                        Address
                                    </h3>
                                </div>
                                <div className="address-detail-wrap">
                                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '5%' }}>
                                        <div>
                                            <div className="address-details">
                                                <h2>Alex Tuntuni</h2>
                                                <p>1355 Market St, Suite 900</p>
                                                <p>San Francisco, CA 94103</p>
                                                <p>Mobile: (123) 456-7890</p>

                                                <a href="#" className="btn btn-primary btn-rounded">Edit Address</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-details">
                                                <h2>Johan Smith</h2>
                                                <p>1355 Market St, Suite 900</p>
                                                <p>San Francisco, CA 94103</p>
                                                <p>Mobile: (123) 456-7890</p>

                                                <a href="#" className="btn btn-primary btn-rounded">Edit Address</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : isAccount ? <div>
                            <div className="account-order-list">
                                <div className="account-page-header">
                                    <h3>
                                        Account Details
                                    </h3>
                                </div>
                                <div className="address-detail-wrap">
                                    <form className="needs-validation" novalidate="">
                                        <div style={{ display: 'flex' }}>
                                            <div>
                                                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                            </div><br />
                                            <div>
                                                <input type="text" className="form-control" id="Email" placeholder="Email" />
                                            </div>
                                        </div>


                                        <h5>Password change</h5>

                                        <div style={{ display: 'flex' }}>
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