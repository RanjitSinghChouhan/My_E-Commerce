import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import banner1 from '../../../../assets/images/banner_bg_1.png'
import { faAngleRight, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import './NewProducts.css';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { loadAddToCart, loadProductList } from '../../../../redux/products/productsAction';


function NewProducts({ productList, loadProductsList, loadAddToCart }) {
    useEffect(() => {
        loadProductsList()
    })
    return (
        <div className='new-products-container'>
            <div className="banner-highlights banner-highlights-img-1">
                <div className="img">
                    <img src={banner1} alt="" />
                </div>
                <div className="text-content">
                    <h2>New Products</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form o</p>
                    <a href="#" className="btn">COMPRA AHORA <FontAwesomeIcon icon={faAngleRight} /></a>
                </div>
            </div>
            <div className="shop-product-list">

                {productList.map((product, index) => {
                    return <div className="shop-product-wrap" key={index}>
                        <div className="img">
                            <a href="product-details.html">
                                <img src={product.image} className="non-over" alt="" />
                                <img src={product.over} className="img-over" alt="" />
                            </a>
                        </div>
                        <h3>
                            <a href="product-details.html">{product.name}</a>
                        </h3>
                        <div className="content">
                            <div>
                                <div className="price">
                                    <span className="deal-price">${product.price}</span> - <span className="discount">${product.actualPrice}</span>
                                </div>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                            </div>
                            <button onClick={() => loadAddToCart(product.id)} className="icon-bag" data-tip="Add to Cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>
                        <ReactTooltip />
                    </div>
                })}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        productList: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadProductsList: () => dispatch(loadProductList()),
        loadAddToCart: (id) => dispatch(loadAddToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts)