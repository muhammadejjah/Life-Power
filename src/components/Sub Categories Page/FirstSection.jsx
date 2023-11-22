import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import logo from "../../images/logo2.png"
import battery from "../../images/11.png"
import inv from "../../images/12.png"

const FirstSection = () => {
    return (
        <section className='mb-5'> 
            <Row  >
                <Col lg={6} sm={12} className='d-flex align-items-lg-stert align-items-xs-center justify-content-center gap-3 flex-column'>
                    <h1 className='main-color display-4 et'>Everything</h1>
                    <h1 className='primery-color display-4'>Y<span><img width={45} src={logo} alt='O' />u</span></h1>
                    <h1 className='main-color display-4'>Need</h1>
                </Col>
                <Col lg={6} sm={12} className=' d-flex align-items-center justify-content-center  '>
                    <div className='category-img'><img src={battery} alt="battery" /></div>
                </Col>
            </Row>
        </section>
    )
}

export default FirstSection
