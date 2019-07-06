// import { useState, useEffect } from "react";

// const setUrl = "https://fortnite-api.theapinetwork.com/stw_motd/get";

// function useNewStwFetcher() {
//   const [newStw, setNewStw] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const abortController = new AbortController();
//   const signal = abortController.signal;

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(
//       setUrl,
//       {
//         method: "GET",
//         headers: {
//           Authorization: "38b07317ac7a38c1984131516b70834c"
//         }
//       },
//       { signal: signal }
//     )
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           console.log("error fetching newStw");
//           throw Error("Error fetching !");
//         }
//       })
//       .then(news => {
//         setNewStw(news.data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         console.log(error + "newStw");
//       });
//     return function cleanup() {
//       abortController.abort();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   //gönderilecek parametreleri seç
//   return { newStw, isLoading, error };
// }

// export default useNewStwFetcher;
import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/stw_motd/get";

function useNewStwFetcher() {
  const [newStw, setNewStw] = useState([]);
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
    fetchStore();

    return () => {
      controller.abort();
    };
  }, []);
  return { newStw, isLoading };
}
export default useNewStwFetcher;
