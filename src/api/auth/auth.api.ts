import { Response } from "@/types/Response.type";
import { client } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post<Response>("/auth/sign-up", dto);
  const data = response.data;
  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  localStorage.setItem("accessToken", String(accessToken));

  return accessToken;
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>("/auth/log-in", dto);
  const data = response.data;
  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  localStorage.setItem("accessToken", String(accessToken));

  return accessToken;
}

const authAPI = {
  signUp,
  logIn,
};

export default authAPI;
