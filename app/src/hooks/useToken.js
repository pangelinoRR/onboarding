import { useState } from "react";

/**
 * Hook that returns the token in the current state
 * and also a function to set a new token to the state
 * and the localStorage.
 */
export default function useToken() {
  /**
   * Retrieves the token from the localStorage.
   */
  const getToken = () => {
    return localStorage.getItem("token");
  };

  /**
   * Token saved in state.
   */
  const [token, setToken] = useState(getToken());

  /**
   * Function that sets the token in the state
   * and also in the localStorage.
   */
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    token,
    setToken: saveToken,
  };
}
