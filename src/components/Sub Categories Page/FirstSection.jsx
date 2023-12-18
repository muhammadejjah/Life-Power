import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import logo from "../../images/logo2.png"
import { BaseURL } from '../../Api/Api'
const FirstSection = ({ image }) => {
    return (
        <section className='mb-5 first-section'>
            <Row  >
                <Col lg={6} xs={6} className=' center  '>
                    <div className='category-img'><img className='rounded' src={`${BaseURL}${image}`} alt="battery" /></div>
                </Col>
                <Col lg={6} xs={6} className='d-flex align-items-stert  justify-content-center gap-3 flex-column'>
                    <h1 className='main-color display-4 et'>Everything</h1>
                    <h1 className='primery-color display-4'>Y<span><img width={45} src={logo} alt='O' />u</span></h1>
                    <h1 className='main-color display-4'>Need</h1>
                </Col>
            </Row>
        </section>
    )
}

export default FirstSection
