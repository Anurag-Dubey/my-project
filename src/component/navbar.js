import React from "react";
import { Link } from "react-router-dom";
import Navbttn from "./navbttn";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ background: "white" }}
    >
      <div className="container">
        <div style={{float:'left'}}>
          <a className="navbar-brand " href="/">
            <img
              src="/logo.jpg"
              style={{ height: 60.59, width: 327.2 }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div style={{float:'right'}}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <Navbttn name="Home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <Navbttn name="About Us" />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <Navbttn name="Services" />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  <Navbttn name="Gallery" />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  <Navbttn name="Contact Us" />
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
