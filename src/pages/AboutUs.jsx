import React from 'react'
import ImgHeader from '../components/About Us Page/ImgHeader'
import blueHeader from "../images/blue-header.png"
import AboutView from '../components/About Us Page/AboutView'
const AboutUs = () => {
  return (
    <div >
      <ImgHeader img={blueHeader} title={"About Us"} role="aboutUs" />
      <AboutView />
    </div>
  )
}

export default AboutUs
