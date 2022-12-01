import { ADD_TO_CART, CART_TOTAL, CART_TOTALS, DECREASE_QUANTITY, INCREASE_QUANTITY, PRODUCTS_LIST, PRODUCT_LIST, REMOVE_CART_PRODUCT, SEARCH } from "./productTypes";

export const loadProductList = (item = null) => {
    return {
        type: item ? SEARCH : PRODUCT_LIST,
        payload: PRODUCTS_LIST,
        item: item
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

export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload: id
    }
}

export const loadCartTotals = () => {
    return {
        type: CART_TOTAL,
        payload: CART_TOTALS
    }
}