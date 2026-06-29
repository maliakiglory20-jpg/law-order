'use client';
import { useState, useEffect, useCallback } from 'react';
import { glossaryApi } from '@/lib/api';
import { GlossaryTerm } from '@/types';

interface UseGlossaryParams {
  search?: string;
  category?: string;
  letter?: string;
  limit?: number;
}

export function useGlossary(params?: UseGlossaryParams) {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTerms = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await glossaryApi.getAll({ limit: 500, ...params });
      const data = res.data;
      setTerms(data.terms ?? data.data ?? []);
      setTotal(data.total ?? 0);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch glossary');
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchTerms();
  }, [fetchTerms]);

  return { terms, total, isLoading, error, refetch: fetchTerms };
}

export function useGlossaryCategories() {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    glossaryApi
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
