import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div id="navbar">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark navigation">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MZSUITES
          </Link>

          <button
            type="button"
            className="navbar-toggler button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2 p-1">
                <Link className="nav-link text-light txt-md serif" to="/">Home</Link>
              </li>

              <li className="nav-item me-2 p-1">
                <Link className="nav-link text-light txt-md serif" to="/about">About</Link>
              </li>

              <li className="nav-item me-2 p-1">
                <Link className="nav-link text-light txt-md serif" to="/room">Rooms & Suites</Link>
              </li>

              <li className="nav-item me-2 p-1">
                <Link className="nav-link text-light txt-md serif" to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="navbar-nav ms-auto p-2 log-style">
              <Link to="/room" className="w-100">
                <button type="button" className="btn btn-secondary w-100">BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
