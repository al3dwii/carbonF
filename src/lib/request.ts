// src/lib/request.ts
// A tiny proxy that loads the *right* implementation at run-time.
// Works in both the browser bundle and on the server.

type ReqModule = typeof import('./request.client'); // same sig on both sides
type ReqFn = ReqModule['request'];

let implPromise: Promise<ReqFn> | null = null;

async function load(): Promise<ReqFn> {
  if (implPromise) return implPromise; // cached after first call

  implPromise = (async () => {
    if (typeof window === 'undefined') {
      // server – next/headers etc. are allowed
      const mod = await import('./request.server') as ReqModule;
      return mod.request;
    }
    // client – no server-only imports
    const mod = await import('./request.client') as ReqModule;
    return mod.request;
  })();

  return implPromise;
}

/** Call this everywhere – it forwards to the correct implementation. */
export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export async function request<T = unknown, Q = {}, M extends Method = 'GET'>(
  url: string,
  params?: Q,
  method?: M,
  body?: any,
): Promise<T> {
  const real = await load();

  if (params && Object.keys(params as any).length) {
    const u = new URL(url, 'http://x');
    Object.entries(params as any).forEach(([k, v]) =>
      u.searchParams.set(k, String(v))
    );
    url = u.pathname + u.search;
  }

  const init: RequestInit = {};
  if (method) init.method = method;
  if (body) init.body = JSON.stringify(body);

  // eslint-disable-next-line @typescript-eslint/return-await
  return real<T>(url, init as Parameters<ReqFn>[1]);
}
