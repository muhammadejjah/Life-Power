import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import ProductViewer from './ProductViewer';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';

const ProductInformation = () => {
    const { product } = useSelector(state => state.ProductSlice)

    return (
        <Row className='mb-4'>
            <Col sm={12} lg={7}><ProductViewer images={product.images} /></Col>
            <Col sm={12} lg={5} className='d-flex flex-column align-items-center justify-content-start gap-4'>
                <h1 className='main-color fw-bold'>{product.title}</h1>
                <h3 className='main-color'>{product.subtitle}</h3>
                <div className='d-flex align-items-center justify-content-between w-75'>
                    <p className='m-0'>Datasheet :</p>
                    <div className='link-group'>
                        <a href={product.datasheet_url} download><FontAwesomeIcon icon={faDownload} /></a>
                        <a target='_blank' rel="noreferrer" href={product.datasheet_url}><FontAwesomeIcon icon={faEye} /></a>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between w-75'>
                    <p className='m-0'>Usermanual :</p>
                    <div className='link-group'>
                        <a href={product.usermanual_url} download><FontAwesomeIcon icon={faDownload} /></a>
                        <a target='_blank' rel="noreferrer" href={product.usermanual_url}><FontAwesomeIcon icon={faEye} /></a>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default ProductInformation
