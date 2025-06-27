import { proxy } from "@/lib/proxy";

export async function GET(req: Request, { params }: { params: Promise<{ orgId: string }> }) {
  const { orgId } = await params;
  return proxy(req, `/org/${orgId}/ecoedge/summary`);
}

