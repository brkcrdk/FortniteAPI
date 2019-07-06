import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/store/get";

function useStoreFetcher() {
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    const fetchStore = async () => {
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
        const store = await response.json();
        setStore(store.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("ebort");
        } else {
          throw error;
        }
      }
      setIsLoading(false);
    };
    fetchStore();

    return () => {
      controller.abort();
    };
  }, []);
  return { store, isLoading };
}
export default useStoreFetcher;
