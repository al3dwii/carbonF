import { auth } from "@clerk/nextjs/server"; // ← Clerk SDK
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const { sessionClaims } = auth();
  const role = sessionClaims()?.publicMetadata?.role ?? "developer";
  const res = NextResponse.next();
  res.headers.set("x-user-role", role);
  return res;
}

export const config = { matcher: ["/org/:path*"] };

