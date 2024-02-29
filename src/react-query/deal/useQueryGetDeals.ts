import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetDeals(enabled: boolean = true) {
  return useQuery({
    queryKey: ["deals"],
    queryFn: api.deal.getDeals,
    enabled,
  });
}
