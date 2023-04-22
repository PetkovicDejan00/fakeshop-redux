import { actionTypes } from "../constants/actionTypes";

export const showCart = () => {
    return {
        type: actionTypes.SHOW_CART
    }
}
export const removeCart = () => {
    return {
        type: actionTypes.REMOVE_CART
    }
}
export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: product
    }
}
export const removeAllProductsFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_ALL_PRODUCTS_FROM_CART,
        payload: product
    }
}
export const removeProductFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: product
    }
}

