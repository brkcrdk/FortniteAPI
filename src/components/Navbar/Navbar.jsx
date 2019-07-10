import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./logo.ico";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
      <Link to="/" className="navbar-brand" href="?">
        <img src={logo1} alt="" height="50" width="50" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" href="?">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/store" className="nav-link" href="?">
              {" "}
              Store
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/items" className="nav-link" href="?">
              Items
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
