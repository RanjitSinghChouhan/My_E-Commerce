import React from 'react';
import './Signup.css';
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from '../../../../redux/products/productsAction';
import { useFormik } from 'formik';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

// const onSubmit = (values, { props, setSubmitting }) => {

//     props.dispatch(userRegistration(values))
//     setSubmitting(false)
// }

const validate = values => {
    let error = {}
    if (!values.name) {
        error.name = 'Required'
    } else if (!/^[A-Za-z]+$/i.test(values.name)) {
        error.name = 'Invalid Text Format'
    }
    if (!values.email) {
        error.email = 'Required'
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)) {
        error.email = 'Incorrect email address'
    }
    if (!values.password) {
        error.password = 'Required'
    } else if (!/^[a-zA-Z0-9\s,'-]*$/i.test(values.password)) {
        error.password = 'Incorrect Password Format'
    }
    if (!values.password_confirmation) {
        error.password_confirmation = 'Required'
    } else if (!/^[a-zA-Z0-9\s,'-]*$/i.test(values.password_confirmation)) {
        error.password_confirmation = 'Incorrect Password Format'
    } else if (values.password_confirmation !== values.password) {
        error.password_confirmation = 'Password and Confirmed password does not match'
    }
    return error
}
function SignUp() {
    const dispatch = useDispatch()
    const loadingApi = useSelector(state => state.loading)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const handleClose = () => {
        setOpen(false)
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values, { props, setSubmitting }) => {
            dispatch(userRegistration(values))
                .then(response => {
                    setOpen(true)
                    setSuccessMsg(response?.data?.data?.name || (response?.data?.message))
                    setTimeout(() => {
                        navigate('/signin')
                    }, 1000);
                })
                .catch(error => {
                    setOpen(true)
                    setErrorMsg((error.response.data && error.response.data.error) ? error.response.data.message + " because " + (error.response.data.error.email || error.response.data.error.password) : error.response.data.message)
                })
            setSubmitting(false)
        },
        validate
    })
    return (
        <div>
            <MainCart name='Sign Up' />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="modal theme-modal" id="signup">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="login-head">
                                <h1>Register</h1>
                                <p>
                                    Create new account today to reap the benefits of a personalized shopping experience.
                                </p>
                            </div>
                            <div className="login-form">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        {formik.touched.name && formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
                                        <input type="text" className="form-control" placeholder="Username" name='name' {...formik.getFieldProps('name')} />
                                    </div>
                                    <div>
                                        {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                                        <input type="text" className="form-control" placeholder="E-mail address" name='email' {...formik.getFieldProps('email')} />
                                    </div>
                                    <div>
                                        {formik.touched.password && formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
                                        <input type="password" className="form-control" placeholder="Password" name={'password'} {...formik.getFieldProps('password')} />
                                    </div>
                                    <div>
                                        {formik.touched.password_confirmation && formik.errors.password_confirmation ? <div style={{ color: 'red' }}>{formik.errors.password_confirmation}</div> : null}
                                        <input type="password" className="form-control" placeholder="Confirm Password" name={'password_confirmation'} {...formik.getFieldProps('password_confirmation')} />
                                    </div>
                                    <div>
                                        <input type="checkbox" className="form-check-input" id="remember_me_register" />
                                        <label className="form-check-label" htmlFor="remember_me_register">Remember me</label>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                                            {successMsg ? <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                {successMsg} is Registerred successfully!
                                            </Alert> : <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                {errorMsg}!
                                            </Alert>}
                                        </Snackbar>
                                        <p className="pt-4">
                                            <small>
                                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                                            </small>
                                        </p>
                                    </div>
                                </form>
                                {loadingApi ? <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp