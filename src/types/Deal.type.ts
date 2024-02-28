import { Interest } from "./Interest.type";

export type Deal = {
  id: number;
  title: string;
  content: string;
  location: string;
  price: number;
  imgSrc: string;
  sellerId: string;
  interested: Interest;
  views: number;
  createdAt: number;
  updatedAt: number;
  _count: {
    interested: number;
  };
};
