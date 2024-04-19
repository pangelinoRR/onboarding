import { useEffect } from "react";
import axios from "../../../services/axios";

const HomePage = () => {
  /**
   * Only to test Axios Interceptors on response Unauthorized.
   */
  useEffect(() => {
    const testApi = async () => {
      await axios.get(
        "http://localhost:3000/api/users/661d4e4c74f8f7a667faa73b"
      );
    };

    testApi();
  }, []);

  return <p>Home Page</p>;
};

export default HomePage;
