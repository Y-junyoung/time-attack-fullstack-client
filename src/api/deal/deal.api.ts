import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetDealData, GetDealsData } from "./deal.data";

async function getDeals() {
  const response = await client.get<Response<GetDealsData>>("/deals");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;

  return deals;
}

async function getDeal(dealId: number) {
  const response = await client.get<Response<GetDealData>>(`/deals/${dealId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deal = data.result;

  return deal;
}

const dealsAPI = {
  getDeals,
  getDeal,
};

export default dealsAPI;
