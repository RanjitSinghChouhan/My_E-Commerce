import { ADD_TO_CART, ADD_TO_WISHLIST, CART_TOTAL, DECREASE_QUANTITY, INCREASE_QUANTITY, LOADING, LOADING_FAILED, LOADING_SUCCESS, LOGGEDIN, LOGGED_OUT, PRODUCT_LIST, REMOVE_CART_PRODUCT, REMOVE_FROM_WISHLIST, SEARCH, USER } from "./productTypes";


const initialState = {
    products: [],
    cartList: [],
    cartTotal: [],
    loading: false,
    isLoggedIn: false,
    userData: {
        details: {},
        cartList: []
    },
    wishList: []
}

const productsReducer = (state = initialState, action) => {
    console.log(state, 'state', action, 'action');
    let subtotal = 0;
    state.cartList.map(item => subtotal += item.price);
    switch (action.type) {
        case SEARCH: return {
            ...state,
            products: action.payload.filter(item => item.name.toLowerCase().search(String(action.item)) !== -1)
        }
        case PRODUCT_LIST: return {
            ...state,
            products: action.payload
        }
        case ADD_TO_CART:
            const product = action.list.find(product => product.id === action.payload)
            // alert(`${product.name} is Successfully Added to cart`)
            product.quantity = 1
            return {
                ...state,
                cartList: state.cartList.includes(product) ? [...state.cartList] : [...state.cartList, product],
                userData: {
                    ...state.userData,
                    cartList: state.cartList.includes(product) ? [...state.cartList] : [...state.cartList, product]
                }
            }
        case ADD_TO_WISHLIST:
            console.log(action.list, 'action.list');
            const productToWishlist = action.list.find(product => product.id === action.payload)
            // alert(`${product.name} is Successfully Added to cart`)
            return {
                ...state,
                wishList: state.wishList.includes(productToWishlist) ? [...state.wishList] : [...state.wishList, productToWishlist],
                // userData: {
                //     ...state.userData,
                //     cartList: state.cartList.includes(productToWishlist) ? [...state.cartList] : [...state.cartList, product]
                // }
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cartList: state.cartList.filter(product => product.id !== action.payload)
            }
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishList: state.wishList.filter(product => product.id !== action.payload)
            }
        case INCREASE_QUANTITY:
            state.cartList.find(product => product.id === action.payload).quantity++
            return {
                ...state,
                cartList: [...state.cartList]
            }
        case DECREASE_QUANTITY:
            const prdctDecrease = state.cartList.find(product => product.id === action.payload)
            prdctDecrease.quantity = prdctDecrease.quantity > 1 ? prdctDecrease.quantity - 1 : 1
            return {
                ...state,
                cartList: [...state.cartList]
            }
        case CART_TOTAL:
            let subtotal = 0;
            state.cartList.map(item => subtotal += item.price * item.quantity)
            action.payload[0].cost = subtotal
            action.payload[1].cost = (state.cartList.length && subtotal <= 500) ? 40 : 0
            action.payload[2].cost = subtotal * 0.1
            return {
                ...state,
                cartTotal: action.payload
            }
        case LOADING: return {
            ...state,
            loading: true
        }
        case LOADING_SUCCESS: return {
            ...state,
            loading: false
        }
        case LOADING_FAILED: return {
            ...state,
            loading: false
        }
        case LOGGEDIN: return {
            ...state,
            isLoggedIn: true
        }
        case LOGGED_OUT: return {
            ...state,
            cartList: [],
            isLoggedIn: false
        }
        case USER: return {
            ...state,
            userData: {
                ...state.userData,
                details: action.payload
            }
        }
        default: return state
    }
}

export default productsReducer