import axios from "axios";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";

const BaseUrl = "https://swapi.dev/api";

const ButtonContainer = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentDataContainer, setCurrentDataContainer] = useState([]);

  useEffect(() => {
    const fetchData = async (URL) => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        console.log(data);
        setFetchedData(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData(BaseUrl);
  }, []);
  return (
    <div>
      {Object.keys(fetchedData).map((key) => (
        <Button variant="outlined" key={key}>
          {key}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
