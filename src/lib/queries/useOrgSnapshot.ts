import { request } from "@/lib/request";

export interface OrgSnapshot {
  total: number;
  totalTrend: number[];
  co2: number;
  co2Trend: number[];
  topProject: { name: string; trend: number[] };
}

export async function useOrgSnapshot(orgId: string): Promise<OrgSnapshot> {
  return request(`/api/org/${orgId}/snapshot`);
}
