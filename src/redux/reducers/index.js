import { productsReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    user: userReducer
})