import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductsIntro from '../components/products/ProductsIntro'
import ProductsShow from '../components/products/ProductsShow'
const Products = () => {
  return (
    <Container>
      <ProductsIntro/>
      <ProductsShow/>
    </Container>
  )
}

export default Products
