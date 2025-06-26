// import { auth } from "@clerk/nextjs/server"; // ← Clerk SDK
// import { NextResponse } from "next/server";

// export function middleware(req: Request) {
//   const { sessionClaims } = auth();
//   const role = sessionClaims()?.publicMetadata?.role ?? "developer";
//   const res = NextResponse.next();
//   res.headers.set("x-user-role", role);
//   return res;
// 

// export const config = { matcher: ["/org/:path*"] };

import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "experimental-edge";     // ✔ Next 15 expects this

export default clerkMiddleware(
  // callback may be async – clerkMiddleware accepts the Promise
  async (auth, req: NextRequest) => {
    // `auth()` returns a Promise<SessionAuthWithRedirect<…>>
    const { sessionClaims } = await auth();

    // publicMetadata is just {}, so cast to read `role`
    const role =
      (
        sessionClaims?.publicMetadata as
          | Record<string, unknown>
          | undefined
      )?.role ?? "developer";

    const res = NextResponse.next();
    res.headers.set("x-user-role", String(role));
    return res;
  }
);

// run only for /org/** pages (adjust as needed)
export const config = { matcher: ["/org/:path*"] };
