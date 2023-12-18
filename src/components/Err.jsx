import { faRotateRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import Page404 from '../pages/Page404'
const Err = ({ error, children }) => {
    return (
        <Fragment>
            {error !== null ?
                error.code === "ERR_NETWORK" ? (
                    <div className='d-flex align-items-center justify-content-center flex-column' style={{ marginTop: "80px", height: "50vh" }} >
                        <FontAwesomeIcon className='primery-color' size='2xl' icon={faTriangleExclamation} />
                        <p className='primery-color mt-3'>Error Conniction Please Try Again </p>
                        <button
                            className='err-btn'
                            onClick={() => { window.location.reload() }}
                        >
                            <FontAwesomeIcon className='text-light' size='2xl' icon={faRotateRight} />
                        </button>
                    </div>
                ) : <Page404 />
                : (children)}
        </Fragment>
    )
}

export default Err
