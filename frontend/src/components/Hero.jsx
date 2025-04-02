import React from 'react';
import logo from "../assets/gofood.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero" style={{ minHeight: "58vh" }}>
        <div className="container pt-4">
          <Link className="navbar-brand" to="/">
            <video src={logo} height={80} autoPlay loop muted />
          </Link>
          <h5 className='d-flex justify-content-center'>Hero Section</h5>
        </div>
      </div>
    </>
  )
}
