import axios from "axios";

// Create axios instance
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // use env variable
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Optional: add interceptors (for auth, errors, etc.)
axiosClient.interceptors.response.use(
  (response) => response, // pass through successful responses
  (error) => {
    // You can handle global errors here
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
