import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import inv from "../../images/12.png"
import Battery from "../../images/11.png"
const ProductsIntro = () => {
    return (
        <section className='product-intro'>
            <Row style={{ height: "100%" }} >
                <Col className='d-flex flex-column align-items-start justify-content-between gap-3 p-5' sm={6}>
                    <h1 className='main-color'>MTU Batteries</h1>
                    <h2 className='primery-color'>Your Ultimate Battery Resource</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col className='  d-flex flex-column align-items-center justify-content-center p-2' sm={6}>
                    <div >
                        <img className='product-intro-img' src={inv} alt='product-intro-img' />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default ProductsIntro
