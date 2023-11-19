import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductBreadcrumb from '../components/product/Breadcrumb'
import ProductInformation from '../components/product/ProductInformation'
import ProductDetalis from '../components/Sub Categories Page/ProductDetalis'

const Product = () => {
    return (
        <Container style={{marginTop:"60px"}}>
            <ProductBreadcrumb/>
            <ProductInformation/>
            <ProductDetalis/>
        </Container>
    )
}

export default Product
