import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import inv from '../../images/11.png'
const AboutView = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6} className='d-flex flex-column ali-items-start justify-content-center p-3 gap-4 '>
                    <h2 className='primery-color fw-bold mb-3'>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex ali-items-center justify-content-center p-3  '>
                    <img src={inv} alt='inv' />
                </Col>
            </Row>
            <Row className='flex-row-reverse'>
                <Col xs={12} lg={6} className='d-flex flex-column ali-items-start justify-content-center gap-4 p-3 '>
                    <h2 className='primery-color fw-bold mb-3'>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex ali-items-center justify-content-center p-3  '>
                    <img src={inv} alt='inv' />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutView
