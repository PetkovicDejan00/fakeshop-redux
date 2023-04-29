import { actionTypes } from "../constants/actionTypes";
import { IProduct } from "../../common/types";

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
export const addProductToCart = (product: IProduct) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: product
    }
}
export const removeAllProductsFromCart = () => {
    return {
        type: actionTypes.REMOVE_ALL_PRODUCTS_FROM_CART,
    }
}
export const removeProductFromCart = (id: string) => {
    return {
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        payloadID: id
    }
}

