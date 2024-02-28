import { Deal } from "./Deal.type";
import { Interests } from "./Interest.type";

export type User = {
  id: number;
  email: string;
  encryptedPassword: string;
  myDeals: Deal[];
  interests: Interests;
};
