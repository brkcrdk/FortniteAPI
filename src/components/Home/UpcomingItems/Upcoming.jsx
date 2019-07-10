import React from "react";
import useUpcomingFetcher from "./fetchUpcoming";
import "./Upcoming.css";
import Carousel from "react-bootstrap/Carousel";
export default function PopularItems() {
  const { upcoming } = useUpcomingFetcher();
  return (
    <div className="container">
      <h2 className="text-center text-warning baslik">Upcoming Items!!</h2>
      <hr />
      <Carousel id="carousel" wrap="true">
        <Carousel.Item>
          <div className="row">
            {upcoming
              .filter((item, index) => {
                return index < 3;
              })
              .map((items, i) => (
                <div key={i} className="col-md-4 text-center">
                  <img
                    className="card-img-top"
                    src={items.item.images.information}
                    alt={items.item.name}
                  />
                  <div className="card-body">
                    <a href="=" className="btn btn-light">
                      Get Info
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            {upcoming
              .filter((item, index) => {
                return index > 3 && index < 7;
              })
              .map((items, i) => (
                <div key={i} className="col-md-4 text-center">
                  <img
                    className="card-img-top"
                    src={items.item.images.information}
                    alt={items.item.name}
                  />
                  <div className="card-body">
                    <a href="=" className="btn btn-light">
                      Get Info
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            {upcoming
              .filter((item, index) => {
                return index > 7 && index < 11;
              })
              .map((items, i) => (
                <div key={i} className="col-md-4 text-center">
                  <img
                    className="card-img-top"
                    src={items.item.images.information}
                    alt={items.item.name}
                  />
                  <div className="card-body">
                    <a href="=" className="btn btn-light">
                      Get Info
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
