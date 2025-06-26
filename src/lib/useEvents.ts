import { useInfiniteQuery } from '@tanstack/react-query';
import { qk } from './queryKeys';
import { request } from './request';

export const getNextPage = (last: { nextCursor?: string }) => last.nextCursor ?? undefined;

export function useEvents(params: Record<string, string>) {
  return useInfiniteQuery({
    queryKey: qk.events(params),
    initialPageParam: '',
    queryFn: ({ pageParam }) =>
      request('/api/events', { ...params, cursor: pageParam }),
    getNextPageParam: (last) => last.nextCursor,
    staleTime: 30_000,
  });
}
