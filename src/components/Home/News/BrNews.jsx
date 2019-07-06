import React from "react";
import useNewBrFetcher from "./fetchBrNews";

export default function BrNews() {
  const { newBr, isLoading } = useNewBrFetcher();
  return (
    <div>
      {!isLoading ? (
        <ul className="list-unstyled">
          {newBr
            .filter((item, index) => {
              return index < 5;
            })
            .map((item, i) => (
              <li key={i} className="media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mr-3 align-self-center"
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">{item.title}</h5>
                  {item.body}
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <h1>Please Wait...</h1>
      )}
    </div>
  );
}
