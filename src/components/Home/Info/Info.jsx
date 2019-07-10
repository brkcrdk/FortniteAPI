import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";
export default function Info() {
  return (
    <div className="container" id="info">
      <div className="row">
        <div className="col-sm-4 text-center">
          <p>
            Get all what you need!
            <Link to="/store">
              <button className="btn btn-outline-light">Go to Shop!</button>
            </Link>
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <p className="text-warning">
            Look all items!
            <Link to="/items">
              <button className="btn btn-warning">Go to Items!</button>
            </Link>
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <p>
            Read all news!
            <Link to="/news">
              <button className="btn btn-outline-warning">Go to News</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
