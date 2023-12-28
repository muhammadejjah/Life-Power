import React, { Fragment, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductBreadcrumb from '../components/product/Breadcrumb'
import ProductInformation from '../components/product/ProductInformation'
import ProductDetalis from '../components/product/ProductDetalis'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../state/ProductSlice'
import Loading from '../components/Loading'
import Err from '../components/Err'

const Product = () => {
    const dispatch = useDispatch()
    const { productid } = useParams()
    const { error, loading, product } = useSelector(state => state.ProductSlice)

    useEffect(() => {
        dispatch(getProduct(+productid))
    }, [productid])

    return (
        <Container style={{ marginTop: "60px" }}>
            <div style={{ minHeight: "70vh", position: "relative" }}>
                <Loading loading={loading}>
                    <Err error={error}>
                        <ProductBreadcrumb />
                        <ProductInformation />
                        <ProductDetalis details={product.details} desc={product.description} />
                    </Err>
                </Loading>
            </div>
        </Container>
    )
}

export default Product
