import { proxy } from "@/lib/proxy";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orgId: string }> }
) {
  const { orgId } = await params;
  const url = new URL(req.url);
  return proxy(req, `/org/${orgId}/trend${url.search}`);
}
