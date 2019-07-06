import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";
export default function Info() {
  return (
    <div className="row haber">
      <div className="col-12">
        <h1>FortniteAPI</h1>
        <hr />
        <p>True source of Fortnite news, items and weapons.</p>

        {/* SHOP BUTTON AND PARAGRAFI */}
        <div className="row shop">
          <p>Get all what you need!</p>
          <Link to="/store">
            <button className="btn btn-warning">Go to Shop!</button>
          </Link>
        </div>
        <hr />
        {/* TÜM İTEMLER VE TÜM SİLAHLAR BUTONLARI */}
        <div className="row shop">
          <div className="col-12">See all items!</div>
          <div className="col-sm-6">
            <button className="btn btn-warning">See UpComing Weapons!</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-warning">See UpComing Items!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
