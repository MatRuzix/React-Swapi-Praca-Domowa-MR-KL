import axios from "axios";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const BaseUrl = "https://swapi.dev/api";

const ButtonContainer = ({ dataContainerSetter }) => {
  const [fetchedData, setFetchedData] = useState([]);

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
      {Object.entries(fetchedData).map(([key, value]) => (
        <Button
          variant="outlined"
          key={key}
          onClick={() => {
            handleClick(dataContainerSetter, value);
          }}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;

const handleClick = async (dataContainerSetter, URL) => {
  let data;
  try {
    const response = await axios.get(URL);
    data = response.data.results;
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }

  dataContainerSetter(data);
};
