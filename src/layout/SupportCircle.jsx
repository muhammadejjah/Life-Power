import { faMessage, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { Link } from 'react-router-dom'

const SupportCircle = () => {


  return (
    <Link to={'/contact'}>
      <div
        className='sup-circle fade-circle'
      >
        <FontAwesomeIcon className='text-light' size={'xl'} icon={faMessage} />
      </div>
    </Link>
  )
}

export default SupportCircle
