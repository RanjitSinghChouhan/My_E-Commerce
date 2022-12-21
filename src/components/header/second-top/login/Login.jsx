import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../../redux/products/productsAction'
import MainCart from '../../../main-body/home/shopping cart/cart-main-banner/MainCart'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material';

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const validate = values => {
    let error = {};
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
    return error;
}

function Login() {
    // const [formLoginValues, setFormLoginValues] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // })
    const dispatch = useDispatch()
    const loadingApi = useSelector(state => state.loading)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const handleClose = () => {
        setOpen(false)
    }
    // const submitLoginHandler = (e) => {
    //     e.preventDefault()
    //     console.log(formLoginValues);
    //     dispatch(loginUser(formLoginValues))
    // }
    const formik = useFormik({
        initialValues,
        onSubmit: (values, { props, setSubmitting }) => {
            dispatch(loginUser(values)).then(response => {
                localStorage.setItem('token', response.data.authorization.token);
                setOpen(true)
                setSuccessMsg(response.data.customer.name || (response.data && response.data.message))
                // alert((response.data && response.data.message) || `${response.data.customer.name} is logged in successfully`);
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }).catch(error => {
                setOpen(true)
                setErrorMsg(((error.response && error.response.data && error.response.data.error) ? error.response.data.message + " because " + (error.response.data.error.email || error.response.data.error.password) : error.response && error.response.data.message) || error.message)
                // alert((error.response && error.response.data && error.response.data.error) ? error.response.data.message + " because " + (error.response.data.error.email || error.response.data.error.password) : error.response.data.message)
            })
            setSubmitting(false)
        },
        validate
    })
    return (
        <div>
            <MainCart name='LogIn' />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="modal theme-modal" id="login">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="login-head">
                                <h1>Login</h1>
                                <p>
                                    Welcome back! Please enter your username and password to login.
                                </p>
                            </div>
                            <div className="login-form">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                                        <input type="text" className="form-control" placeholder="Username or email address" name={'email'} {...formik.getFieldProps('email')} />
                                        {/* <input type="text" className="form-control" placeholder="Username or email address" name={formLoginValues.name || formLoginValues.email} value={formLoginValues.name || formLoginValues.email} onChange={e => setFormLoginValues({ ...formLoginValues, name: e.target.value, email: e.target.value })} /> */}
                                    </div>
                                    <div>
                                        {formik.touched.password && formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
                                        <input type="password" className="form-control" placeholder="Password" name={'password'} {...formik.getFieldProps('password')} />
                                        {/* <input type="password" className="form-control" placeholder="Password" name={formLoginValues.password} value={formLoginValues.password} onChange={e => setFormLoginValues({ ...formLoginValues, password: e.target.value })} /> */}
                                        <a href="#" className="forget-pwd">Forgot?</a>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="form-check-input" id="remember_me" />
                                        <label className="form-check-label" htmlFor="remember_me">Remember me</label>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                                            {successMsg ? <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                {successMsg} is Logged in successfully!
                                            </Alert> : <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                {errorMsg}!
                                            </Alert>}
                                        </Snackbar>
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

export default Login