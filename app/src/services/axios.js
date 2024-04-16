import axios from "axios";

export const axiosBasic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
