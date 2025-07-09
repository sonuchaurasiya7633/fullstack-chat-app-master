import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chat-app-master-1-backend.onrender.com/api" : "/api",
  withCredentials: true,
});
