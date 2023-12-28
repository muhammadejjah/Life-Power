import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductsIntro from '../components/products/ProductsIntro'
import ProductsShow from '../components/products/ProductsShow'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getSubCategory } from '../state/SubCategorySlice'
import Err from '../components/Err'
const Products = () => {
  const { pathname } = useLocation()
  const { subid } = useParams()
  const { error, subCategory } = useSelector(state => state.SubCategorySlice)
  const dispatch = useDispatch()

  useEffect(() => {
    if (+subid !== +subCategory.subcategory_id) {
      dispatch(getSubCategory(subid))
    }
  }, [pathname])

  return (
    <Container>
      <div style={{ minHeight: "100vh" }}>
        <Err error={error}>
          <ProductsIntro image={subCategory.subcategory_image} />
          <ProductsShow />
        </Err>
      </div>
    </Container>
  )
}

export default Products
