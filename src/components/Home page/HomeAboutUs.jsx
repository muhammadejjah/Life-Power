import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import logo192 from '../../images/logo192.png'
const HomeAboutUs = () => {
    return (
        <section className='liner-background mt-5' style={{ position: "relative", overflow: "hidden" }}>
            <img
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                src={logo192}
                alt="logo"
                style={{ position: "absolute", right: "-80px", width: "15rem", transform: "rotate(-20deg" }}
            />
            <Container>
                <h2 className='main-color text-center fw-bold'>About <span className='primery-color'>Us</span></h2>
                <Row className=''>
                    <Col
                        data-aos="fade-right"
                        sm={12}
                        md={4}
                        className='d-flex flex-column align-items-center justify-content-start text-center gap-3 px-5 '>
                        <div className='about-circle shadow'>
                            <img src={icon1} alt="1" />
                        </div>
                        <h5 className='primery-color fw-bold' >Reliable Maintenance Services</h5>
                        <p>"Our maintenance services provide peace of mind for our customers."
                        </p>
                    </Col>
                    <Col
                        data-aos="fade-up"
                        sm={12}
                        md={4}
                        className='d-flex flex-column align-items-center justify-content-start text-center gap-3 px-5'>
                        <div className='about-circle shadow'>
                            <img src={icon2} alt="1" />
                        </div>
                        <h5 className='primery-color fw-bold' >High Quality</h5>
                        <p>"Our high-quality batteries deliver lasting power and reliability, ensuring customer satisfaction."
                        </p>
                    </Col>
                    <Col
                        data-aos="fade-left"
                        sm={12}
                        md={4}
                        className='d-flex flex-column align-items-center justify-content-start text-center gap-3 px-5'>
                        <div className='about-circle shadow'>
                            <img src={icon3} alt="1" />
                        </div>
                        <h5 className='primery-color fw-bold' >24/7 Support</h5>
                        <p>"Our customer care team is committed to exceptional service for your contentment."
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeAboutUs
