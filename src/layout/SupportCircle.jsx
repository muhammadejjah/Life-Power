import { faMessage, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const SupportCircle = () => {
  const location = useLocation()
  const [pathname, setPathName] = useState(location.pathname)

  useEffect(() => {
    setPathName(location.pathname)
  }, [location.pathname])

  return (
    <Link to={'/contact'} style={{ display: pathname === "/contact" ? "none" : "block" }}>
      <div className='sup-circle fade-circle shadow '
      >
        <FontAwesomeIcon className='text-light m-0' size={'xl'} icon={faMessage} />
        <p className='m-0'>Let Us Help You</p>
      </div>
    </Link>
  )
}

export default SupportCircle
