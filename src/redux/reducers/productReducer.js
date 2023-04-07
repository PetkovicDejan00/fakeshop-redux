import { actionTypes } from "../constants/actionTypes";

const initialState = []

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
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