import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/todos" className="nav-link">Todos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/restaurant" className="nav-link">Restaurant</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/weather" className="nav-link">Weather</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/testhooks" className="nav-link">Test Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/redux" className="nav-link">Redux Ex</Link>
                            </li>

                            {props.searchbar ? <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



// if you never provided title then default value will display
Header.defaultProps = {
    title: "Your Site Title"
}


// used for strict mode for porps value
Header.propTypes = {
    title: PropTypes.string
}



