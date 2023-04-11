import React from 'react'
import { nanoid } from 'nanoid'
import removeIcon from '../assets/icons/remove-icon.png'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../redux/actions/productActions'
import { useSelector } from 'react-redux'
import { successPopup } from './Popup'

const CartProductsComponent = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()

    const handleRemoveProductFromCart = (id) => {
        dispatch(removeProductFromCart(id))
        successPopup('Product removed from cart.')
    }

    return (
        cartProducts?.map((product) => {
        const {id, title, price, category, image, productQty: qty} = product
        return (
            <div className="cart-element" key={nanoid()} data-aos="flip-up">
                <div className="cart-element-image">
                    <img src={image} alt={title} />
                </div>
                <div className="cart-element-info">
                    <p>{category}</p>
                    <h3 className="cart-el-title">{title}</h3>
                    <p className="cart-el-price">{qty} X ${price} = ${(qty*price).toFixed(2)}</p>
                </div>
                <img 
                    className="remove-button" 
                    src={removeIcon}
                    title="Remove product from cart"
                    onClick={() => handleRemoveProductFromCart(id)}
                />
            </div>
        )
    }))
}

export default CartProductsComponent