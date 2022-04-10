import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar_s(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/Images/Logo.png "
              alt=""
              width="45"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <a className="navbar-brand" href="#">
            {props.title}
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {
                  <a className="nav-link" href="#">
                    Home
                  </a>
                }
              </li>
              {/* <li className="nav-item">
                {
                  <a className="nav-link" href="/about">
                    {props.about}
                  </a>
                }
              </li>*/}
            </ul> 
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Find</button>
      </form> */}

            <img src="/Images/lightmode.png " alt="" width="24" height="24" />
            <div className="form-check form-switch mx-2" text-light>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />DarkMode
              <img src="/Images/darkmode.png " alt="" width="18" height="18" />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar_s.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar_s.defaultProps = {
  title: "Add Title",
  about: "About Us",
};
