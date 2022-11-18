import { ADD_TO_CART, INCREASE_QUANTITY, PRODUCTS_LIST, PRODUCT_LIST, REMOVE_CART_PRODUCT } from "./productTypes";

export const loadProductList = () => {
    return {
        type: PRODUCT_LIST,
        payload: PRODUCTS_LIST
    }
}

export const loadAddToCart = (id) => {
    return {
        type: ADD_TO_CART,
        list: PRODUCTS_LIST,
        payload: id
    }
}

export const removeCartProduct = (id) => {
    return {
        type: REMOVE_CART_PRODUCT,
        payload: id
    }
}

export const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}