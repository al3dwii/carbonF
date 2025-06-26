import { CARBONCORE_URL } from "@/lib/env";

export async function GET(
  req: Request,
  { params }: { params: { orgId: string } }
) {
  const url = new URL(req.url);
  const res = await fetch(
    `${CARBONCORE_URL}/org/${params.orgId}/trend${url.search}`
  );
  return new Response(await res.text(), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
