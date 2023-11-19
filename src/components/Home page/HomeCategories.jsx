import React, { useState } from 'react'
import logo192 from '../../images/logo192.png'
import battery from "../../images/11.png"
import inv from "../../images/12.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
const HomeCategories = () => {


    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1]; //for test
    const sw = window.innerWidth
    const [screenSize, setScreenSize] = useState(sw)
    window.onresize = () => {
        setScreenSize(window.innerWidth)
    }
    
    const showData = data.map((el, idx) => {
        return (
            <SwiperSlide key={idx} className='d-flex align-items-center justify-content-start flex-column' >
                <Link to={`categories/${1}`}><img className='swiper-img img-fluid' alt='x' src={inv} /></Link>
                <div className="d-flex justify-content-center">
                    <Dropdown className="d-inline mx-2 ">
                        <Dropdown.Toggle id="dropdown-autoclose-true" className='category-dropdown'>
                            Default Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='category-dropdown-menu' >
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <section id='categories' className='liner-background' style={{ position: "relative" }}>
            <img
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                src={logo192}
                alt="logo"
                style={{ position: "absolute", left: "-80px", width: "15rem" }}
            />
            <div className=''>
                <div className='my-5'>
                    <h2 className='main-color text-center fw-bold'>Categories</h2>
                    <p className='main-color-opacity text-center'>Find what you are looking for</p>
                </div>
                <div>
                    <Swiper
                        style={{height:"70vh"}}
                        id='home-category'
                        className='category-swiper'
                        modules={[Navigation, A11y]}
                        navigation
                        spaceBetween={1}
                        slidesPerView={screenSize < 576 ? 2 : 3.5}
                    >
                        {showData}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeCategories
