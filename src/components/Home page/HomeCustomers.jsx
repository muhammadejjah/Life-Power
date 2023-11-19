import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Col from 'react-bootstrap/esm/Col';
import com from "../../images/icon4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
const HomeCustomers = () => {
    const data =[1,1,1,1,1,] //for test 

    const dataShow = data.map((el,idx)=>{
        return(
            <SwiperSlide className='costumer' key={idx}>
                    <div className='px-5 py-3 button-color costumer ' style={{ borderRadius: "10px" }}>
                        <p>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className='row '>
                            <Col xs={3}  ><img src={com} alt=',,' /></Col>
                            <Col xs={9} >
                                <h5 className='fw-bold '>John Doe</h5>
                                <p>Engineer</p>
                            </Col>
                            <Col className='d-flex align-items-center ' sm={2}>
                                <div>
                                    <FontAwesomeIcon icon={faStar} /><span>4.5</span>
                                </div>
                            </Col>
                        </div>
                    </div>
                </SwiperSlide>
        )
    })
    return (
        <section >
            <div className='ps-5 ms-5 overflow-hidden'
                data-aos="fade-right"
                data-aos-duration="1000">
                <h2 className='fw-bold'>What customers say about </h2>
                <h2 className='primery-color fw-bold'>Life<span className='main-color'> Power</span> ?</h2>
            </div>
            <Swiper
                className='p-5'
                spaceBetween={1}
                slidesPerView={1}
            >
                {dataShow}
            </Swiper>

        </section>
    )
}

export default HomeCustomers
