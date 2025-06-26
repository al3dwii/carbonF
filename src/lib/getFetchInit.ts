// ALWAYS call from inside another helper, never directly in <Page>
export async function getFetchInit() {
  const { headers } = await import("next/headers");
  return {
    headers: Object.fromEntries(headers()),
  };
}
