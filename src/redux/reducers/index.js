import { productsReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cart: cartReducer,
})