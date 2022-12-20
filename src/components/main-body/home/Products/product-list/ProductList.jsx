import { faHeart, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Snackbar } from '@mui/material'
import React, { useRef, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { addToUserCartApi, loadAddToCart, loadAddToWishlist } from '../../../../../redux/products/productsAction';

function ProductList() {
    const [currentPage, setCurrentPage] = useState(0);
    const [PER_PAGE, setPerPage] = useState(3);
    const [open, setOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const perPageArr = [5, 10, 20, 50]
    const [errorMsg, setErrorMsg] = useState('');
    const isAddedToWishList = useRef(false);
    const productList = useSelector(state => state.products);
    const dispatch = useDispatch()
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }
    const handlePerPageSelect = (value) => {
        setPerPage(value)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleAddToCart = async (product) => {
        var form_data = new FormData();
        form_data.append('token', localStorage.getItem("token"))
        form_data.append('product_id', product.id)
        form_data.append('qty', 1)
        dispatch(addToUserCartApi(form_data)).then(response => {
            dispatch(loadAddToCart(product.product_id || product.id));
            setProductName(product.title || product.name);
            setOpen(true);
            isAddedToWishList.current = false;
        }).catch(error => {
            setErrorMsg(error);
            setOpen(true);
        })
    }
    const handleAddToWishlist = (product) => {
        isAddedToWishList.current = true;
        dispatch(loadAddToWishlist(product.product_id || product.id));
        setProductName(product.title || product.name);
        setOpen(true);
    };
    const offset = currentPage * PER_PAGE;
    const paginatedProductList = productList.slice(offset, offset + parseInt(PER_PAGE));
    const pageCount = productList.length ? Math.ceil(productList.length / PER_PAGE) : 1;
    return (
        <div className='new-products-container'>
            <h1 style={{ marginBottom: '4%', height: '50px', boxShadow: '0px 0px 4px 0px rgba(175, 105, 105, 0.47)' }}>Products List</h1>
            <div className="shop-product-list">
                {paginatedProductList.map((product) => {
                    return <div className="shop-product-wrap" key={product.product_id || product.id}>
                        <div className="api-img">
                            <button>
                                <img src={product.image} alt="" />
                            </button>
                        </div>
                        <h3>
                            <a href="product-details.html">{product.title || product.name}</a>
                        </h3>
                        <div className="content">
                            <div>
                                <div className="price">
                                    <span className="deal-price">${product.price}</span> - <span className="discount">${product.actualPrice || product.price * 1.5}</span>
                                </div>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                            </div>
                            <button onClick={() => handleAddToWishlist(product)} className="icon-bag" data-tip="Add to Wish List">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button onClick={() => handleAddToCart(product)} className="icon-bag" data-tip="Add to Cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                            {!errorMsg ? <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1000} onClose={handleClose}>
                                <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    {isAddedToWishList.current ? `${productName} is Successfully Added to the Wish List!` : `${productName} is Successfully Added to the Cart!`}
                                </Alert>
                            </Snackbar> : <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1000} onClose={handleClose}>
                                <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    {errorMsg}
                                </Alert>
                            </Snackbar>}
                        </div>
                        <ReactTooltip />
                    </div>
                })}
            </div>
            {paginatedProductList.length === 0 ? <h3>No Searched Product Available</h3> : (<><div className='pagination'>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Prev"
                    renderOnZeroPageCount={null}
                    className='react_paginate'
                />
                <select data-tip="Number of Products Per Page" onChange={e => handlePerPageSelect(e.target.value)}>{perPageArr.map((perpage, index) => { return <option key={index} value={perpage}>{perpage}</option> })}</select>
            </div>
                <ReactTooltip /></>)}
        </div>
    )
}

export default ProductList