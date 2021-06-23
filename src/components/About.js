// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom';

// import files
import web from '../../src/images/bg.png';

function About() {
    return (
        <h1>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        How it all started at <strong className="brand-name">Websolutely</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        <strong>
                                            Having a strong online presence is a dawtning task? 
                                            Websolutely not!!
                                        </strong>
                                        <br>
                                        </br>
                                        <p>
                                            We strive to provide top notch Web Design services with passion, dedication and a lot of coffee.
                                        </p>
                                    </h2>
                                    <div className="mt-3">
                                        {/* redirects the user to services page */}
                                        <NavLink to="/service" className="btn-get-started">Look Around</NavLink>
                                    </div>
                                </div>

                                {/* div for images */}
                                {/* order 1 dicates that the image will be loaded on the top of the screen on mobile devices and order-2 dictates that the image will be loaded side-by-side on larger screens 
                                */}
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </h1>
    )
}

export default About
