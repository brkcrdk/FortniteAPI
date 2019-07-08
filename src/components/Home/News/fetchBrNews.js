import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/br_motd/get";

function useNewBrFetcher() {
  const [newBr, setNewBr] = useState([]);
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
        setNewBr(news.data);
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
  return { newBr, isLoading };
}
export default useNewBrFetcher;
