import { request } from "@/lib/request";
import type { Kpi } from "@/types/kpi";

export async function fetchKpis(orgId: string): Promise<{ items: Kpi[] }> {
  return request(`/api/org/${orgId}/kpi`);
}
