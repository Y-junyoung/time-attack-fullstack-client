import { Deal } from "./Deal.type";

export type InterestedDeal = {
  id: number;
  interestId: string;
  dealId: number;
  deal: Deal;
  createdAt: number;
};

export type Interests = {
  userId: number;
  interestedDeals: InterestedDeal[];
};
