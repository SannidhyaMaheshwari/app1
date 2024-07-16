import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.md} bg-${props.md} `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {" "}
          {props.title}{" "}
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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          href="/"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" herf="#">
                {" "}
                {props.secnd}{" "}
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.md === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.md === "light" ? "Dark" : "Light"}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  secnd: PropTypes.string.isRequired,
};
//isReq to ensure its not empty
Navbar.defaultProps = {
  title: "MyApp",
  secnd: "About",
};
