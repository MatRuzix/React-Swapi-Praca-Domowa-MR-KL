import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function CollectionTable({ dataContainer }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => navigate("/collections");
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Return
      </Button>
      <h2>{id}</h2>
    </div>
  );
}
