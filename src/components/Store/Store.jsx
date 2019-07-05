import React from "react";
import useStoreFetcher from "../../dataFetchers/fetchStore";
import "./Store.css";
export default function Store() {
  const { store } = useStoreFetcher();
  return (
    <div className="container">
      <div className="row">
        {store.map((items, i) => (
          <div key={i} className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src={items.item.images.background}
                alt={items.item.description}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{items.item.name}</h5>
                <div className="hover-texts">
                  <p className="card-text">
                    Description:{" "}
                    {items.item.description ? items.item.description : "???"}
                  </p>
                  <p className="card-text">Rarity: {items.item.rarity}</p>
                  <p className="card-text">
                    Ratings:
                    <i className="fas fa-star" />
                    {items.item.ratings.avgStars}
                  </p>
                  <p className="card-text">
                    Cost:
                    <i className="fas fa-coins" /> {items.item.ratings.avgStars}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
