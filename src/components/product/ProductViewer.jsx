import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { BaseURL } from '../../Api/Api'
const ProductViewer = ({ images }) => {
    const imgs = images || []
    const subimgClass = 'product-sub-img '
    const [mainImg, setMainImg] = useState({ src: imgs[0], id: 0 })

    const dataShow = imgs.map((el, idx) => {
        return (
            <div key={idx} className='py-1 w-100'>
                <img
                    onClick={(e) => { setMainImg({ ...mainImg, src: el, id: idx }) }}
                    className={subimgClass + (mainImg.id === idx ? "active" : "")}
                    src={`${BaseURL}${el}`}
                    alt='sub-img'
                />
            </div>
        )
    })

    return (
        <div style={{ maxHeight: "60hv", marginBottom: "30px" }}>
            <Row>
                <Col
                    xs={2}
                    className='d-flex flex-column align-items-center justify-content-start'
                    style={{ overflow: "auto", height: "60vh" }}
                >
                    {dataShow}
                </Col>
                <Col xs={10} >
                    <div className=' w-100' style={{ height: "60vh" }} >
                        <img className='product-main-img h-100 w-100' src={`${BaseURL}${mainImg.src}`} alt='product-main-img' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductViewer
