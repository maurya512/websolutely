import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


// import files
import logo from '../../src/images/bg.png'

// import pre loaded navbar class from bootstrap
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink activeClassName="menu_active" exact className="logo-image" to="/home">
                        {/* div to hold the logo image */}
                        <div className="logo-image">
                            <img src={logo} alt="" width="30" height="24" />
                        </div>
                    </NavLink>
                    {/* <button className="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
                        {/* <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            {/* li that redirects the user to each separate component */}
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/service">Service</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Awesome Stuff
                                </a> */}
                                {/* dropdown menu that links to more components of the website */}
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink activeClassName="menu_active" exact className="dropdown-item" to="/pricing">Pricing</NavLink></li>
                                    <li><NavLink activeClassName="menu_active" exact className="dropdown-item" to="/home">Home</NavLink></li>
                                </ul>
                            </li> */}

                            {/* contact component */}
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
