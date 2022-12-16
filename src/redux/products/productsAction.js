import { apiClient } from "../../services/apiConfig";
import { ADD_TO_CART, ADD_TO_WISHLIST, CART_TOTAL, CART_TOTALS, DECREASE_QUANTITY, FETCHED_PRODUCT_LIST, INCREASE_QUANTITY, LOADING, LOADING_FAILED, LOADING_SUCCESS, LOGGEDIN, LOGGED_OUT, LOGIN_USER, PRODUCTS_LIST, PRODUCT_LIST, REMOVE_CART_PRODUCT, REMOVE_FROM_WISHLIST, SEARCH, USER, WISHLIST } from "./productTypes";
import { PATH } from './../../services/apiConstants'


export const loadProductList = (item = null) => {
    return {
        type: item ? SEARCH : PRODUCT_LIST,
        payload: PRODUCTS_LIST,
        item: item
    }
}

export const loadFetchedProductList = (item = null) => {
    return {
        type: FETCHED_PRODUCT_LIST,
        payload: FETCHED_PRODUCT_LIST,
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

export const loadAddToWishlist = (id) => {
    return {
        type: ADD_TO_WISHLIST,
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

export const removeWishlistProduct = (id) => {
    return {
        type: REMOVE_FROM_WISHLIST,
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

export const loadingApi = () => {
    return {
        type: LOADING
    }
}

export const loadingApiSuccess = () => {
    return {
        type: LOADING_SUCCESS
    }
}

export const loadingApiFailed = () => {
    return {
        type: LOADING_FAILED
    }
}

export const loggedIn = () => {
    return {
        type: LOGGEDIN
    }
}

export const loggedOut = () => {
    return {
        type: LOGGED_OUT
    }
}


export const userRegistration = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        apiClient({
            method: 'POST',
            url: PATH.auth.signup,
            data
        }).then((response) => {
            dispatch(loadingApiSuccess())
            resolve(response);
        }).catch((error) => {
            dispatch(loadingApiFailed())
            reject(error);
        })
    })
};

export const loginUser = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        apiClient({
            method: 'POST',
            url: PATH.auth.login,
            data
        }).then((response) => {
            dispatch(loadingApiSuccess())
            dispatch(loggedIn())
            resolve(response.data);
        }).catch((error) => {
            dispatch(loadingApiFailed())
            reject(error);
        })
    })
};

export const logoutUser = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        apiClient({
            method: 'POST',
            url: PATH.auth.logout,
            data
        }).then(response => {
            dispatch(loadingApiSuccess())
            dispatch(loggedOut())
            resolve(response.data)
        }).catch(error => {
            dispatch(loadingApiFailed())
            reject(error)
        })
    })
}

export const addToUserCartApi = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        console.log(data, "actioncart");
        apiClient({
            method: 'POST',
            url: PATH.auth.cart,
            data
        }).then(response => {
            dispatch(loadingApiSuccess())
            // dispatch(loadAddToCart(data))
            resolve(response)
        }).catch(error => {
            dispatch(loadingApiFailed())
            reject(error)
        })
    })
}

export const fetchProductList = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        apiClient({
            method: 'GET',
            url: PATH.auth.products,
            data
        }).then(response => {
            dispatch(loadingApiSuccess());
            dispatch(loadFetchedProductList(response.data.data))
            resolve(response)
        }).catch(error => {
            dispatch(loadingApiFailed())
            reject(error)
        })
    })
}