import { headers } from "next/headers";

/**
 * Read Clerk role (set in middleware) on the **server**.
 * Falls back to “developer” when header missing (local dev).
 */
export async function getServerRole(): Promise<string> {
  const h = await headers();
  return h.get("x-user-role") ?? "developer";
}
