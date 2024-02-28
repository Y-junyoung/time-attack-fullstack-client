import axios from "axios";
import authAPI from "./auth/auth.api";
import dealsAPI from "./deal/deal.api";
import usersAPI from "./users/users.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  deals: dealsAPI,
  users: usersAPI,
};

export default api;
