import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
