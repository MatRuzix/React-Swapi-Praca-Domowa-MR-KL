import { Button } from "@mui/material";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function CollectionTable({ dataContainer }) {
  const navigate = useNavigate();
  const [collectionData, setCollectionData] = useState(useLoaderData());

  const handleClick = () => navigate("/collections");
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Return
      </Button>
    </div>
  );
}
