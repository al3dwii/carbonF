// import { currentUser, clerkClient } from '@clerk/nextjs/server';

// export type Role = 'ops' | 'dev' | 'analyst';

// export async function getUserWithRole() {
//   const user = await currentUser();
//   if (!user) return null;

//   //  \u2199 tweak this to wherever you store the role
//   const role = (user.publicMetadata.role as Role | undefined) ?? 'analyst';
//   return { id: user.id, role };
// }

// export async function getRole(): Promise<Role> {
//   return (await getUserWithRole())?.role ?? 'analyst';
// }

// "use server";                       // ✅ keeps Next.js from bundling this into the client
// import { currentUser } from "@clerk/nextjs/server";

// export type Role = "ops" | "dev" | "analyst";

// /** Returns full user object + role (or `null` if unauthenticated). */
// export async function getUserWithRole() {
//   const user = await currentUser();
//   if (!user) return null;

//   // 👇 tweak this line to wherever you store the role
//   const role = (user.publicMetadata.role as Role | undefined) ?? "analyst";
//   return { id: user.id, role };
// }

// /** Convenience shortcut that only returns the role string. */
// export async function getRole(): Promise<Role> {
//   return (await getUserWithRole())?.role ?? "analyst";
// }

import { currentUser } from "@clerk/nextjs/server";

export type Role = "ops" | "dev" | "analyst";

export async function getRole(): Promise<Role> {
  if (!process.env.CLERK_SECRET_KEY) return "analyst";
  const user = await currentUser().catch(() => null);
  return (user?.publicMetadata.role as Role | undefined) ?? "analyst";
}
