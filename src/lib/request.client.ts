// absolutely minimal – no cookies, no headers
export async function request<T = unknown>(
  input: string,
  init: RequestInit & { revalidate?: number } = {},
): Promise<T> {
  const res = await fetch(input, {
    credentials: 'include',
    next: { revalidate: init?.revalidate ?? 30 },
    ...init,
  });
  if (!res.ok) throw new Error(`[${res.status}] ${res.statusText} @ ${input}`);
  return res.headers.get('content-type')?.includes('application/json')
    ? res.json()
    : (res.text() as unknown as T);
}
