import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)

    const renderProducts = products?.map((product) => {
        const {id, category, image, price, title} = product
        return (
            <article key={id} className="card">
                <Link to={`/product/${id}`}>
                    <div className="card-img">
                        <img src={image} alt={title} />
                    </div>
                    <div className="card-info">
                        <h4 className="title">{title}</h4>
                        <p className="price">$ {price}</p>
                        <p className="category">{category}</p>
                    </div>
                </Link>
            </article>
        )
    })
    
  return <>{renderProducts}</>
}

export default ProductComponent