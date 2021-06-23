// import dependencies for react
import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


// import files
import logo from '../../src/images/bg.png';

// Home component
function Home() {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div classNames="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-10 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Welcome to <strong className="brand-name">Websolutely</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        <strong>
                                            Web Development Done Right
                                        </strong>
                                    </h2>
                                    <div className="mt-3">
                                        {/* redirects the user to a about page */}
                                        <NavLink to="/about" className="btn-get-started">Discover Now</NavLink>
                                    </div>
                                </div>

                                {/* div for the images */}
                                {/* order 1 dictates that the image will be displayed on the top of the mobile screens and order 2 dictates that the image will be displayed side by side on larger screens*/}
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={logo} className="img-fluid animated" alt="/home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
