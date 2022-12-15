import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip';
import { loadAddToCart, removeWishlistProduct } from '../../../../../redux/products/productsAction';

function WishListTable() {
    const headers = ["", 'Product', 'Price', ""];
    const wishList = useSelector(state => state.wishList);
    const [open, setOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(loadAddToCart(product.id));
        setProductName(product.name);
        setOpen(true)
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
                                        <span><strong>{product.name}</strong></span>
                                    </div>
                                </td>
                                <td><strong>{product.price}</strong></td>
                                <td className="text-nowrap"><button className='btn btn-primary add-to-cart-btn' onClick={() => handleAddToCart(product)}>Add To Cart</button> <button className="cart-delete" data-tip='Delete the Product' onClick={() => dispatch(removeWishlistProduct(product.id))}><FontAwesomeIcon icon={faTrash} /></button>
                                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                            {productName} is Successfully Added to the Cart!
                                        </Alert>
                                    </Snackbar>
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