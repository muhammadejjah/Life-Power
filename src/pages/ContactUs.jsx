import React from 'react'
import redHeader from "../images/red-header.png"
import ImgHeader from '../components/About Us Page/ImgHeader'
import ContactForm from '../components/About Us Page/ContactForm'
const ContactUs = () => {
  return (
    <div >
      <ImgHeader img={redHeader} title={"Contact Us"} role="contactUs"/>
      <ContactForm/>
    </div>
  )
}

export default ContactUs
