import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationRemoveInterestedDeal() {
  const queryClient = useQueryClient();
  const mutationFn = api.interest.removeInterestedDeal;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["interest"] }),
  });
}
