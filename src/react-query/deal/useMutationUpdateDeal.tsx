import api from "@/api";
import { UpdateDealDTO } from "@/api/deal/deal.data";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationUpdateDeal() {
  const queryClient = useQueryClient();
  const mutationFn = async ({
    dto,
    dealId,
  }: {
    dto: UpdateDealDTO;
    dealId: number;
  }) => {
    return api.deal.updateDeal(dto, dealId);
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deals"] }),
  });
}
