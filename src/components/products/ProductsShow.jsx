import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import CardsContainer from '../Sub Categories Page/CardsContainer'
import MostPopular from './MostPopular'
import { useSelector } from 'react-redux'
const ProductsShow = () => {
  const { subCategory, loading } = useSelector(state => state.SubCategorySlice)

  return (
    <Row className='mt-4'>
      <Col sm={12} lg={9}>
        <CardsContainer loading={loading} data={subCategory.products} />
      </Col>
      <Col sm={12} lg={3}>
        <MostPopular />
      </Col>
    </Row>
  )
}

export default ProductsShow
