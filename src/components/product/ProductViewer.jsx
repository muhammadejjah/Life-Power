import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import inv from '../../images/12.png'
import battery from '../../images/11.png'
const ProductViewer = () => {
    const data = [inv, battery, inv,] //test

    const [mainImg, setMainImg] = useState(data[0])
    const [subimg, setSubImg] = useState("")
    const handleChange = (e) => {
        setMainImg(e.target.src)
        console.log(e.target.src)
    }
    console.log(mainImg)
    const dataShow = data.map((el, idx) => {
        return (
            <div key={idx} className='py-1'>
                <img
                    onClick={(e) => { handleChange(e) }}
                    className={`product-sub-img ${el == mainImg ? "active" : ""}`}
                    src={el}
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
                        <img className='product-main-img h-100 w-100' src={mainImg} alt='product-main-img' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductViewer
