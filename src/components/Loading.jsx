import React, { Fragment } from 'react'

const Loading = ({ loading, children }) => {
    return (
        <Fragment>
            {loading ? (
                <div className="spinner center">
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                </div>
            ) : (children)}
        </Fragment>
    )
}
export default Loading
