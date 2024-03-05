import axios from "axios";
import authAPI from "./auth/auth.api";
import dealAPI from "./deal/deal.api";
import interestAPI from "./interest/interest.api";
import usersAPI from "./users/users.api";

export const client = axios.create({
  baseURL:
    "https://port-0-time-attack-fullstack-server-17xco2lltdolap1.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  deal: dealAPI,
  user: usersAPI,
  interest: interestAPI,
};

export default api;
