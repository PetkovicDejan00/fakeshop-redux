
import { productsReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer
})