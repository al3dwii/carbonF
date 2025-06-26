// src/lib/getFetchInit.ts
export async function getFetchInit() {
  /* first await – anything async */
  await Promise.resolve();

  const { headers } = await import("next/headers");

  /* second await – before first touch */
  await Promise.resolve();

  const headerList = await headers();             // 1st use (OK)

  /* third await – before **iterating again** inside Object.fromEntries */
  await Promise.resolve();

  const asRecord = Object.fromEntries(headerList); // 2nd use (now OK)

  return { headers: asRecord };
}
