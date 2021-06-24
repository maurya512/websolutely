// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional Card Component
function Card(props) {
    return (
        <>
        {/* card */}
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} class="card-img-top" alt="img src" />
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <NavLink to="/contact" class="btn btn-danger">Book A Service</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

// export Card component
export default Card