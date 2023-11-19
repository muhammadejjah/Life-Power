import { faMessage, faXmark, faPaperPlane, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Fragment, useEffect, useRef, useState } from 'react'

const SupportCircle = () => {
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)
  const sup = useRef(null)
  const circle = useRef(null)
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  })

  const handleOutsideClick = (e) => {
    console.log(circle.current)
    console.log(e.target)
    if (e.target !== circle.current && !sup.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const openHandle = (e) => {

    setOpen(prev=>!prev)

  }

  return (
    <Fragment >
      <div
        className='sup-circle'
        onClick={openHandle}
        ref={circle}

      >
        <FontAwesomeIcon  className='text-light' size={open ? '2xl' : 'xl'} icon={open ? faXmark : faMessage} />
      </div>
      <div
        className='sup-content px-4 py-3 shadow rounded-4'
        style={{ right: open ? "20px" : "-100%" }}
        ref={sup}
      >
        <div className='d-flex flex-column align-items-start gap-3 text-light '>
          <div>
            <h5>Chat with us!</h5>
            <h6>Hello! </h6>
          </div>
          <p className='fw-light'>
            Please message us if you have questions, or give an idea of what you’re looking for. We’re happy to make recommendations.
          </p>
          <form className='w-100'>
            <textarea
              rows={3}
              cols={40}
              placeholder='Write a message..'
              required
              value={message}
              onChange={(e) => { setMessage(e.target.value) }}
            ></textarea>
            <button type='submit'>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className='sup-icon'
                style={{ color: "#005090" }}
              />
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default SupportCircle
