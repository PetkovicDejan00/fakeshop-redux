import React from 'react'
import Filter from '../components/Filter/FilteredProducts'
import { useSelector } from 'react-redux'
import { useFetchAllProducts } from '../hooks/useFetchAllProducts'
import { Link } from 'react-router-dom'
import LoadingCircle from '../components/LoadingCircle'

const ProductsListing = () => {
    const cartShown = useSelector(state => state.cart.cartShown)

    const {data: products, isError, error, isLoading} = useFetchAllProducts()

    if (isError) return <h2 className="error">{error.message}</h2>
    if (isLoading) return <LoadingCircle />

  return (
    <>
        {cartShown === false &&
            <div className="container products-container">
                <div className="product-listing">
                    {products && products.data.map((product) => {
                        return (
                            <article key={product.id} className="card">
                                <Link to={`/product/${product.id}`} data-aos="zoom-in">
                                    <div className="card-img">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="title">{product.title}</h4>
                                        <p className="price">${product.price}</p>
                                        <p className="category">{product.category}</p>
                                    </div>
                                </Link>
                            </article>
                        )
                    })}
                </div>
                <Filter />
            </div>
        }
    </>
  )
}

export default ProductsListing