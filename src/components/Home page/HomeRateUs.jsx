import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from "../../images/amico.png"
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { PostCommentForm } from '../../state/CommentSlice'
import Loading from '../Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HomeRateUs = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.CommentSlice)
    const [open, setOpen] = useState(false)
    const [hover, setHover] = useState(null)
    const [form, setForm] = useState({
        username: "",
        content: "",
        career: "",
        rate: 4,
    })

    const resetForm = () => {
        setForm({
            ...form,
            username: "",
            content: "",
            career: "",
            rate: "4",
        })
    }

    useEffect(() => {
        if (open) {
            Swal.fire({
                position: "center",
                icon: "success",
                text: `Thanks For Rating`,
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
        dispatch(PostCommentForm(form)).then(() => {
            setOpen(true)
        })
    }

    return (
        <section className='my-5'>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <div>
                            <div data-aos="fade-up">
                                <h2 className='fw-bold'>Want to say more?</h2>
                                <h2 className='primery-color fw-bold'>Rate<span className='main-color'> us</span></h2>
                            </div>
                            <div className='d-flex align-items-center justify-content-start mt-5 w-100'>
                                <img loading='lazy' style={{ width: "60%" }} data-aos="fade-right" data-aos-duration="1000" src={rate} alt='.' />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <form className='d-flex flex-column gap-3 form-rate px-4'
                            onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='fullName'>Full Name</label>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    id='fullName'
                                    name='username'
                                    value={form.username}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor='career'>Career</label>
                                <input
                                    type='text'
                                    placeholder='Career'
                                    id='career'
                                    name='career'
                                    value={form.career}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    rows={4}
                                    type='textbox'
                                    placeholder='Message'
                                    id='message'
                                    name='content'
                                    value={form.content}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div>
                                <div>
                                    <label>Rate :</label>
                                </div>
                                <div className=' '>
                                    {[...Array(5)].map((el, idx) => {
                                        const currentRate = idx + 1;
                                        return (
                                            <label className='ps-1' key={idx}>
                                                <input
                                                    onClick={handleChange}
                                                    type='radio'
                                                    name='rate'
                                                    value={currentRate} />
                                                <FontAwesomeIcon
                                                    className='star'
                                                    color={currentRate <= (hover || form.rate) ? "gold" : "silver"}
                                                    icon={faStar}
                                                    onMouseEnter={() => { setHover(currentRate) }}
                                                    onMouseLeave={() => { setHover(null) }}
                                                />
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <Loading loading={loading}><button type='submit'>Send</button></Loading>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeRateUs
