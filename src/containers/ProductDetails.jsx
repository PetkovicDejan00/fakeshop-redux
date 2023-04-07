import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { activeProduct, removeActiveProduct } from '../redux/actions/productActions'

const ProductDetails = () => {
  const [productError, setProductError] = useState('')
  const product = useSelector(state => state.product)
  const {category, price, title, description, rating, image} = product
  const {productId} = useParams()
  const dispatch = useDispatch()

  const fetchSingleProduct = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => setProductError(err.message))

    dispatch(activeProduct(response.data))
  }

  useEffect(() => {
    productId && productId !== "" && fetchSingleProduct()
    return () => {
      dispatch(removeActiveProduct())
    }
  }, [productId])

  if (productError) {
    return <h2 className="error">{productError}</h2>
  }

  return (
    <div className="container">
      {Object.keys(product).length === 0 
        ? <h1 className="loading">Loading...</h1> 
        : <div className="single-product">
            <div className="sp-img">
              <img src={image} alt={title} />
            </div>
            <div className="sp-info">
              <h2 className="sp-title">{title}</h2>
              <div className="price_rating">
                <p className="sp-price">${price} 
                  <span className="dot1"></span>
                  <span className="dot2"></span>
                </p>
                <p className="rating">
                  ★ {rating.rate} out of {rating.count} rates.
                </p>
              </div>
              <p className="sp-category">{category}</p>
              <p className="sp-desc">{description}</p>
              <button className="sp-btn">Add to cart</button>
            </div>
          </div>
      }
    </div>
  )
}

export default ProductDetails