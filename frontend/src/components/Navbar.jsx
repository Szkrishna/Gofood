import React from 'react';
import logo from "../assets/gofood.mp4";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mb-0 pb-0" to="/">
                            <video src={logo} height={60} autoPlay loop muted />
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control border-dark me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
