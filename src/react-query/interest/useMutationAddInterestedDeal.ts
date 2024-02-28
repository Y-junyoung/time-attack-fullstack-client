import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationAddInterestedDeal() {
  const queryClient = useQueryClient();
  const mutationFn = api.interest.addInterestedDeal;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["interest"] }),
  });
}
