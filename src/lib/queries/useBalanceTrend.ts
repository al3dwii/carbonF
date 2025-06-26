import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

export interface BalancePoint {
  day: string;
  balance: number;
}

export function useBalanceTrend(orgId: string) {
  const { data } = useQuery<BalancePoint[]>({
    queryKey: ["balanceTrend", orgId],
    queryFn: () => request(`/api/org/${orgId}/balance/trend`),
  });
  return data ?? [];
}
