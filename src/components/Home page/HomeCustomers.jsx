import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import Col from 'react-bootstrap/esm/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const HomeCustomers = () => {
    const { comments } = useSelector(state => state.HomeSlice)
    const { windowSize } = useSelector(state => state.WindowSlice)
    const dataShow = comments.map((el, idx) => {
        return (
            <SwiperSlide className='customer-slide' key={idx}>
                <div className='p-4 shadow costumer d-flex flex-column justify-content-evenly ' style={{ borderRadius: "10px" }}>
                    <p className='customer-context' style={{opacity:"90%"}}>{el.content}</p>
                    <div className='row '>
                        <Col xs={9} >
                            <h5 className='fw-bold main-color '>{el.username}</h5>
                            <p className='main-color-opacity'>{el.career}</p>
                        </Col>
                        <Col className='d-flex align-items-center ' xs={3}>
                            <div>
                                <FontAwesomeIcon color='gold' icon={faStar} /><span className='main-color'> {el.rate}</span>
                            </div>
                        </Col>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className='my-5' >
            <div className=' customer-header overflow-hidden'
                data-aos="fade-right"
                data-aos-duration="1000">
                <h2 className='fw-bold'>What customers say about </h2>
                <h2 className='primery-color fw-bold'>Life<span className='main-color'> Power</span> ?</h2>
            </div>
            <Swiper
                className='p-5 customer-swiper'
                spaceBetween={windowSize < 576 ? 40 : 50}
                slidesPerView={windowSize < 576 ? 1 : 2}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                centeredSlides={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {dataShow}
            </Swiper>
        </section>
    )
}

export default HomeCustomers
