
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch, useSelector } from 'react-redux'
import { PostContactForm } from '../../state/ContactSlice'
import Loading from '../Loading'
import Swal from 'sweetalert2'
const ContactForm = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ContactSlice)
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        message: "",
        email: "",
        phone: "",
    })

    const resetForm = () => {
        setForm({
            ...form,
            first_name: "",
            last_name: "",
            message: "",
            email: "",
            phone: "",
        })
    }

    useEffect(() => {
        if (open) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Welcome ${form.first_name}`,
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                resetForm()
                setOpen(false)
            })
        }
    }, [open])

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(PostContactForm(form)).then(() => {
            setOpen(true)
        })
    }

    const data = [
        { icon: faPhone, title: "0988417907" },
        { icon: faEnvelope, title: "info@life-power.co" },
        {
            icon: faLocationDot, title: `Dubai Office:
        /n Shop, 17, City Stay Premium Hotel, Naif Deira, Nakheel Road, Dubai, UAE.` },
    ];
    const dataShow = data.map((el, idx) => {
        return (
            <div key={idx} className='d-flex align-items-center justify-content-center flex-column gap-3' >
                <div className='contact-icon-content'><FontAwesomeIcon className='contact-icon main-color' size='2xl' icon={el.icon} /></div>
                <p>{el.title}</p>
            </div>
        )
    })
    return (
        <Container>
            <Row>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-evenly gap-5 flex-column'>
                    <div className='d-flex align-items-center justify-content-center flex-column gap-2' >
                        <div className='contact-icon-content '><FontAwesomeIcon className='contact-icon main-color' size='2xl' icon={faPhone} /></div>
                        <p className='m-0 fw-bold'>Dubai - UAE :</p>
                        <a href='tel:00971524591953'>+971 52 459 1953</a>
                    </div>
                    <div className='d-flex align-items-center justify-content-center flex-column gap-2' >
                        <div className='contact-icon-content'><FontAwesomeIcon className='contact-icon main-color' size='2xl' icon={faEnvelope} /></div>
                        <a href='mailto:info@life-power.co'>info@life-power.co</a>
                    </div>
                    <div className='d-flex align-items-center justify-content-center flex-column gap-2' >
                        <div className='contact-icon-content'><FontAwesomeIcon className='contact-icon main-color' size='2xl' icon={faLocationDot} /></div>
                        <p className='m-0 fw-bold'>Dubai Office:</p>
                        <p className='m-0 text-center w-50'>Shop, 17, City Stay Premium Hotel, Naif Deira, Nakheel Road, Dubai, UAE.</p>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className='px-3'>
                        <form className='d-flex flex-column gap-3 form-content p-4 shadow'
                            onSubmit={handleSubmit}
                        >
                            <div className='d-flex align-items-center justify-content-between  gap-3   '>
                                <div>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input
                                        type='text'
                                        placeholder='&#xf007;  First Name'
                                        id='firstName'
                                        name='first_name'
                                        value={form.first_name}
                                        onChange={handleChange}
                                        required
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor='lastName'>First Name</label>
                                    <input
                                        type='text'
                                        placeholder='&#xf007;  Last Name'
                                        id='lastName'
                                        name='last_name'
                                        value={form.last_name}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    placeholder='&#xf0e0;  Email'
                                    id='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor='number'>Phone Number</label>
                                <input
                                    type='text'
                                    placeholder='&#xf095;  Phone Number'
                                    id='number'
                                    name='phone'
                                    value={form.phone}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    rows={4}
                                    type='textbox'
                                    placeholder='&#xf27a;  Message'
                                    id='message'
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <div>
                                <Loading loading={loading}><button type='submit'>Send</button></Loading>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm
