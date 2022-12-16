import shopImg1 from '../../assets/images/shop/shop_img_1.png';
import shopImgOver1 from '../../assets/images/shop/shop_img_1_over.png';
import shopImg2 from '../../assets/images/shop/shop_img_2.png';
import shopImgOver2 from '../../assets/images/shop/shop_img_2_over.png';
import shopImg3 from '../../assets/images/shop/shop_img_3.png';
import shopImgOver3 from '../../assets/images/shop/shop_img_3_over.png';
import shopImg4 from '../../assets/images/shop/shop_img_4.png';
import shopImgOver4 from '../../assets/images/shop/shop_img_4_over.png';
import shopImg5 from '../../assets/images/shop/shop_img_5.png';
import shopImgOver5 from '../../assets/images/shop/shop_img_5_over.png';
import shopImg6 from '../../assets/images/shop/shop_img_6.png';
import shopImgOver6 from '../../assets/images/shop/shop_img_6_over.png';
import shopImg7 from '../../assets/images/shop/shop_img_7.png';
import shopImgOver7 from '../../assets/images/shop/shop_img_7_over.png';
import shopImg8 from '../../assets/images/shop/shop_img_8.png';
import shopImgOver8 from '../../assets/images/shop/shop_img_8_over.png';

export const PRODUCTS_LIST = [
    { id: 1, image: shopImg1, over: shopImgOver1, name: 'Girls Top', price: 160, actualPrice: 260, quantity: 1 },
    { id: 2, image: shopImg2, over: shopImgOver2, name: 'Girls Purse', price: 130, actualPrice: 200, quantity: 1 },
    { id: 3, image: shopImg3, over: shopImgOver3, name: 'Girls Shoes', price: 300, actualPrice: 460, quantity: 1 },
    { id: 4, image: shopImg4, over: shopImgOver4, name: 'Girls Jeans', price: 200, actualPrice: 260, quantity: 1 },
    { id: 5, image: shopImg5, over: shopImgOver5, name: 'Neckless', price: 750, actualPrice: 1000, quantity: 1 },
    { id: 6, image: shopImg6, over: shopImgOver6, name: 'Makeup-Kit', price: 200, actualPrice: 360, quantity: 1 },
    { id: 7, image: shopImg7, over: shopImgOver7, name: 'Lipstick', price: 120, actualPrice: 160, quantity: 1 },
    { id: 8, image: shopImg8, over: shopImgOver8, name: 'Perfumes for Girls', price: 100, actualPrice: 210, quantity: 1 }
];

export const CART_TOTALS = [
    { id: 1, name: 'Sub-Total', cost: 0 },
    { id: 2, name: 'Shipping', cost: 0 },
    { id: 3, name: 'Tax (10%)', cost: 0 }
]

export const PRODUCT_LIST = 'PRODUCT_LIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CART_LIST = 'CART_LIST';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const CART_TOTAL = 'CART_TOTAL'
export const SEARCH = 'SEARCH'
export const LOGIN_USER = 'LOGIN_USER'
export const LOADING = 'LOADING'
export const LOADING_SUCCESS = 'LOADING_SUCCESS'
export const LOADING_FAILED = 'LOADING_FAILED'
export const LOGGEDIN = 'LOGGEDIN'
export const LOGGED_OUT = 'LOGGED_OUT'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
export const FETCHED_PRODUCT_LIST = 'FETCHED_PRODUCT_LIST';