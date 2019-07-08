import React from "react";
import useUpcomingFetcher from "./fetchUpcoming";
import "./Upcoming.css";
export default function PopularItems() {
  const { upcoming } = useUpcomingFetcher();
  console.log(upcoming);
  return (
    <div className="container">
      <div className="row upcoming">
        {upcoming
          .filter((item, index) => {
            return index < 9;
          })
          .map((items, i) => (
            <div className="col-md-4">
              <img src={items.item.images.background} alt="." />
            </div>
          ))}
      </div>
    </div>
  );
}
