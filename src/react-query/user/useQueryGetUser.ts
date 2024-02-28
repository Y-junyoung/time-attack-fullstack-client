import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetUser(enabled: boolean = true) {
  return useQuery({
    queryKey: ["users"],
    queryFn: api.user.getUser,
    enabled,
  });
}
