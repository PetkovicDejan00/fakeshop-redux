import React from 'react'
import FilterButtons from '../Filter/FilterButtons'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
        <FilterButtons />
        <Outlet />
    </div>
  )
}

export default ProductsLayout