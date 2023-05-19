import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            setStatus("Details Fetched Successfully");
            setError(null);
            setLoading(false);
          } else {
            throw Error("Error in fetching Details");
          }
        })
        .catch((err) => {
          setStatus(null);
          setError(err.message);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return { status, error, loading };
};

export default useFetch;
