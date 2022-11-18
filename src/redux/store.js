import { legacy_createStore as createStore } from "redux";
import productsReducer from "./products/productReducer";

const store = createStore(productsReducer);
export default store;