import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo-white.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer className='mt-5 ' >
            <Container>
                <Row className='pt-4'>
                    <Col xs={12} md={4}>
                        <Link to={'/'}><img className='img-fluid' src={logo} alt='logo' /></Link>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4 className='text-light '>Links</h4>
                        <ul className=' p-0 d-flex flex-column  gap-2  mt-3 '>
                            <li><Link to={"/"} className='text-light p-0'>Home</Link></li>
                            <li><Link to={"/about"} className='text-light p-0'>About Us</Link></li>
                            <li><Link to={"/contact"} className='text-light p-0'>Contact Us</Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4 className='text-light  mt-xs-3'>Follow Us</h4>
                        <div className='d-flex align-items-center justify-content-stert gap-4 mt-3 social-links'>
                            <a  href={"https://www.facebook.com"} target="_blank"><FontAwesomeIcon size='xl' icon={faFacebook} /></a>
                            <a href='#' target="_blank"><FontAwesomeIcon size='xl'  icon={faInstagram} /></a>
                            <a href='#' target="_blank"><FontAwesomeIcon size='xl' icon={faYoutube} /></a>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className='d-flex align-items-center justify-content-center mt-5 pb-2'>
                            <p className='text-light m-0'>&copy; Copyright 2023 Life Power</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
