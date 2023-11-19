import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import battery from "../../images/11.png"
import inv from "../../images/12.png"
import 'swiper/css';
import AOS from 'aos';
import Loading from '../Loading';
const HomeSwiper = () => {
  const [loading, setLoading] = useState(true)
  const data = [1, 1, 1, 1, 1, 1] // for test

  const sw = window.innerWidth
  const [screenSize, setScreenSize] = useState(sw)
  setTimeout(()=>{
    setLoading(false)
  },2000)
  useEffect(() => {
    AOS.init();
  }, [])
  window.onresize = () => {
    setScreenSize(window.innerWidth)
  }


  const dataShow = data.map((el, idx) => {
    return (
      <SwiperSlide key={idx} className='d-flex align-items-center justify-content-center'>
        <Link to={`/product/${1}`}>
          <img className='swiper-img img-fluid' alt='x' src={battery} />
        </Link>
      </SwiperSlide>
    )
  })
  return (
    <Container className="overflow-hidden"   >
      <Row className='my-5'>
        <Col className='best-selling ' lg={3}>
          <h2 className='main-color fw-bold' data-aos="fade-up" >Best Selling</h2>
          <h2 className='primery-color fw-bold ' data-aos="fade-right">Products</h2>
          <p className='mt-3 ' data-aos="zoom-in" >
            "Explore these top-notch best sellers to discover what's trending and in high demand among our valued customers."
          </p>
          <a href={"#categories"} className='more-btn mt-4' style={{ textDecoration: "none" }}>
            <button className='button-color  btn-home d-flex align-items-center gap-2'>
              See more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </Col>
        <Col lg={9} style={{ position: "relative" }}>
          
            <Swiper
              // data-aos="fade-left"
              // data-aos-duration="1500"
              style={{minHeight:"200px"}}
              className='product-swiper py-3'
              spaceBetween={0}
              slidesPerView={screenSize < 576 ? 1.5 : 3.5}
            >
              {loading?<Loading loading={true}></Loading>:dataShow}
            </Swiper>
          
        </Col>
      </Row>
    </Container>
  )
}

export default HomeSwiper
