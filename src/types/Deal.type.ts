import { InterestedDeal } from "./Interest.type";

export type Deal = {
  id: number;
  title: string;
  content: string;
  location: string;
  price: number;
  imgSrc: string;
  sellerId: string;
  interested: InterestedDeal;
  views: number;
  createdAt: number;
  updatedAt: number;
  _count: {
    interested: number;
  };
};
