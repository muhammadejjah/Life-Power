import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import CardsContainer from '../Sub Categories Page/CardsContainer'
import MostPopular from './MostPopular'

const ProductsShow = () => {
  return (
    <Row className='mt-4'>
      <Col sm={12} lg={9}>
      <CardsContainer data={[1,1,1,1,1]}/>
      </Col>
      <Col sm={12} lg={3}>
      <MostPopular/>
      </Col>
    </Row>
  )
}

export default ProductsShow
