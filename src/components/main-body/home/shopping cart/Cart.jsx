import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import brdscrbImg from '../../../../assets/images/breadcrumbs_img.png';
import './Cart.css';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    const headers = ["", 'Product', 'Price', 'Quantity', 'Total']
    return (
        <div>
            <section className="breadcrumbs-wrapper">
                <div className="container">
                    <div className='row'>
                        <h1>Cart</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <Link to='/' className="breadcrumb-item"><li >Home</li></Link>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </nav>
                        <Outlet />
                    </div>
                    <div className="img">
                        <img src={brdscrbImg} alt="" />
                    </div>
                </div>
            </section>
            <div className="cart-table">
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            {headers.map((header, index) => { return <th key={index}><span>{header}</span></th> })}
                        </tr>
                    </thead>
                    <tbody className="theme-body">
                        <tr>
                            <th scope="row">
                                &nbsp;
                            </th>
                            <td>
                                <div className="item-product">
                                    <span className="img-wrap"><img src="assets/images/category/category_img_1.png" alt="" /></span>
                                    <span>New color Lipstick</span>
                                </div>
                            </td>
                            <td><strong>$120.00</strong></td>
                            <td>
                                <div className="quantity">
                                    <button className="minus-btn" type="button" name="button">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input type="text" name="name" value="0" />
                                    <button className="plus-btn" type="button" name="button">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </td>
                            <td className="text-nowrap"><strong>$120.00</strong> <a href="#" className="cart-delete"><FontAwesomeIcon icon={faTrash} /></a></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Cart