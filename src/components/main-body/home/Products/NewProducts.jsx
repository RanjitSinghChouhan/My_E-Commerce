import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import banner1 from '../../../../assets/images/banner_bg_1.png'
import { faAngleRight, faShoppingBag, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import shopImg1 from '../../../../assets/images/shop/shop_img_1.png';
import shopImgOver1 from '../../../../assets/images/shop/shop_img_1_over.png';
import shopImg2 from '../../../../assets/images/shop/shop_img_2.png';
import shopImgOver2 from '../../../../assets/images/shop/shop_img_2_over.png';
import shopImg3 from '../../../../assets/images/shop/shop_img_3.png';
import shopImgOver3 from '../../../../assets/images/shop/shop_img_3_over.png';
import shopImg4 from '../../../../assets/images/shop/shop_img_4.png';
import shopImgOver4 from '../../../../assets/images/shop/shop_img_4_over.png';
import shopImg5 from '../../../../assets/images/shop/shop_img_5.png';
import shopImgOver5 from '../../../../assets/images/shop/shop_img_5_over.png';
import shopImg6 from '../../../../assets/images/shop/shop_img_6.png';
import shopImgOver6 from '../../../../assets/images/shop/shop_img_6_over.png';
import shopImg7 from '../../../../assets/images/shop/shop_img_7.png';
import shopImgOver7 from '../../../../assets/images/shop/shop_img_7_over.png';
import shopImg8 from '../../../../assets/images/shop/shop_img_8.png';
import shopImgOver8 from '../../../../assets/images/shop/shop_img_8_over.png';
import './NewProducts.css';
import ReactTooltip from 'react-tooltip';
function NewProducts() {
    const products = [
        { image: shopImg1, over: shopImgOver1, name: 'Girls Top', price: 160, actualPrice: 260 },
        { image: shopImg2, over: shopImgOver2, name: 'Girls Purse', price: 130, actualPrice: 200 },
        { image: shopImg3, over: shopImgOver3, name: 'Girls Shoes', price: 300, actualPrice: 460 },
        { image: shopImg4, over: shopImgOver4, name: 'Girls Jeans', price: 200, actualPrice: 260 },
        { image: shopImg5, over: shopImgOver5, name: 'Neckless', price: 750, actualPrice: 1000 },
        { image: shopImg6, over: shopImgOver6, name: 'Makeup-Kit', price: 200, actualPrice: 360 },
        { image: shopImg7, over: shopImgOver7, name: 'Lipstick', price: 120, actualPrice: 160 },
        { image: shopImg8, over: shopImgOver8, name: 'Perfumes for Girls', price: 100, actualPrice: 210 }]
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

                {products.map((product, index) => {
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
                            <button className="icon-bag" data-tip="Add to Cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>
                    </div>
                })}
            </div>
            <ReactTooltip />
        </div>
    )
}

export default NewProducts