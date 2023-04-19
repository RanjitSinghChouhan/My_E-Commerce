/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import '../Cart.css';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCartProduct,
  increaseQuantity,
  decreaseQuantity,
  loadCartTotals,
} from '../../../../../redux/products/productsAction';
import { Link, Outlet } from 'react-router-dom';

function CartTable() {
  const headers = ['', 'Product', 'Price', 'Quantity', 'Total'];
  const cartList = useSelector((state) => state.cartList);
  const cartTotal = useSelector((state) => state.cartTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartTotals());
  }, [dispatch(loadCartTotals())]);
  let total = 0;
  cartTotal.map((item) => (total += item.cost));
  return (
    <div>
      <div className='cart-table'>
        <table className='table'>
          <thead className='table-light'>
            <tr>
              {headers.map((header, index) => {
                return (
                  <th key={index}>
                    <span>{header}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className='theme-body'>
            {cartList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className='item-product'>
                      <span className='img-wrap'>
                        <img src={product.image} alt='' />
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>
                        <strong>{product.name || product.title}</strong>
                      </span>
                    </div>
                  </td>
                  <td>
                    <strong>{product.price}</strong>
                  </td>
                  <td>
                    <div className='quantity'>
                      <button
                        onClick={() => dispatch(decreaseQuantity(product.id || product.product_id))}
                        className='minus-btn'
                        type='button'
                        name='button'
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input type='text' name='name' value={product.quantity} />
                      <button
                        onClick={() => dispatch(increaseQuantity(product.id || product.product_id))}
                        className='plus-btn'
                        type='button'
                        name='button'
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className='text-nowrap'>
                    <strong>{product.price * product.quantity}</strong>{' '}
                    <button
                      onClick={() => dispatch(removeCartProduct(product.id || product.product_id))}
                      className='cart-delete'
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {cartList.length === 0 ? (
          <div>There is no product added to Cart. You can add products from Home Page</div>
        ) : (
          ''
        )}
      </div>
      <div className='cart-checkout-section'>
        <div className='coupon'>
          <h3>Coupon Discount</h3>
          <p>Enter your coupon code if you have one.</p>
          <div>
            <input type='text' className='form-control' name='name' placeholder='Coupon code' />
          </div>
          <div>
            <button className='btn btn-dark'>Apply Coupon</button>
          </div>
        </div>
        <div className='cart-totals-parent'>
          <div className='cart-totals'>
            <div className='order-list'>
              <ul className='list-unstyled'>
                {cartTotal.map((item) => {
                  return (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <span>${item.cost}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='total-count'>
              <span>Total</span>
              <span className='txt-pink'>${total}</span>
            </div>
          </div>
          <div>
            <Link to='checkout'>
              <button className='btn btn-primary'>Proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
