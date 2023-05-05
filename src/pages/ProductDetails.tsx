import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../redux/actions/productActions";
import { successPopup, errorPopup } from "../components/Popup";
import { nanoid } from "nanoid";
import LoadingCircle from "../components/LoadingCircle";
import { useNavigate } from "react-router-dom";
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { IRootState } from "../redux/store";

interface Prop {
  token: string | null;
}

const ProductDetails = ({ token }: Prop) => {
  const [productQty, setProductQty] = useState(1);
  const cartShown = useSelector((state: IRootState) => state.cart.cartShown);
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useFetchSingleProduct(productId);
  const productData = data?.data;

  const addToCart = (e: React.FormEvent) => {
    e.preventDefault();

    if (token) {
      dispatch(
        addProductToCart({
          ...productData,
          productQty,
          id: nanoid(),
          productTotalPrice: productData.price * productQty,
        })
      );
      successPopup("Product added to cart");
      setProductQty(1);
    } else {
      navigate("/login");
      errorPopup("You must log in first.");
    }
  };

  if (error instanceof Error) {
    return <h2 className="error">{error.message}</h2>;
  }
  if (isLoading) return <LoadingCircle />;

  let optionsValues = [];
  for (let i = 1; i <= 30; i++) {
    optionsValues.push(i);
  }

  const ratingStyles = (rating: number) => {
    if (rating > 0 && rating < 1) {
      return { background: "#ff4545" };
    } else if (rating >= 1 && rating < 2) {
      return { background: "#ffa534" };
    } else if (rating >= 2 && rating < 3) {
      return { background: "#ffe234", color: "#000" };
    } else if (rating >= 3 && rating < 4) {
      return { background: "#b7dd29", color: "#000" };
    } else if (rating >= 4 && rating < 5) {
      return { background: "#57e32c" };
    }
  };

  return (
    <>
      {cartShown === false && (
        <div className="container details-container">
          {productData && (
            <div className="single-product">
              <div
                className="sp-img"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={productData.image} alt={productData.title} />
              </div>
              <div
                className="sp-info"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h2 className="sp-title">{productData.title}</h2>
                <div className="price_rating">
                  <p className="sp-price">
                    ${productData.price}
                    <span className="dot1"></span>
                    <span className="dot2"></span>
                  </p>
                  <p
                    className="rating"
                    style={ratingStyles(productData.rating.rate)}
                  >
                    ★ {productData.rating.rate} out of{" "}
                    {productData.rating.count} rates.
                  </p>
                </div>
                <p className="sp-category">
                  {productData.category.toUpperCase()}
                </p>
                <p className="sp-desc">{productData.description}</p>
                <form className="add-to-cart-form">
                  <div className="qty-input">
                    <label>Quantity:</label>
                    <select
                      className="select-qty"
                      value={productQty}
                      onChange={(e) => setProductQty(Number(e.target.value))}
                    >
                      {optionsValues.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button onClick={addToCart} className="sp-btn">
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetails;
