import React from "react";
import "./News.css";
import Carousel from "react-bootstrap/Carousel";
import useNewBrFetcher from "./fetchBrNews";

export default function News() {
  const { newBr } = useNewBrFetcher();
  return (
    <div>
      <Carousel id="new-container" fade="true">
        {newBr
          .filter((item, index) => {
            return index < 3;
          })
          .map((items, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={items.image}
                alt={items.title}
              />
              <Carousel.Caption>
                <h3>{items.title}</h3>
                <p>{items.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
