import React, { useState, useEffect } from "react";
import useItemFetcher from "./fetchItems";
import "./Items.css";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Items() {
  const { items } = useItemFetcher();
  const [displayItems, setDisplayItems] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const time = new Date();

  useEffect(() => {
    //Filtre konacaksa buradan olacak
    setDisplayItems(items.slice(0, 16));
  }, [setDisplayItems, items]);

  function fetchMore() {
    setFetching(true);
    let first = displayItems.length;
    let concat = items.slice(first, first + 16);
    let ekle = displayItems.concat(concat);
    setTimeout(() => {
      setDisplayItems(ekle);
      setFetching(false);
    }, 1500);
  }
  return (
    <InfiniteScroll
      hasMore={true}
      next={fetchMore}
      dataLength={displayItems.length}
      loader={<h4>Loading...</h4>}
    >
      <div className="container-fluid">
        <div className="row">
          {displayItems.map((items, i) => (
            <div className="col-md-3" key={i}>
              <div className="card">
                <img
                  className="item-img"
                  src={items.item.images.background}
                  alt={items.item.description}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">{items.item.name}</h5>
                  <cite title="" className="text-dark">
                    Last Update: {time.toLocaleString(items.lastUpdate)}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}
