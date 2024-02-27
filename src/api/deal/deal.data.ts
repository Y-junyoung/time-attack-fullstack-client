import { Deal } from "@/types/Deal.type";

export type GetDealsData = Deal[];

export type GetDealData = Deal;

export type PostDealDTO = {
  title: string;
  content: string;
  location: string;
  price: number;
  imgSrc?: string;
};
