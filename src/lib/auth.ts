// // types only – NO server imports here
// export type { Role } from './auth.server';

// /* eslint-disable @typescript-eslint/no-unused-vars */
// export async function getRole() {
//   if (process.env.NODE_ENV !== 'production') {
//     console.debug('getRole() invoked in the browser. Returning "analyst".');
//   }
//   return 'analyst';
// }
// export const getUserWithRole = getRole;

// No server imports here — this file can be bundled in client components.
export type { Role } from "./auth.server";

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function getRole() {
  if (process.env.NODE_ENV !== "production") {
    console.debug('getRole() called in the browser; returning fallback "analyst".');
  }
  return "analyst";
}

/** Alias for legacy callers that expected getUserWithRole(). */
export const getUserWithRole = getRole;
