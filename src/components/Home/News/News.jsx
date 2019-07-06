import React from "react";
import "./News.css";
import BrNews from "./BrNews";
import StwNews from "./StwNews";
import Carousel from "react-bootstrap/Carousel";

export default function News() {
  return (
    <div>
      <Carousel pauseOnHover="true" slide="true">
        <Carousel.Item>
          <BrNews />
        </Carousel.Item>
        <Carousel.Item>
          <StwNews />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
