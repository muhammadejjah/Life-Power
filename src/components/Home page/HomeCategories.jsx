import React, { useState } from 'react'
import logo192 from '../../images/logo192.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { BaseURL } from '../../Api/Api';
const HomeCategories = () => {
    const { categories } = useSelector(state => state.HomeSlice)

    const sw = window.innerWidth
    const [screenSize, setScreenSize] = useState(sw)
    window.onresize = () => {
        setScreenSize(window.innerWidth)
    }

    const showData = categories.map((el, idx) => {
        return (
            <SwiperSlide key={idx} className='d-flex align-items-center justify-content-start flex-column'  >
                <Link style={{ minHeight: "300px", minWidth: "200px" }} to={`categories/${el.id}`}><img className='swiper-img img-fluid' alt='x' src={`${BaseURL}${el.image}`} /></Link>
                <div className="d-flex justify-content-center" >
                    <Dropdown className=" mx-2 ">
                        <Dropdown.Toggle id="dropdown-autoclose-true" className='category-dropdown'>
                            {el.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='category-dropdown-menu shadow' >
                            {el.subcategories.map((el, i) => {
                                return (
                                    <Link className='dropdown-item' key={i} to={`/products/${el.id}`}>{el.title}</Link>
                                )
                            })}
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
                <Swiper
                    id='home-category'
                    className='category-swiper px-5'
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={screenSize < 576 ? 200 : 50}
                    slidesPerView={screenSize < 576 ? 1 : 3.5}

                >
                    {categories && showData}
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCategories
