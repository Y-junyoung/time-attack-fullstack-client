import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetInterestedDealData, GetWrittenDealsData } from "./users.dto";

async function getWrittenDeals() {
  const response = await client.get<Response<GetWrittenDealsData>>(
    "/users/written"
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const writtenDeals = data.result;

  return writtenDeals;
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

const usersAPI = {
  getWrittenDeals,
  getInterests,
};

export default usersAPI;
