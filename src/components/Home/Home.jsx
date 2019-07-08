import React from "react";
import "./Home.css";
import Info from "./Info/Info";
// import News from "./News/News";
import Votes from "./Votes/Votes";
import UpcomingItems from "./UpcomingItems/Upcoming";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Info />
        </div>
        <div className="col-md-3">
          <Votes />
        </div>
        <div className="col-md-6">
          <UpcomingItems />
        </div>
      </div>
    </div>
  );
}
