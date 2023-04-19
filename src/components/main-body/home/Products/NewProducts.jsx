/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import banner1 from '../../../../assets/images/banner_bg_1.png';
import {
  faAngleRight,
  faHeart,
  faShoppingCart,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import './NewProducts.css';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import {
  addToUserCartApi,
  fetchProductList,
  loadAddToCart,
  loadAddToWishlist,
  loadProductList,
} from '../../../../redux/products/productsAction';
import ReactPaginate from 'react-paginate';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NewProducts({
  productList,
  loadProductsList,
  loadAddToCart,
  addToUserCartApi,
  loadAddToWishlist,
  fetchProductList,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [PER_PAGE, setPerPage] = useState(3);
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const perPageArr = [3, 6, 9, 12];
  const [errorMsg, setErrorMsg] = useState('');
  const isAddedToWishList = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    loadProductsList();
  }, [loadProductsList]);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const handlePerPageSelect = (value) => {
    setPerPage(value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddToCart = async (product) => {
    var form_data = new FormData();
    form_data.append('token', localStorage.getItem('token'));
    form_data.append('product_id', product.id);
    form_data.append('qty', 1);
    addToUserCartApi(form_data)
      .then((response) => {
        loadAddToCart(product.id);
        setProductName(product.name);
        setOpen(true);
        isAddedToWishList.current = false;
      })
      .catch((error) => {
        setErrorMsg(error);
        setOpen(true);
      });
  };
  const handleAddToWishlist = (product) => {
    isAddedToWishList.current = true;
    loadAddToWishlist(product.id);
    setProductName(product.name);
    setOpen(true);
  };
  const handleImageClick = async () => {
    var form_data = new FormData();
    form_data.append('token', localStorage.getItem('token'));
    fetchProductList(form_data)
      .then((response) => {
        navigate('/productslist');
      })
      .catch((error) => {});
  };
  const offset = currentPage * PER_PAGE;
  const paginatedProductList = productList.slice(offset, offset + parseInt(PER_PAGE));
  const pageCount = Math.ceil(productList.length / PER_PAGE);
  return (
    <div className='new-products-container'>
      <div className='banner-highlights banner-highlights-img-1'>
        <div className='img'>
          <img src={banner1} alt='' />
        </div>
        <div className='text-content'>
          <h2>New Products</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form o
          </p>
          <button className='btn'>
            COMPRA AHORA <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>PRODUCTS LIST</h1>
      <div className='shop-product-list'>
        {paginatedProductList.map((product, index) => {
          return (
            <div className='shop-product-wrap' key={index}>
              <div className='img'>
                <button
                  data-tip='Click on this image to see Full Products List'
                  onClick={handleImageClick}
                >
                  <img src={product.image} className='non-over' alt='' />
                  <img src={product.over} className='img-over' alt='' />
                </button>
              </div>
              <ReactTooltip />
              <h3>
                <a href='product-details.html'>{product.name}</a>
              </h3>
              <div className='content'>
                <div>
                  <div className='price'>
                    <span className='deal-price'>${product.price}</span> -{' '}
                    <span className='discount'>${product.actualPrice}</span>
                  </div>
                  <div className='rating'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                  </div>
                </div>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className='icon-bag'
                  data-tip='Add to Wish List'
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className='icon-bag'
                  data-tip='Add to Cart'
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                {!errorMsg ? (
                  <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                  >
                    <Alert
                      variant='filled'
                      onClose={handleClose}
                      severity='success'
                      sx={{ width: '100%' }}
                    >
                      {isAddedToWishList.current
                        ? `${productName} is Successfully Added to the Wish List!`
                        : `${productName} is Successfully Added to the Cart!`}
                    </Alert>
                  </Snackbar>
                ) : (
                  <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                  >
                    <Alert
                      variant='filled'
                      onClose={handleClose}
                      severity='error'
                      sx={{ width: '100%' }}
                    >
                      {errorMsg}
                    </Alert>
                  </Snackbar>
                )}
              </div>
              <ReactTooltip />
            </div>
          );
        })}
      </div>
      {paginatedProductList.length === 0 ? (
        <h3>No Searched Product Available</h3>
      ) : (
        <>
          <div className='pagination'>
            <ReactPaginate
              breakLabel='...'
              nextLabel='Next'
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel='Previous'
              renderOnZeroPageCount={null}
              className='react_paginate'
            />

            <select
              data-tip='Number of Products Per Page'
              onChange={(e) => handlePerPageSelect(e.target.value)}
            >
              {perPageArr.map((perpage, index) => {
                return (
                  <option key={index} value={perpage}>
                    {perpage}
                  </option>
                );
              })}
            </select>
          </div>
          <ReactTooltip />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.products,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProductsList: () => dispatch(loadProductList()),
    loadAddToCart: (id) => dispatch(loadAddToCart(id)),
    addToUserCartApi: (data) => dispatch(addToUserCartApi(data)),
    loadAddToWishlist: (id) => dispatch(loadAddToWishlist(id)),
    fetchProductList: (data) => dispatch(fetchProductList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
