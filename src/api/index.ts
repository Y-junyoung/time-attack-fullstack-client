import axios from "axios";
import authAPI from "./auth/auth.api";
import dealAPI from "./deal/deal.api";
import interestAPI from "./interest/interest.api";
import usersAPI from "./users/users.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  deal: dealAPI,
  user: usersAPI,
  interest: interestAPI,
};

export default api;
