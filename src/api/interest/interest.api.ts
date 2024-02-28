import { Response } from "@/types/Response.type";
import { client } from "..";

async function addInterestedDeal(dealId: number) {
  return await client.post<Response>(`/interests/deals/${dealId}`);
}

async function removeInterestedDeal(dealId: number) {
  return await client.delete<Response>(`/interests/deals/${dealId}`);
}

const interestAPI = {
  addInterestedDeal,
  removeInterestedDeal,
};

export default interestAPI;
