import React from "react";
import "./Home.css";
import News from "./News/News";
import UpcomingItems from "./UpcomingItems/Upcoming";
import Info from "./Info/Info";
export default function Home() {
  return (
    <div className="container" id="home">
      <div className="row">
        <div className="row ">
          <div className="col-12 ">
            <News />
          </div>
          <div className="col-12">
            <UpcomingItems />
          </div>
        </div>
        <div className="col-12">
          <Info />
        </div>
      </div>
    </div>
  );
}
