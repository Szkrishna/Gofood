import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        {/* Column 1: About */}
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>
                                We provide the best services for travel, adventure, and
                                exploration. Stay connected with us!
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                                <li><a href="/" className="text-light text-decoration-none">Services</a></li>
                                <li><a href="/" className="text-light text-decoration-none">About</a></li>
                                <li><a href="/" className="text-light text-decoration-none">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Social Media */}
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <a href="/" className="text-light me-3"><FaFacebook size={24} /></a>
                            <a href="/" className="text-light me-3"><FaTwitter size={24} /></a>
                            <a href="/" className="text-light me-3"><FaInstagram size={24} /></a>
                            <a href="/" className="text-light"><FaLinkedin size={24} /></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <hr className="bg-light" />
                <p className="text-center mb-0">
                    © {new Date().getFullYear()} GoFood All Rights Reserved.
                </p>
            </footer>
        </>
    )
}