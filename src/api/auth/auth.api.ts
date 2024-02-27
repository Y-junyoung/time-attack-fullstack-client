import { Response } from "@/types/Response.type";
import { client } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  await client.post<Response>("/auth/users/sign-up", dto);
}

async function logIn(dto: LogInDto) {
  await client.post<Response>("/auth/users/log-in", dto);
}

async function logOut() {
  await client.post<Response>("/auth/users/log-out");
}

const authAPI = {
  signUp,
  logIn,
  logOut,
};

export default authAPI;
