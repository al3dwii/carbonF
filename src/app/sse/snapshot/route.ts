import { proxy } from "@/lib/proxy";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const org = url.searchParams.get("org");
  if (!org) return new Response("Missing org", { status: 400 });
  return proxy(req, `/org/${org}/snapshot/stream`);
}

