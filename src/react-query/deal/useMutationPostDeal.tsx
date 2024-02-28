import api from "@/api";
import { PostDealDTO } from "@/api/deal/deal.data";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationPostDeal() {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, PostDealDTO>({
    mutationFn: api.deal.postDeal,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deals"] }),
  });
}
