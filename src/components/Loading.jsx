import React, { Fragment } from 'react'
const Loading = ({ loading, children }) => {
    return (
        <Fragment>
            {loading ? (
                <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "inherit" }}>
                    <div className="loader">
                        <svg viewBox="0 0 80 80">
                            <circle id="test" cx="40" cy="40" r="32"></circle>
                        </svg>
                    </div>
                </div>
            ) : (children)}
        </Fragment>
    )
}
export default Loading
