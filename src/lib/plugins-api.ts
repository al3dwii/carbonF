import { request } from "@/lib/request";
export interface PluginStatus { enabled: boolean; lastActivity: string }

export async function fetchPluginStatus(
  orgId: string,
  handle: string,
): Promise<PluginStatus> {
  return request(`/api/org/${orgId}/plugins/${handle}/status`);
}

