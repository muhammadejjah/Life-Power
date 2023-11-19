
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const ContactForm = () => {
    const data = [
        { icon: faPhone, title: "0988417907" },
        { icon: faEnvelope, title: "lifepower@lifepower.com" },
        { icon: faLocationDot, title: "102 street" },
    ];

    const dataShow = data.map((el, idx) => {
        return (
            <a key={idx} className='d-flex align-items-center justify-content-center flex-column gap-3' href='#'>
                <FontAwesomeIcon className='contact-icon main-color' size='2xl' icon={el.icon} />
                <p  >{el.title}</p>
            </a>
        )
    })
    return (
        <Container>
            <Row>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-start gap-5 flex-column'>
                    {dataShow}
                </Col>
                <Col sm={12} lg={6}>
                    <div className='px-3'>
                        <form className='d-flex flex-column gap-3 form-content p-4 shadow'>
                            <div className='d-flex align-items-center justify-content-between  gap-3   '>
                                <div>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input type='text' placeholder='&#xf007;  First Name' id='firstName' required ></input>
                                </div>
                                <div>
                                    <label htmlFor='lastName'>First Name</label>
                                    <input type='text' placeholder='&#xf007;  Last Name' id='lastName' required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input type='email' placeholder='&#xf0e0;  Email' id='email' required/>
                            </div>
                            <div>
                                <label htmlFor='number'>Number Phone</label>
                                <input type='text' placeholder='&#xf095;  Phone Number' id='number' required/>
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <textarea rows={4} type='textbox' placeholder='&#xf27a;  Message' id='message' required></textarea>
                            </div>
                            <div>
                                <button type='submit'>Send</button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm
