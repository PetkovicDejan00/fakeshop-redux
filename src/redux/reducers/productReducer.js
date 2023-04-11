import { actionTypes } from "../constants/actionTypes";

const initialState = {
    filtering: false
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        case actionTypes.FILTER_PRODUCTS:
            let filteredProducts = state.products.filter(product => product.category === action.payload)
            return {...state, filteredProducts: [...filteredProducts], filterCategory: action.payload}
        case actionTypes.CLEAR_FILTERS:
            return {...state, filteredProducts: [], filterCategory: ''}
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ACTIVE_PRODUCT:
            return {...state, ...action.payload}
        case actionTypes.REMOVE_ACTIVE_PRODUCT:
            return {}
        default:
            return state
    }
}
