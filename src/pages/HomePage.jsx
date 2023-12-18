import React, { Fragment } from 'react'
import CarouselAd from '../components/Home page/Carousel'
import HomeSwiper from '../components/Home page/HomeSwiper'
import HomeAboutUs from '../components/Home page/HomeAboutUs'
import HomeCategories from '../components/Home page/HomeCategories'
import HomeCustomers from '../components/Home page/HomeCustomers'
import Err from '../components/Err'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
const HomePage = () => {
  const { error, loading } = useSelector(state => state.HomeSlice)
  
  return (
    <Fragment>
      <Err error={error}>
        <div style={{minHeight:"100vh"}}>
          <Loading loading={loading}>
            <CarouselAd />
            <HomeSwiper />
            <HomeAboutUs />
            <HomeCategories />
            <HomeCustomers />
          </Loading>
        </div>
      </Err>
    </Fragment>
  )
}

export default HomePage
