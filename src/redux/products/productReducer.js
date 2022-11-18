import { ADD_TO_CART, INCREASE_QUANTITY, PRODUCT_LIST, REMOVE_CART_PRODUCT } from "./productTypes";


const initialState = {
    products: [],
    cartList: []
}

const productsReducer = (state = initialState, action) => {
    console.log(state, 'state', action, 'action');
    switch (action.type) {
        case PRODUCT_LIST: return {
            ...state,
            products: action.payload
        }
        case ADD_TO_CART:
            const product = action.list.find(product => product.id === action.payload)
            return {
                ...state,
                cartList: [...state.cartList, product]
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cartList: state.cartList.filter(product => product.id !== action.payload)
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartList: state.cartList.map(product => (product.id === action.payload) ? product.quantity = product.quantity + 1 : product.quantity)
            }
        default: return state
    }
}

export default productsReducer