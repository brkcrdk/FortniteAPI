import React from "react";
import "./Home.css";
import News from "./News/News";
import UpcomingItems from "./UpcomingItems/Upcoming";
import Info from "./Info/Info";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-6">
              <News />
            </div>
            <div className="col-md-6">
              <UpcomingItems />
            </div>
          </div>
        </div>
        <div className="col-12">
          <Info />
        </div>
      </div>
    </div>
  );
}
