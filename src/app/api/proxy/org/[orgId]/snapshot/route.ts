import { CARBONCORE_URL } from "@/lib/env";

export async function GET(
  _req: Request,
  { params }: { params: { orgId: string } }
) {
  const res = await fetch(`${CARBONCORE_URL}/org/${params.orgId}/snapshot`);
  return new Response(await res.text(), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
