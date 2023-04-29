import FilterButtons from '../Filter/FilterButtons'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <>
        <FilterButtons />
        <Outlet />
    </>
  )
}

export default ProductsLayout