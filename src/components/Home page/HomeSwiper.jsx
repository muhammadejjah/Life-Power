import React, { useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { BaseURL } from '../../Api/Api';
import { smallScreens } from '../../state/WindowSlice';
const HomeSwiper = () => {
  const { bestSelling } = useSelector(state => state.HomeSlice)
  const dispatch = useDispatch()
    const { windowSize } = useSelector(state => state.WindowSlice)
    useEffect(() => {
        const handleResize = () => {
            dispatch(smallScreens(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  const dataShow = bestSelling.map((el, idx) => {
    return (
      <SwiperSlide key={idx} className=''>
        <Link to={`/product/${el.id}`} className='' >
          <img className='swiper-img ' alt='x' src={`${BaseURL}${el.image}`} />
          <p className='text-dark text-center mt-2'>{el.name}</p>
        </Link>
      </SwiperSlide>
    )
  })

  return (
    <Container className="overflow-hidden"   >
      <Row className='my-5'>
        <Col className='best-selling d-flex flex-column justify-content-around' lg={3}>
          <div>
            <h2 className='main-color fw-bold' data-aos="fade-up" >Best Selling</h2>
            <h2 className='primery-color fw-bold ' data-aos="fade-right">Products</h2>
          </div>
          <p className='' data-aos="zoom-in" >
            "Explore these top-notch best sellers to discover what's trending and in high demand among our valued customers."
          </p>
        </Col>
        <Col lg={9} style={{ position: "relative" }}>
          <Swiper
            // data-aos="fade-left"
            // data-aos-duration="1500"
            style={{ minHeight: "200px" }}
            className='product-swiper py-2 px-5'
            spaceBetween={0}
            slidesPerView={windowSize < 576 ? 1.5 : 3.5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {dataShow}
          </Swiper>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeSwiper
