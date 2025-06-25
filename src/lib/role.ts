import { cookies, headers } from "next/headers";

export function getRole(): string {
  // server
  const h = headers();
  return h.get("x-user-role") ?? "developer";
}

