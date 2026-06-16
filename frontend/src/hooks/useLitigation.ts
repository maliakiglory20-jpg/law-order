'use client';
import { useState, useEffect, useCallback } from 'react';
import { litigationApi } from '@/lib/api';
import { LitigationType } from '@/types';

interface UseLitigationTypesParams {
  category?: string;
  search?: string;
}

export function useLitigationTypes(params?: UseLitigationTypesParams) {
  const [types, setTypes] = useState<LitigationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTypes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await litigationApi.getAll({ ...params, limit: 100 });
      const data = res.data;
      setTypes(data.types ?? data.data ?? []);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch litigation types');
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchTypes();
  }, [fetchTypes]);

  return { types, isLoading, error, refetch: fetchTypes };
}

export function useLitigationType(slug: string) {
  const [type, setType] = useState<LitigationType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    setError(null);
    litigationApi
      .getBySlug(slug)
      .then((res) => setType(res.data))
      .catch((err) => setError(err.response?.data?.message || 'Failed to fetch litigation type'))
      .finally(() => setIsLoading(false));
  }, [slug]);

  return { type, isLoading, error };
}
