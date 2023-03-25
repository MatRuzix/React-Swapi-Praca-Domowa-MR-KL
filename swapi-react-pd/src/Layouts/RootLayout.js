import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="logo"></div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Games</NavLink>
          <NavLink to="/">Entry Creator</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
