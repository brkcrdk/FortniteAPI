import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/stw_motd/get";

function useNewStwFetcher() {
  const [newStw, setNewStw] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    const fetchNews = async () => {
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
        const news = await response.json();
        setNewStw(news.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("ebort");
        } else {
          throw error;
        }
      }
      setIsLoading(false);
    };
    fetchNews();

    return () => {
      controller.abort();
    };
  }, []);
  return { newStw, isLoading };
}
export default useNewStwFetcher;
