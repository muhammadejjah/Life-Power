import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import about1 from '../../images/about1.jpg'
import about2 from '../../images/about2.jpg'

const AboutView = () => {

    return (
        <Container className='mt-5' style={{overflow:"hidden"}}>
            <Row className='about-row'>
                <Col  xs={12} lg={6} className='d-flex flex-column ali-items-start justify-content-center p-5 gap-4 '>
                    <h2 className='primery-color fw-bold mb-3' data-aos="fade-right">Our Story</h2>
                    <p data-aos="fade-up">
                        We are a clean energy startup company based in Dubai, which is interested in supplying energy products such as batteries and inverters, etc.
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex ali-items-center justify-content-center p-3  '>
                    <img data-aos="fade-left" style={{width:"70%"}} className='img-fluid rounded-5 about-img' src={about2} alt='inv' />
                </Col>
            </Row>
            <Row className='flex-row-reverse about-row'>
                <Col xs={12} lg={6} className='d-flex flex-column ali-items-start justify-content-center gap-4 p-5 '>
                    <h2 data-aos="fade-right" className='primery-color fw-bold mb-3'>Our Team</h2>
                    <p data-aos="fade-up">
                        Our team members are professional electrical engineers, qualified electricians, and passionate system designers.
                        Life Power's main goal is to achieve customer satisfaction and provide a great experience for everyone.
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex ali-items-center justify-content-center p-3  '>
                    <img data-aos="fade-left" style={{width:"70%"}} className='img-fluid rounded-5 about-img' src={about1} alt='inv' />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutView
