import { useState, useEffect } from "react";

const setUrl = "";

function useVoteFetcher() {
  const [votes, setVotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      .then(votes => {
        setVotes(votes.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);
  return { votes, isLoading, error };
}

export default useVoteFetcher;
