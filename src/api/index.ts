import axios from "axios";
import authAPI from "./auth/auth.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const api = {
  auth: authAPI,
};

export default api;
