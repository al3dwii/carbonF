import { headers } from "next/headers";

/**
 * Read Clerk role (set in middleware) on the **server**.
 * Falls back to “developer” when header missing (local dev).
 */
export function getServerRole(): string {
  return headers().get("x-user-role") ?? "developer";
}
