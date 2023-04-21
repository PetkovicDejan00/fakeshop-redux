import React, {useState} from 'react'
import { clearFilters, filterProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const categories = [
    "jewelery",
    "men's clothing",
    "electronics",
    "women's clothing",
]

const FilterProducts = () => {
    const dispatch = useDispatch()
    const [filtersShown, setFiltersShown] = useState(false)
    const filterCategory = useSelector((state) => state.allProducts.filterCategory)

    const handleFilter = (category) => {
        dispatch(filterProducts(category))
    }
    const handleClearFilters = () => {
        dispatch(clearFilters())
    }

  return (
    <div className="filters-container">
        <p 
            onClick={() => setFiltersShown(prevValue => !prevValue)} 
            className="filter-toggle">
                {`${filtersShown ? 'Hide' : 'Show'}`} filters
        </p>
        {filtersShown &&
            <div className="filter-btns" data-aos="flip-up">
                {categories.map((category, index) => {
                    return (
                        <button
                            key={index} 
                            onClick={() => handleFilter(category)}
                            className={`filter-btn ${filterCategory === category && 'active'}`}>
                                {category}
                        </button>
                    )
                })}
            {filterCategory && 
                <a 
                className="clear-filters"
                onClick={handleClearFilters}>
                    clear filters
                </a>
            }
            </div>
        }
    </div>
  )
}

export default FilterProducts