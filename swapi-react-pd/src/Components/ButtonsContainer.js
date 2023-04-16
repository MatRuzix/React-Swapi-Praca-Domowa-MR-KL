import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../Fetching/fetchData";
const BaseUrl = "https://swapi.dev/api";

const ButtonsContainer = () => {
  const navigate = useNavigate();

  const fetchedData = useQuery({
    queryKey: ["collections"],
    queryFn: () => fetchData(BaseUrl),
  });

  console.log(fetchedData.data);

  if (fetchedData.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (fetchedData.isError) {
    return <h2>{JSON.stringify(fetchData.error)}</h2>;
  }

  return (
    <div>
      {Object.entries(fetchedData.data).map(([key, value]) => (
        <Button
          variant="outlined"
          key={key}
          onClick={async () => {
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
