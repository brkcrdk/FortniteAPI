import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import useNewsFetcher from "../../dataFetchers/fetchNews";

export default function Home() {
  const { news } = useNewsFetcher();
  return (
    <div className="container-fluid">
      <div className="row haber">
        <div className="col-md-6">
          <h1>FortniteAPI</h1>
          <p>True source of Fortnite news, items and weapons.</p>
          <hr />
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
          <hr />
        </div>
      </div>

      {/* CAROUSEL BAŞLANGICI */}

      <Carousel
        fade="true"
        interval="4000"
        pauseOnHover="true"
        wrap="true"
        slide="true"
      >
        {news
          .filter((value, index) => {
            return index < 5;
          })
          .map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w100" src={item.image} alt="" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
