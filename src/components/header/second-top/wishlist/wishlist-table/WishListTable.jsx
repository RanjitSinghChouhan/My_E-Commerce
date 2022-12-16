import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Snackbar } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip';
import { addToUserCartApi, loadAddToCart, removeWishlistProduct } from '../../../../../redux/products/productsAction';

function WishListTable() {
    const headers = ["", 'Product', 'Price', ""];
    const wishList = useSelector(state => state.wishList);
    const [open, setOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState('');
    const handleAddToCart = (product) => {
        var form_data = new FormData();
        form_data.append('token', localStorage.getItem("token"))
        form_data.append('product_id', (product.id || product.product_id))
        form_data.append('qty', 1)
        dispatch(addToUserCartApi(form_data)).then(response => {
            dispatch(loadAddToCart(product.product_id || product.id));
            setProductName(product.title || product.name);
            setOpen(true);
            dispatch(removeWishlistProduct(product.id || product.product_id))
        }).catch(error => {
            setErrorMsg(error);
            setOpen(true);
        })
    };
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <div className="cart-table">
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            {headers.map((header, index) => { return <th key={index}><span>{header}</span></th> })}
                        </tr>
                    </thead>
                    <tbody className="theme-body">
                        {wishList.map((product, index) => {
                            return <tr key={index}>
                                <td>
                                    <div className="item-product">
                                        <span className="img-wrap"><img src={product.image} alt="" /></span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span><strong>{product.name || product.title}</strong></span>
                                    </div>
                                </td>
                                <td><strong>{product.price}</strong></td>
                                <td className="text-nowrap"><button className='btn btn-primary add-to-cart-btn' onClick={() => handleAddToCart(product)}>Add To Cart</button> <button className="cart-delete" data-tip='Delete the Product' onClick={() => dispatch(removeWishlistProduct(product.id || product.product_id))}><FontAwesomeIcon icon={faTrash} /></button>
                                    {!errorMsg ? <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1000} onClose={handleClose}>
                                        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                            {productName} is Successfully Added to the Cart!
                                        </Alert>
                                    </Snackbar> : <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1000} onClose={handleClose}>
                                        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                            {errorMsg}
                                        </Alert>
                                    </Snackbar>}
                                    <ReactTooltip />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                {wishList.length === 0 ? <div>There is no product added to WishList. You can add products from Home Page</div> : ''}
            </div>
        </div>
    )
}

export default WishListTable