import { useEffect, useState } from "react";
import axios from "../api";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataLoad = async () => {
      setLoading(true);
      try {
        const res = await axios.post(url);
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    dataLoad();
  }, [url]);

  console.log(data);

  return { data, loading, error };
};
