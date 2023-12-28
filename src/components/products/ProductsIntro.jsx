import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { BaseURL } from '../../Api/Api'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
const ProductsIntro = ({ image }) => {
    const { subCategory, loading } = useSelector(state => state.SubCategorySlice)
    return (
        <section className='product-intro mb-5'>
            <Row style={{ height: "100%" }} >
                <Col className='d-flex flex-column align-items-start justify-content-between gap-3 p-5' sm={6}>
                    <h1 className='main-color'>{subCategory.subcategory_title}</h1>
                    <h2 className='primery-color'>{subCategory.subcategory_subtitle}</h2>
                    <p>{subCategory.subcategory_description}</p>
                </Col>
                <Col className='  d-flex flex-column align-items-center justify-content-center p-2' sm={6}>
                    <Loading loading={loading}>
                        <div >
                            <img className='product-intro-img' src={`${BaseURL}${image}`} alt='product-intro-img' />
                        </div>
                    </Loading>
                </Col>
            </Row>
        </section>
    )
}

export default ProductsIntro
