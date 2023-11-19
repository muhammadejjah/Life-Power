import React from 'react'
import ImgHeader from '../components/About Us Page/ImgHeader'
import blueHeader from "../images/blue-header.png"
import ContactForm from '../components/About Us Page/ContactForm'
const AboutUs = () => {
  return (
    <div >
      <ImgHeader  img={blueHeader} title={"About Us"} role="aboutUs"/>
      
    </div>
  )
}

export default AboutUs
