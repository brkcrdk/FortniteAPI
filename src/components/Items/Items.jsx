import React from "react";
import useItemFetcher from "./fetchItems";

export default function Items() {
  const { item } = useItemFetcher();
  console.log(item);
  return <div />;
}
