import React from "react";
import "./News.css";
import useNewsFetcher from "./fetchNews";

import Carousel from "react-bootstrap/Carousel";
export default function BrNews() {
  const { news } = useNewsFetcher();
  return (
    <div className="container-fluid">
      <h2 className="text-center text-danger baslik">NEWS</h2>
      <hr />
      <Carousel id="news-caro" wrap="true" fade="true">
        {news
          .filter((news, index) => {
            return index < 6;
          })
          .map((news, i) => (
            <Carousel.Item key={i}>
              <React.Fragment>
                <img
                  className="d-block w-100"
                  src={news.image}
                  alt={news.title}
                />
                <Carousel.Caption>
                  <h3>{news.title}</h3>
                  <p>{news.body}</p>
                </Carousel.Caption>
              </React.Fragment>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
