import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const activeProduct = (product) => {
    return {
        type: actionTypes.ACTIVE_PRODUCT,
        payload: product
    }
}

export const removeActiveProduct = () => {
    return {
        type: actionTypes.REMOVE_ACTIVE_PRODUCT
    }
}