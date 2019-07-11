import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "./logo.ico";
import "./Navbar.css";
export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const top = window.scrollY < 100;
      if (top !== isTop) {
        setIsTop(top);
      }
    });
  }, [isTop]);
  let style = { opacity: "0.9" };
  if (isTop === true) {
    style = { opacity: "0.6" };
  }
  return (
    <nav
      style={style}
      className="navbar navbar-expand-lg navbar-light fixed-top"
    >
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
      <div className="collapse navbar-collapse text-center" id="navbarNav">
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
