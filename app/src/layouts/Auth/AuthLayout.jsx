import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.formBox}>
        <h1>Onboarding App</h1>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
