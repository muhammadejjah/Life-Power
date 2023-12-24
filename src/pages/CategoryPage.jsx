import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import FirstSection from '../components/Category Page/FirstSection'
import CardsContainer from '../components/Category Page/CardsContainer'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../state/CategorySlice'
import Err from '../components/Err'

const CategoryPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { category, loading, error } = useSelector(state => state.CategorySlice)
  useEffect(() => {
    if (id != category.category_id) {
      dispatch(getCategory(id))
    }
  }, [pathname])
  
  return (
    <Container style={{ marginTop: "75px" }}>
      <Err error={error}>
        <FirstSection image={category.category_image} />
        <h1 className='text-center main-color mb-5'>{category.category_name}</h1>
        <CardsContainer loading={loading} role={"subCategory"} data={category.subcategories} />
      </Err>
    </Container>

  )
}

export default CategoryPage
