import { apiClient } from "../../services/apiConfig";
import { ADD_TO_CART, ADD_TO_WISHLIST, BILLING_DETAILS, CART_TOTAL, CART_TOTALS, DECREASE_QUANTITY, FETCHED_PRODUCT_LIST, INCREASE_QUANTITY, LOADING, LOADING_FAILED, LOADING_SUCCESS, LOGGEDIN, LOGGED_OUT, LOGIN_USER, PRODUCTS_LIST, PRODUCT_LIST, REMOVE_CART_PRODUCT, REMOVE_FROM_WISHLIST, SEARCH, USER, WISHLIST } from "./productTypes";
import { PATH } from './../../services/apiConstants'
import axiosClient from "../../utils/httpClient";


export const loadProductList = (item = null, isFetched = false) => {
    return {
        type: item ? SEARCH : PRODUCT_LIST,
        payload: PRODUCTS_LIST,
        item: item,
        isFetched: isFetched
    }
}

export const loadFetchedProductList = (item = null) => {
    return {
        type: FETCHED_PRODUCT_LIST,
        payload: FETCHED_PRODUCT_LIST,
        item: item,
        isFetched: true
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

export const userInfo = (data) => {
    return {
        type: USER,
        payload: data
    }
}

export const billingDetails = (data) => {
    return {
        type: BILLING_DETAILS,
        payload: data
    }
}

export const userRegistration = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        axiosClient({
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
        axiosClient({
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

export const userDetails = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loadingApi())
        axiosClient({
            method: 'GET',
            url: PATH.auth.userDetails,
            data
        }).then(response => {
            dispatch(loadingApiSuccess())
            dispatch(userInfo(response.data))
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
        axiosClient({
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

// export const updateCart = (data, id) => (dispatch) => {
//     return new Promise((resolve, reject) => {
//         dispatch(loadingApi())
//         apiClient({
//             method: 'PUT',
//             url: `${PATH.auth.cart}/${id}`,
//             data
//         }).then(response => {
//             dispatch(loadingApiSuccess());
//             resolve(response)
//         }).catch(error => {
//             dispatch(loadingApiFailed())
//             reject(error)
//         })
//     })
// }