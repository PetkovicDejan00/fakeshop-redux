import { actionTypes } from "../constants/actionTypes";
import { IProduct, IAction } from "../../common/types";

const localData = localStorage.getItem('cartProducts');

const initialState = {
    cartShown: false,
    cartProducts: localData ? JSON.parse(localData) : []
}

export const cartReducer = (state = initialState, action:IAction) => {
    switch(action.type) {
        case actionTypes.SHOW_CART:
            return {...state, cartShown: true}
        case actionTypes.REMOVE_CART:
            return {...state, cartShown: false}
        case actionTypes.ADD_PRODUCT_TO_CART:
            console.log(action.payload)
            return {...state, cartProducts: [...state.cartProducts, action.payload]}
        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            const filteredProducts = state.cartProducts.filter((product:IProduct) => product.id !== action.payloadID)
            return {...state, cartProducts: [...filteredProducts]}
        case actionTypes.REMOVE_ALL_PRODUCTS_FROM_CART:
            return {...state, cartProducts: []}
        default:
            return state
    }
} 