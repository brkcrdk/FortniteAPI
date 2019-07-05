import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/store/get";

function useStoreFetcher() {
  // api den ne çekilecekse ona göre isim değişikliği yap
  const [store, setStore] = useState([]);
  //Buradan sonraki stateler fetch için
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetching data
  useEffect(() => {
    setIsLoading(true);
    fetch(setUrl, {
      method: "GET",
      headers: {
        Authorization: "38b07317ac7a38c1984131516b70834c"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching tracks!");
        }
      })
      .then(store => {
        setStore(store.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);
  //gönderilecek parametreleri seç
  return { store, isLoading, error };
}

export default useStoreFetcher;
