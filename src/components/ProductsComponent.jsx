import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const allProducts = useSelector((state) => state.allProducts.products)
    const filteredProducts = useSelector((state) => state.allProducts.filteredProducts)
    const filterCategory = useSelector((state) => state.allProducts.filterCategory)
    const products = filterCategory ? filteredProducts : allProducts
    
  return (
    products?.map((product) => {
        const {id, category, image, price, title} = product
        return (
            <article key={id} className="card">
                <Link to={`/product/${id}`} data-aos="zoom-in">
                    <div className="card-img">
                        <img src={image} alt={title} />
                    </div>
                    <div className="card-info">
                        <h4 className="title">{title}</h4>
                        <p className="price">${price}</p>
                        <p className="category">{category}</p>
                    </div>
                </Link>
            </article>
        )
    })
  )
}

export default ProductComponent