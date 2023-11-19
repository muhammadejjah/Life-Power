import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const ProductDetalis = () => {
    const data = [1, 1, 1, 1, 1, 1, 1,]

    const dataShow = data.map((el, idx) => {
        return (
            <tr key={idx}>
                <td style={{ width: "40%" }} className='py-2 mb-3'>name</td>
                <td style={{ width: "60%" }} className='py-2 mb-3'>title</td>
            </tr>
        )
    })

    return (
        <Row>
            <div><h2 className='main-color my-4 product-details '>Product Details</h2></div>
            <Col xs={12} lg={6}>
                <table style={{ width: "100%" }} className='my-3'>
                    <tbody>
                        {dataShow}
                    </tbody>
                </table>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Col>
        </Row>
    )
}

export default ProductDetalis
