import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import useSWR from 'swr'
import { request } from './request'

export function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => request('/user/{id}', 'get', { id }),
  })
}

export function useApi<T>(path: string, opts?: { refresh: number }) {
  return useSWR<T>(path, () => request(path as any, 'get', {}), {
    refreshInterval: opts?.refresh,
  });
}
