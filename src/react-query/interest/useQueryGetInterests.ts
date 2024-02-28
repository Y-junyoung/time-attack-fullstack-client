import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetInterests(enabled: boolean = true) {
  return useQuery({
    queryKey: ["interest"],
    queryFn: api.user.getInterests,
    enabled,
  });
}
