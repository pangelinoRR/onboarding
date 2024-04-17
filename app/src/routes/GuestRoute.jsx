import { Outlet, Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

/**
 * Component that redirects to the Home page
 * if the user is authenticated. It prevents an authenticated
 * user to access the Login or Register page.
 */
const GuestRoute = () => {
  const { token } = useToken();

  /**
   * If a token is set, redirect ot the Home page.
   */
  if (token) {
    return <Navigate to={"/"} />;
  }

  /**
   * Render the child page.
   */
  return <Outlet />;
};

export default GuestRoute;
