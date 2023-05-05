import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../common/types";
import {
  removeAllProductsFromCart,
  removeCart,
} from "../../redux/actions/productActions";
import { IRootState } from "../../redux/store";
import { successPopup } from "../Popup";
import CartProducts from "./CartProducts";

const Cart = () => {
  const cartShown: boolean = useSelector(
    (state: IRootState) => state.cart.cartShown
  );
  const cartProducts: IProduct[] = useSelector(
    (state: IRootState) => state.cart.cartProducts
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleShowAllProducts = () => {
    dispatch(removeCart());
    navigate(".");
  };

  const handleEmptyCart = () => {
    dispatch(removeAllProductsFromCart());
    window.scrollTo(0, 0);
    successPopup("All products removed from cart.");
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartProducts.reduce((total, currentVal) => {
      return total + currentVal.price;
    }, 0);

    return alert(`
        Since this is only Front-end demo version of an e-Commerce website, checkout is not included. 
        However, I've got something for You. Your bill is $${totalPrice.toFixed(2)}.`
    );
  };

  return (
    <div className="container cart-container">
      <section className={`shopping-cart ${cartShown ? "" : "disabled"}`}>
        <CartProducts />
        {cartProducts.length > 0 ? (
          <div className="cart-btns">
            <button
              onClick={() => calculateTotalPrice()}
              className="cart-checkout-btn"
            >
              Proceed to checkout
            </button>
            <button
              className="cart-remove-all-btn"
              onClick={() => handleEmptyCart()}
            >
              Remove all products
            </button>
          </div>
        ) : (
          <div className="empty-cart-message">
            <h2>Cart is empty.</h2>
            <button
              className="check-products-btn"
              onClick={handleShowAllProducts}
            >
              Check all products
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
