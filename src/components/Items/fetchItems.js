import { useState, useEffect } from "react";

const setUrl = "https://fortnite-api.theapinetwork.com/stw_motd/get";

function useItemFetcher() {
  // api den ne çekilecekse ona göre isim değişikliği yap
  const [item, setItem] = useState([]);
  //Buradan sonraki stateler fetch için
  const [isLoading, setIsLoading] = useState(false);

  //fetching data
  useEffect(() => {
    setIsLoading(true);
    fetchItems();
    setIsLoading(false);
  }, []);

  const fetchItems = async () => {
    const data = await fetch(setUrl, {
      method: "GET",
      headers: {
        Authorization: "38b07317ac7a38c1984131516b70834c"
      }
    });
    const items = await data.json();
    setItem(items.data);
  };
  //gönderilecek parametreleri seç
  return { item, isLoading };
}

export default useItemFetcher;
