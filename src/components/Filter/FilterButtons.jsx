import React, {useEffect, useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCategories } from '../../hooks/useCategories'

const FilterButtons = () => {
    const [filtersShown, setFiltersShown] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const {category} = useParams()

    const {data: categories} = useCategories()

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    useEffect(() => {
        if (windowSize >= 768) {
            setFiltersShown(true)
        }
    }, [windowSize])

    
  return (
    <div className="filters-container container">
        {windowSize <= 768 &&
        <p 
            onClick={() => setFiltersShown(prevValue => !prevValue)} 
            className="filter-toggle">
                {`${filtersShown ? 'Hide' : 'Show'}`} filters
        </p>
        }
        {filtersShown &&
        <div className="filter-btns" data-aos="flip-up">
            {categories?.data.map((category) => (
            <NavLink
                key={category}
                to={`/category/${category}`}
                className="filter-btn">
                    {category}
            </NavLink>
            ))}
            {category && 
            <Link to="/" className="clear-filters">
                clear filters
            </Link>}
        </div>
        }
    </div>
  )
}

export default FilterButtons