import { CARBONCORE_URL } from "@/lib/env";

export async function POST(req: Request) {
  const body = await req.text();
  await fetch(`${CARBONCORE_URL}/vitals`, { method: "POST", body });
  return new Response(null, { status: 202 });
}
