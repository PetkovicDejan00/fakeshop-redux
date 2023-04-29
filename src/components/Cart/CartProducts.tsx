import { nanoid } from 'nanoid'
import removeIcon from '../../assets/icons/remove-icon.png'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../redux/actions/productActions'
import { useSelector } from 'react-redux'
import { successPopup } from '../Popup'
import { IProduct } from '../../common/types'
import { IRootState } from '../../redux/store'

const CartProducts = () => {
    const cartProducts = useSelector((state: IRootState) => state.cart.cartProducts)
    const dispatch = useDispatch()

    const handleRemoveProductFromCart = (id: string) => {
        dispatch(removeProductFromCart(id))
        successPopup('Product removed from cart.')
    }

    return (
        cartProducts.map((product: IProduct) => {
        return (
            <div className="cart-element" key={nanoid()} data-aos="flip-up">
                <div className="cart-element-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="cart-element-info">
                    <p className="cart-el-category">{product.category}</p>
                    <h3 className="cart-el-title">{product.title}</h3>
                    <p className="cart-el-price">
                        {product.productQty} X ${product.price} = ${(product.productQty*product.price).toFixed(2)}
                    </p>
                </div>
                <img 
                    className="remove-button" 
                    src={removeIcon}
                    title="Remove product from cart"
                    onClick={() => handleRemoveProductFromCart(product.id)}
                />
            </div>
        )
    }))
}

export default CartProducts