import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const Logout = () => {
  const navigate = useNavigate();
  const { logout, token } = useToken();

  /**
   * If a token exists, logout.
   */
  if (token) {
    logout();
  }

  /**
   * As soon as the token becomes null,
   * navigate to the login page.
   */
  useEffect(() => {
    navigate("/auth/login");
  }, [token, navigate]);

  return null;
};

export default Logout;
