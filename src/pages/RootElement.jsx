import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SupportCircle from '../layout/SupportCircle'
import Aos from 'aos';
import 'aos/dist/aos.css';
const RootElement = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <div>
      <Header />
      <Outlet />
      <SupportCircle/>
      <Footer />
    </div>
  )
}

export default RootElement
