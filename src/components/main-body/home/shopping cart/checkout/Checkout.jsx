import React from 'react'
import { useSelector } from 'react-redux'
import '../Cart.css'
import paypalLogo from '../../../../../assets/images/paypal_logo.png'
function Checkout() {
    const billingFields = ['First name *', 'Last name *', 'Company name *', 'Country / Region *', 'Street Address *', 'Town / City *', 'District *', 'Postcode / ZIP (optional) *', 'Phone *', 'Email Address *']
    const checkoutList = useSelector(state => state.cartList);
    const cartTotal = useSelector(state => state.cartTotal);
    let total = 0
    cartTotal.map(item => total += item.cost)
    return (
        <div>
            <section>
                <div className="container">
                    <div className="shipping-details">
                        <form>
                            <div className="row">
                                <div className="billing-details">
                                    <h3>Billing Details</h3>

                                    <div>
                                        {billingFields.map(name => {
                                            return <div >
                                                <label for="firstName" className="form-label billing-fields">{name}</label>
                                                <input type="text" className="form-control billing-fields" id="firstName" required />
                                            </div>
                                        })}
                                        <div>
                                            <label for="orderNotes" className="form-label billing-fields">Order notes (optional)</label>
                                            <textarea type="email" className="form-control billing-fields" rows="5" id="orderNotes" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="place-order-wrap">
                                        <h3>Your order</h3>
                                        <div className="cart-totals">
                                            <div className="order-list">
                                                <ul>
                                                    <li>
                                                        <span><strong>PRODUCT</strong></span>
                                                        <span><strong>SUBTITLE</strong></span>
                                                    </li>
                                                    {checkoutList.map(item => {
                                                        return <li key={item.id}>
                                                            <span>{item.name} × {item.quantity}</span>
                                                            <span className="txt-pink">${item.price * item.quantity}</span>
                                                        </li>
                                                    })}
                                                    {cartTotal.map(item => {
                                                        return <li key={item.id}>
                                                            <span><strong>{item.name}</strong></span>
                                                            <span className="txt-pink">${item.cost}</span>
                                                        </li>
                                                    })}
                                                    <li>
                                                        <span><strong>Total</strong></span>
                                                        <span className="txt-pink">${total}</span>
                                                    </li>
                                                    <li className="cart-elements">
                                                        <div>
                                                            <input id="BankTransfer" name="paymentMethod" type="radio" />
                                                            <label for="BankTransfer">Direct Bank Transfer</label>
                                                        </div>
                                                        <p>
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        </p>
                                                        <div>
                                                            <input id="debitCredit" name="paymentMethod" type="radio" />
                                                            <label for="debitCredit">Credit / Debit Card </label>
                                                        </div>
                                                        <div>
                                                            <input id="cod" name="paymentMethod" type="radio" />
                                                            <label for="cod">Cash on delivery</label>
                                                        </div>
                                                        <div>
                                                            <input id="paypal" name="paymentMethod" type="radio" />
                                                            <label for="paypal">PayPal <img src={paypalLogo} alt="" /> What is PayPal?</label>
                                                        </div>
                                                    </li>
                                                    <li className="info-bottom">
                                                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a>.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary btn-square ">PLACE ORDER</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Checkout

