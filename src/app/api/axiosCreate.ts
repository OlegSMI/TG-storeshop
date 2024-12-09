import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "content-type": "application/json",
    // Accept: "application/json",
    "x-access-token": import.meta.env.VITE_APP_API_TOKEN,
  },
});

export default axiosInstance;
