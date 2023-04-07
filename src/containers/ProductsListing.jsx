import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import ProductComponent from './ProductComponent'

const ProductsListing = () => {
    const [productsError, setProductsError] = useState('')
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
    <div className="product-listing container">
        <ProductComponent />
    </div>
  )
}

export default ProductsListing