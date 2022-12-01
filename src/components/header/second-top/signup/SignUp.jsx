import React from 'react';
import './Signup.css';
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart';
function SignUp() {
    return (
        <div>
            <MainCart name='LogIn/Sign Up' />
            <div className="modal theme-modal" id="signup">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="login-head">
                            <h1>Register</h1>
                            <p className="lead">
                                Create new account today to reap the benefits of a personalized shopping experience.
                            </p>
                        </div>
                        <div className="login-form">
                            <form>
                                <div>
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div>
                                    <input type="text" className="form-control" placeholder="E-mail address" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div>
                                    <input type="checkbox" className="form-check-input" id="remember_me_register" />
                                    <label className="form-check-label" for="remember_me_register">Remember me</label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                                    <p className="pt-4">
                                        <small>
                                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                                        </small>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp