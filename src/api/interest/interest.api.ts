import { Response } from "@/types/Response.type";
import { client } from "..";
import {
  addInterestedDealData,
  removeInterestedDealData,
} from "./interest.data";

async function addInterestedDeal(dealId: number) {
  const response = await client.post<Response<addInterestedDealData>>(
    `/interests/deals/${dealId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const interestedDeal = data.result;

  return interestedDeal;
}

async function removeInterestedDeal(dealId: number) {
  const response = await client.delete<Response<removeInterestedDealData>>(
    `/interests/deals/${dealId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const interestedDeal = data.result;

  return interestedDeal;
}

const interestAPI = {
  addInterestedDeal,
  removeInterestedDeal,
};

export default interestAPI;
