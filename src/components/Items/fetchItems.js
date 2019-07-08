import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/items/list";

function useItemFetcher() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          setUrl,
          {
            method: "GET",
            headers: {
              Authorization: "38b07317ac7a38c1984131516b70834c"
            }
          },
          { signal: controller.signal }
        );
        const items = await response.json();
        setItems(items.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("ebort");
        } else {
          throw error;
        }
      }
      setIsLoading(false);
    };
    fetchItems();

    return () => {
      controller.abort();
    };
  }, []);
  return { items, isLoading };
}
export default useItemFetcher;
