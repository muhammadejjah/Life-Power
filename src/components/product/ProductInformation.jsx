import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import ProductViewer from './ProductViewer';

const ProductInformation = () => {
    const rate = 3;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rate > i)
            stars.push(<FontAwesomeIcon style={{ color: "#FFC700" }} key={i} icon={faStar} />)
        else
            stars.push(<FontAwesomeIcon style={{ color: "#FFC700" }} key={i} icon={farStar} />)
    }
    return (
        <Row className='mb-4'>
            <Col sm={12} lg={7}><ProductViewer /></Col>
            <Col sm={12} lg={5} className='d-flex flex-column align-items-center justify-contant-start gap-3'>
                <h1 className='main-color fw-bold'>MTU-200</h1>
                <h3 className='main-color'>Tubular Battery - 200Ah</h3>
                <div>
                    {stars}
                </div>
                <a href="#" className='btn-home main-color mt-4 text-center ' style={{ width: "40%" }} title='click for download'>Datasheet</a>
                <a href="#" className='btn-home main-color  text-center' style={{ width: "40%" }} title='click for download' >User Manual</a>
            </Col>
        </Row>
    )
}

export default ProductInformation
