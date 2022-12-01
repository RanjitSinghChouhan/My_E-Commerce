import { ADD_TO_CART, CART_TOTAL, DECREASE_QUANTITY, INCREASE_QUANTITY, PRODUCT_LIST, REMOVE_CART_PRODUCT, SEARCH } from "./productTypes";


const initialState = {
    products: [],
    cartList: [],
    cartTotal: []
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
            alert(`${product.name} is Successfully Added to cart`)
            product.quantity = 1
            return {
                ...state,
                cartList: state.cartList.includes(product) ? [...state.cartList] : [...state.cartList, product]
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cartList: state.cartList.filter(product => product.id !== action.payload)
            }
        case INCREASE_QUANTITY:
            const prdct = state.cartList.find(product => product.id === action.payload)
            prdct.quantity = prdct.quantity + 1
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
            action.payload[1].cost = state.cartList.length ? 40 : 0
            action.payload[2].cost = subtotal * 0.1
            return {
                ...state,
                cartTotal: action.payload
            }
        default: return state
    }
}

export default productsReducer