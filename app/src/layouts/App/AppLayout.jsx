import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <p>Main</p>
      <Outlet />

      <NavLink to={"/auth/logout"}>Logout</NavLink>
    </div>
  );
};

export default MainLayout;
