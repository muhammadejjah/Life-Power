import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SupportCircle from '../layout/SupportCircle'
const RootElement = () => {
  
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
