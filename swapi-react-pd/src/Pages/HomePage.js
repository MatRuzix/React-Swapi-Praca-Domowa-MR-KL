import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <Button variant="outlined">
        <Link to="collections">Collections</Link>
      </Button>
    </div>
  );
}

export default HomePage;
