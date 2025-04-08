import React from 'react';
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero" style={{ minHeight: "58vh" }}>
        <div className="container pt-4">
          <h5 className='d-flex justify-content-center'>
          <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
          </h5>
        </div>
      </div>
    </>
  )
}
