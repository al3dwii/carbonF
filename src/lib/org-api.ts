import { request } from "@/lib/client";
import { Org } from "@/types/org";

export async function fetchOrgs(): Promise<Org[]> {
  const data = (await request("/orgs", "get", {})) as any;
  return Org.array().parse(data);
}
