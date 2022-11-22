import { legacy_createStore as createStore } from "redux";
import productsReducer from "./products/productReducer";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";

const store = createStore(productsReducer, applyMiddleware(thunk));
export default store;