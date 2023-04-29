import { useFilterByCategory } from '../../hooks/useFilterByCategory'
import { Link, useParams } from 'react-router-dom'
import LoadingCircle from '../LoadingCircle'
import { useSelector } from 'react-redux'
import { IProduct } from '../../common/types'
import { IRootState } from '../../redux/store'

const FilteredProducts = () => {
  const {category} = useParams()
  const cartShown = useSelector((state: IRootState) => state.cart.cartShown)

  const {data: products, isFetching, error} = useFilterByCategory(category)

  if (error instanceof Error) {
    return <h2 className="error">{error.message}</h2>
  }
  if (isFetching) return <LoadingCircle />

  return (
    <>
      {cartShown === false &&
        <div className="container products-container">
        <div className="product-listing">
          {products && products.data.map((product: IProduct) => {
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
      </div>
      }
    </>
  )
}

export default FilteredProducts