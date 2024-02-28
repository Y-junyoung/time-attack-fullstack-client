import { Deal } from "./Deal.type";

export type InterestedDeal = {
  id: number;
  userId: string;
  dealId: number;
  deal: Deal;
  createdAt: number;
};

export type Interests = {
  userId: string;
  interestedDeals: InterestedDeal[];
};
