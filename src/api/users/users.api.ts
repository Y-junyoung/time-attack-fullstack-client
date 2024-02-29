import { Response } from "@/types/Response.type";
import { User } from "@/types/user.type";
import { client } from "..";
import { GetInterestedDealData, GetWrittenDealsData } from "./users.dto";

async function getWrittenDeals() {
  const response = await client.get<Response<GetWrittenDealsData>>(
    "/users/written"
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

async function getInterests() {
  const response = await client.get<Response<GetInterestedDealData>>(
    "/users/interest"
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const interests = data.result;

  return interests;
}

async function getUser() {
  const response = await client.get<Response<User>>("/users");
  const data = response.data;
  const user = data.result;

  return user;
}

const usersAPI = {
  getWrittenDeals,
  getInterests,
  getUser,
};

export default usersAPI;
