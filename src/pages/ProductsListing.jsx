import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import Products from '../components/Products/Products'
import FilterProducts from '../components/Products/FilterProducts'
import { useSelector } from 'react-redux'

const ProductsListing = () => {
    const [productsError, setProductsError] = useState('')
    const cartShown = useSelector(state => state.cart.cartShown)

    const dispatch = useDispatch()

    const fetchAllProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => setProductsError(err.message))

        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    if (productsError) {
        return <h2 className="error">{productsError}</h2>
    }

  return (
    <>
        {cartShown === false &&
            <div className="container products-container">
                <FilterProducts />
                <div className="product-listing">
                    <Products />
                </div>
            </div>
        }
    </>
  )
}

export default ProductsListing