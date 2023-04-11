import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/icons/cart.png'
import { useSelector } from 'react-redux'
import { removeCart, showCart } from '../redux/actions/productActions'
import { useDispatch } from 'react-redux'

const Header = () => {
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleCartRemoval = () => {
      dispatch(removeCart())
       window.scrollTo(0,0);
  }

  const toggleCart = () => {
    if (cartState.cartShown === true) {
       handleCartRemoval()
    } 
    else if (cartState.cartShown === false) {
      dispatch(showCart())
    }
  }

  return (
    <nav className="header">
      <div className='container'>
        <Link className="nav-logo" onClick={() => handleCartRemoval()} title="Home page" to=".">FakeShop</Link>
        <div className='cart-frame' onClick={() => toggleCart()}>
          <img className="cart-icon-img" src={cart} alt="Cart" title="cart"/>
          <span className="cart-icon-items">{cartState.cartProducts.length}</span>
        </div>
      </div>
    </nav>
  )
}

export default Header