import { Button } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="logo"></div>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Games
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Entry Creator
          </Button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
