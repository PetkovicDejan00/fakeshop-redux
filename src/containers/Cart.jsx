import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeAllProductsFromCart, removeCart } from '../redux/actions/productActions'
import { useNavigate } from 'react-router-dom'
import { successPopup } from '../components/Popup'
import CartProductsComponent from '../components/CartProductsComponent'

const Cart = () => {
    const cartShown = useSelector(state => state.cart.cartShown)
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }, [cartProducts])

    
    const handleShowAllProducts = () => {
        dispatch(removeCart())
        navigate('.')
    }

    const handleEmptyCart = () => {
        dispatch(removeAllProductsFromCart())
        window.scrollTo(0,0);
        successPopup('All products removed from cart.')
    }

    const calculateTotalPrice = () => {
        let pricesArray = []
        let totalPrice = 0;
        cartProducts.map((product) => pricesArray.push(product.productTotalPrice))
        for (let i = 0; i < pricesArray.length; i++) {
            totalPrice += pricesArray[i]
        }
        
        return alert(`
        Since this is only Front-end demo version of an e-Commerce website, checkout is not included. 
        However, I've got something for You. Your bill is $${totalPrice.toFixed(2)}.`
        )
    }  

  return (
    <div className='container cart-container'>
        <section className={`shopping-cart ${cartShown ? '' : 'disabled'}`}>
            <CartProductsComponent />
            {cartProducts.length > 0 ?
            <div className="cart-btns">
                <button 
                    onClick={() => calculateTotalPrice()}
                    className="cart-checkout-btn">
                        Proceed to checkout
                </button>
                <button 
                    className="cart-remove-all-btn"
                    onClick={() => handleEmptyCart()}>
                        Remove all products
                </button>
            </div>
            : 
            <div className="empty-cart-message">
                <h2>Cart is empty.</h2>
                <button 
                    className="check-products-btn"
                    onClick={handleShowAllProducts}>
                        Check all products
                </button>
            </div>
            }
        </section>
    </div>
  )
}

export default Cart