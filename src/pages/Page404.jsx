import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex align-items-center justify-content-center ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center primery-color ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2 primery-color">
                                    Looks like you're lost
                                </h3>
                                <p>the page you are looking for is not available!</p>
                                <Link to="/" className="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page404
