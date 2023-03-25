import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [URL]);
  return { data, error };
};

export default useFetch;
