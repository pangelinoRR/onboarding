import { Outlet, Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

/**
 * Component that redirects to the Login page
 * if the user is not authenticated. If the user
 * is indeed authenticated, then it renders its child
 * component, which is the route to where the user intends
 * to navigate to.
 */
const AuthenticatedRoute = () => {
  const { token } = useToken();

  /**
   * If no token is set, redirect ot the Login page.
   */
  if (!token) {
    return <Navigate to={"/auth/login"} />;
  }

  /**
   * Render the child page.
   */
  return <Outlet />;
};

export default AuthenticatedRoute;
