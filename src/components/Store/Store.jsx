import React from "react";
import useStoreFetcher from "./fetchStore";
import "./Store.css";
export default function Store() {
  const { store, isLoading } = useStoreFetcher();
  let time = new Date();
  return (
    <div className="container">
      {!isLoading ? (
        <div className="row">
          {store.map((items, i) => (
            <div key={i} className="col-md-3">
              <div className="card">
                {items.store.isNew ? (
                  <img
                    src="https://img.icons8.com/doodle/48/000000/new.png"
                    alt=""
                    className="new"
                  />
                ) : (
                  ""
                )}
                <img
                  className="card-img-top"
                  src={items.item.images.background}
                  alt={items.item.description}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">{items.item.name}</h5>
                  <cite title="" className="text-dark">
                    Last Update: {time.toLocaleString(items.lastUpdate)}
                  </cite>
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
                      <i className="fas fa-coins" /> {items.store.cost}
                    </p>
                    <p className="card-text">Type: {items.item.type} </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Please Wait...</h1>
      )}
    </div>
  );
}
