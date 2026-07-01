'use client';
import { useState, useEffect, useCallback } from 'react';
import { statutesApi } from '@/lib/api';
import { Statute } from '@/types';

interface UseStatutesParams {
  search?: string;
  category?: string;
  jurisdiction?: string;
  litigation?: string;
}

export function useStatutes(params?: UseStatutesParams) {
  const [statutes, setStatutes] = useState<Statute[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatutes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await statutesApi.getAll({ limit: 300, ...params });
      const data = res.data;
      setStatutes(data.statutes ?? data.data ?? []);
      setTotal(data.total ?? 0);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch statutes');
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchStatutes();
  }, [fetchStatutes]);

  return { statutes, total, isLoading, error, refetch: fetchStatutes };
}

export function useStatuteCategories() {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    statutesApi
      .getCategories()
      .then((res) => {
        setCategories(res.data.categories ?? []);
        setTotal(res.data.total ?? 0);
      })
      .catch(() => {
        setCategories([]);
        setTotal(0);
      });
  }, []);

  return { categories, total };
}
