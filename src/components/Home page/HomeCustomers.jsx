import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Col from 'react-bootstrap/esm/Col';
import com from "../../images/icon4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const HomeCustomers = () => {
    const { comments } = useSelector(state => state.HomeSlice)

    const sw = window.innerWidth
    const [screenSize, setScreenSize] = useState(sw)
    window.onresize = () => {
        setScreenSize(window.innerWidth)
    }

    const dataShow = comments.map((el, idx) => {
        return (
            <SwiperSlide className='' key={idx}>
                <div className='p-4 button-color costumer d-flex flex-column justify-content-evenly ' style={{ borderRadius: "10px" }}>
                    <p className='customer-context'>{el.content}</p>
                    <div className='row '>
                        <Col xs={9} >
                            <h5 className='fw-bold '>{el.username}</h5>
                            <p>{el.career}</p>
                        </Col>
                        <Col className='d-flex align-items-center ' xs={3}>
                            <div>
                                <FontAwesomeIcon icon={faStar} /><span> {el.rate}</span>
                            </div>
                        </Col>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className='mt-5' >
            <div className='ms-5 overflow-hidden'
                data-aos="fade-right"
                data-aos-duration="1000">
                <h2 className='fw-bold'>What customers say about </h2>
                <h2 className='primery-color fw-bold'>Life<span className='main-color'> Power</span> ?</h2>
            </div>
            <Swiper
                className='p-5'
                spaceBetween={screenSize < 576 ? 20 : 50}
                slidesPerView={screenSize < 576 ? 1 : 1.3}
            >
                {dataShow}
            </Swiper>

        </section>
    )
}

export default HomeCustomers
