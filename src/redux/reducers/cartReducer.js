import { actionTypes } from "../constants/actionTypes";

const localData = localStorage.getItem('cartProducts');

const initialState = {
    cartShown: false,
    cartProducts: localData ? JSON.parse(localData) : []
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_CART:
            return {...state, cartShown: true}
        case actionTypes.REMOVE_CART:
            return {...state, cartShown: false}
        case actionTypes.ADD_PRODUCT_TO_CART:
            return {...state, cartProducts: [...state.cartProducts, action.payload]}
        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            const filteredProducts = state.cartProducts.filter(product => product.id !== action.payload)
            return {...state, cartProducts: [...filteredProducts]}
        case actionTypes.REMOVE_ALL_PRODUCTS_FROM_CART:
            return {...state, cartProducts: []}
        default:
            return state
    }
} 