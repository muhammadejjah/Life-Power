import React, { Fragment } from 'react'
import CarouselAd from '../components/Home page/Carousel'
import HomeSwiper from '../components/Home page/HomeSwiper'
import HomeAboutUs from '../components/Home page/HomeAboutUs'
import HomeCategories from '../components/Home page/HomeCategories'
import HomeCustomers from '../components/Home page/HomeCustomers'
const HomePage = () => {
  
  return (
    <Fragment>
      <CarouselAd/>
      <HomeSwiper />
      <HomeAboutUs/>
      <HomeCategories/>
      <HomeCustomers/>
    </Fragment>
  )
}

export default HomePage
