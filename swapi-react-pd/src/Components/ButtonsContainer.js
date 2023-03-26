import axios from "axios";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BaseUrl = "https://swapi.dev/api";

const ButtonsContainer = ({ dataContainerSetter }) => {
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const fetchData = async (URL) => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        setFetchedData(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData(BaseUrl);
  }, []);

  const handleClick = async (dataContainerSetter, URL) => {
    let data;
    try {
      const response = await axios.get(URL);
      data = response.data.results;
    } catch (error) {
      console.log(error.response);
    }

    dataContainerSetter(data);
  };

  return (
    <div>
      {Object.entries(fetchedData).map(([key, value]) => (
        <Button
          variant="outlined"
          key={key}
          onClick={() => {
            handleClick(dataContainerSetter, value);
            navigate(`/collections/${key}`);
          }}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
