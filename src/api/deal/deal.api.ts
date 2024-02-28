import { Response } from "@/types/Response.type";
import { client } from "..";
import {
  GetDealData,
  GetDealsData,
  PostDealDTO,
  UpdateDealDTO,
} from "./deal.data";

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

async function postDeal(dto: PostDealDTO) {
  return await client.post<Response>("/deals/create", dto);
}

async function removeDeal(dealId: number) {
  return await client.delete<Response>(`/deals/${dealId}`);
}

async function updateDeal(dto: UpdateDealDTO, dealId: number) {
  return await client.put<Response>(`/deals/${dealId}`, dto);
}

const dealAPI = {
  getDeals,
  getDeal,
  postDeal,
  removeDeal,
  updateDeal,
};

export default dealAPI;
