import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <p>Main</p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
