import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/upcoming/get";

function useUpcomingFetcher() {
  const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    const fetchUpcoming = async () => {
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
        const upcoming = await response.json();
        setUpcoming(upcoming.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("ebort");
        } else {
          throw error;
        }
      }
      setIsLoading(false);
    };
    fetchUpcoming();

    return () => {
      controller.abort();
    };
  }, []);
  return { upcoming, isLoading };
}
export default useUpcomingFetcher;
