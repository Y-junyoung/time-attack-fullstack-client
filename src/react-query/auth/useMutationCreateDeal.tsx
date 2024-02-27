import api from "@/api";
import { PostDealDTO } from "@/api/deal/deal.data";
import { useMutation } from "@tanstack/react-query";

export default function useMutationPostDeal() {
  return useMutation<unknown, unknown, PostDealDTO>({
    mutationFn: api.deals.postDeal,
  });
}
