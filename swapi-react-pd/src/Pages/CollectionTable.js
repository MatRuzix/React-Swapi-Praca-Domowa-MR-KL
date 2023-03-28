import { Button } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function CollectionTable({ dataContainer }) {
  const navigate = useNavigate();
  const collectionData = useLoaderData();

  const handleClick = () => navigate("/collections");
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Return
      </Button>
      {collectionData.results.map(({ name }) => {
        return <div>{name}</div>;
      })}
    </div>
  );
}
