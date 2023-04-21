import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = () => {
    const allProducts = useSelector((state) => state.allProducts.products)
    const filteredProducts = useSelector((state) => state.allProducts.filteredProducts)
    const filterCategory = useSelector((state) => state.allProducts.filterCategory)
    const products = filterCategory ? filteredProducts : allProducts
    
  return (
    products?.map((product) => {
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
    })
  )
}

export default Products