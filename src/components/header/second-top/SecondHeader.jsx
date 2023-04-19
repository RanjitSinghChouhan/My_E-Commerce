/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SecondHeader.css';
import ReactTooltip from 'react-tooltip';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductList, logoutUser, userDetails } from '../../../redux/products/productsAction';
import { Snackbar, Alert } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

function SecondHeader() {
  const categories = ['All Categories', `Women's Clothing`, `Men's Clothing`, 'Luggage & Bags'];
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userData = useSelector((state) => state.userData);
  const [open, setOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const loadingApi = useSelector((state) => state.loading);
  const location = useLocation();
  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (location.pathname === '/productslist') {
      dispatch(loadProductList(term, true));
    } else if (location.pathname === '/') {
      dispatch(loadProductList(term, false));
    }
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const logoutHandler = () => {
    // var form_data = new FormData();
    // form_data.append('token', localStorage.setItem(""))
    // dispatch(logoutUser(form_data)).then(response => {
    //     setOpen(true);
    //     setSuccessMsg(`User is ${response.message}`)
    //     // alert(`User is ${response.message}`)
    //     setTimeout(() => {
    //         navigate('/signin')
    //     }, 800);
    localStorage.removeItem('token');
    window.location.pathname = '/signin';
    // }).catch(error => {
    //     setOpen(true);
    //     setErrorMsg(error)
    //     alert(error)
    // })
  };
  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);
  return (
    <div>
      <header className='homepage'>
        <div className='container'>
          <div className='header-wrap'>
            <div className='logo'>
              <a href='index.html'>
                <img src={logo} alt='' />
              </a>
            </div>
            <div className='category-form'>
              <form onSubmit={submitHandler}>
                <input
                  type='text'
                  placeholder='Search for product...'
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <select className='custom-select'>
                  {categories.map((cat, index) => {
                    return (
                      <option
                        selected={cat === `Women's Clothing` ? 'selected' : ''}
                        value={cat}
                        key={index}
                      >
                        {cat}
                      </option>
                    );
                  })}
                </select>
                <button type='submit'>
                  <FontAwesomeIcon icon={faSearchengin} />
                </button>
              </form>
            </div>
            <div className='search-dropdown'>
              {productList
                .filter((item) => {
                  const searchTerm = term && term.toLowerCase();
                  const name =
                    (item.title && item.title.toLowerCase()) ||
                    (item.name && item.name.toLowerCase());
                  return searchTerm && name.search(searchTerm) !== -1 && name !== searchTerm;
                })
                .map((item) => {
                  return (
                    <div
                      onClick={() =>
                        setTerm(
                          (item.title && item.title.toLowerCase()) ||
                            (item.name && item.name.toLowerCase()),
                        )
                      }
                    >
                      {(item.title && item.title.toLowerCase()) ||
                        (item.name && item.name.toLowerCase())}
                    </div>
                  );
                })}
            </div>
            <div className='right-login'>
              <div className='bs-links'>
                {!userData?.details?.data ? (
                  <>
                    <Link to='signin'>
                      <button
                        className='loginSignup'
                        style={{ border: 'none', backgroundColor: 'white' }}
                      >
                        Login
                      </button>
                    </Link>
                    /
                    <Link to='signup'>
                      <button
                        className='loginSignup'
                        style={{ border: 'none', backgroundColor: 'white' }}
                      >
                        SignUp
                      </button>
                    </Link>
                  </>
                ) : (
                  <div style={{ border: 'none', backgroundColor: 'white', display: 'block' }}>
                    <Link to='my_account'>
                      <div>
                        {userData &&
                          userData.details.data &&
                          (userData.details.data.name.toUpperCase() || userData.details.data.email)}
                      </div>
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className='loginSignup'
                      style={{ border: 'none', backgroundColor: 'white' }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}
              >
                {successMsg ? (
                  <Alert
                    variant='filled'
                    onClose={handleClose}
                    severity='success'
                    sx={{ width: '100%' }}
                  >
                    {successMsg}!
                  </Alert>
                ) : (
                  <Alert
                    variant='filled'
                    onClose={handleClose}
                    severity='error'
                    sx={{ width: '100%' }}
                  >
                    {errorMsg}!
                  </Alert>
                )}
              </Snackbar>
              |
              <div className='shop-btns'>
                <Link to='wishlist'>
                  <a href='#' data-tip='Go To Wish List'>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </Link>
                <Link to='cart'>
                  <a href='#' data-trigger='#shop_cart' data-tip='Go To Shopping Cart'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </Link>
                <Outlet />
              </div>
            </div>
            {loadingApi ? (
              <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                <CircularProgress color='inherit' />
              </Backdrop>
            ) : null}
          </div>
        </div>
      </header>
      <ReactTooltip />
    </div>
  );
}

export default SecondHeader;
