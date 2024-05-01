import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Admin Penel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul style={{ display: "flex", listStyle: "none", fontSize: "25px", color: "white" }}>
                        <li><Link to='#'><i className="fa fa-user text-light"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
