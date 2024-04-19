import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Add the Bearer token if it exists
 * in the localStorage.
 */
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Redirect to Login page in case of
 * getting a 401 status on a API call.
 */
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      localStorage.removeItem("token");
      window.location = "/auth/login";
    }

    return Promise.reject(error);
  }
);

export default instance;
